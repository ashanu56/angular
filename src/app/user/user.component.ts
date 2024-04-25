import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  @Output() parentFunction: EventEmitter<object> = new EventEmitter()
  constructor() { }

  sendData() {
    this.parentFunction.emit({ name: 'Shanu', age: 25 })
  }
}