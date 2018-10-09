import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
