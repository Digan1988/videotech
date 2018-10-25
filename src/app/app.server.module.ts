import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { MailerService } from './mailer.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    HttpClientModule
  ],
  providers: [
    // Add universal-only providers here
    MailerService
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
