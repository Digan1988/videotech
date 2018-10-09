import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.feedbackForm.value);

    if(this.feedbackForm.valid){
      this.hasProgress = true;
      setTimeout(() =>{
        this.hasProgress = false;
      }, 2000);
    }
  }

}
