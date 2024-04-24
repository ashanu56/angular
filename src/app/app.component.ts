import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  empNames=['Deepansh ','Rahul','PP','Sneha']
  data=[
    {
        name: "deepansh",
        age: "25"
    },
    {
        name: "rahul",
        age: "25"
    },
  ]
}
