import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatFormFieldModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatInputModule,
  MatProgressBarModule,
  MatCardModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { InfoComponent } from './info/info.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { LogoComponent } from './logo/logo.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

import { MailerService } from './mailer.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackformComponent,
    HeaderComponent,
    FooterComponent,
    SolutionsComponent,
    InfoComponent,
    PhoneNumberComponent,
    LogoComponent,
    FeedbackComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'videotech' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
