import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  author = 'Shanu';
  data=[
    {
        'name':'Deepansh',
        'age': 25,
        'address':'Gwalior'
    },
    {
        'name':'Prashant',
        'age': 48,
        'address':'Ahmedabad'
    },
    {
        'name':'Rahul',
        'age': 26,
        'address':'Kalol'
    },
  ];
}
