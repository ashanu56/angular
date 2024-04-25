import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  color="orange";
  err= false;
  updateColor(){
    this.color = 'pink';
    this.err = true;
  }
}
