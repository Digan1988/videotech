import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailerService } from '../mailer.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {
  feedbackForm = new FormGroup({
    name: new FormControl('', []),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email])
  });
  hasProgress: boolean = false;
  constructor(private mailer: MailerService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.feedbackForm.value);
    if(this.feedbackForm.valid){
        this.hasProgress = true;
        this.mailer.Send(this.feedbackForm.value, (success) => {
          this.hasProgress = false;

            if(success){
              this.snackBar.open('Заявка успешно отправлена!', '', {
                duration: 1500,
              });
            }
            else{
              this.snackBar.open('Ошибка отправки. Попробуйте позже', '',{
                duration: 1500,
              });
            }
        });
    }
  }

}
