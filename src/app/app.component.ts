import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  yourName = 'Deepansh'
  currentVal = ""
  /**
   * Need to define the data type of parameter
   * no need to write function keyword
   * @param name 
   */

  getName(name: string){ 
    alert(name+" function called");
  }

  myEvent(evt: string){
    console.log(evt);
    this.currentVal = evt;
  }
}
