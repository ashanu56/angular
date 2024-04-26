import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData() {
    let data = {
      "name": "shanu",
      "age": 25
    }
    return data;
  }
}
