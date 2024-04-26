import { Component } from '@angular/core';
import { UserDataService } from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = "";
  constructor(private user: UserDataService) {
    this.name = this.user.getData().name;
  }
}
