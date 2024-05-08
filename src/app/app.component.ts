import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import {Data} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  apiData: Data[] = [];
  constructor(private user:UserDataService) {}
  getApiData(){
    this.user.getData().subscribe((data) => {
      console.log(data);
      this.apiData = data;
    })
  }
}
