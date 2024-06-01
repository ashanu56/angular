import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  sampleForm = new FormGroup({
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
  })
}
