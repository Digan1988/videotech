// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

const bodyParser = require("body-parser");

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.post('/sendMessage', (req, res) => {
    let body = req.body;
    let name = body.name || 'Не указано';
    let phone = body.phone;
    let email = body.email || 'Не указан';
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
      //service: 'gmail',
      host: "smtp.yandex.ru",
      port:465,
      secure: true,
      auth: {
        user: 'videotech.5mtp@yandex.ru',
        pass: 'ugTXMO'
      }
    });
    
    let mailOptions = {
      from: 'videotech.5mtp@yandex.ru',
      to: 'digan88@mail.ru',
      subject: 'Новая заявка!',
      text: `Имя: ${name} Телефон: ${phone} E-mail: ${email}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ error: error });
      } else {
        res.status(200).json({ message: `Email sent: ${info.response}` });
      }
    });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
