import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
