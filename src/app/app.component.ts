import { Component } from '@angular/core';

const ALERTS = [
    {
        type: 'success',
        message: 'This is an success alert',
    },
    {
        type: 'info',
        message: 'This is an info alert',
    },
    {
        type: 'warning',
        message: 'This is a warning alert',
    },
    {
        type: 'danger',
        message: 'This is a danger alert',
    },
    {
        type: 'primary',
        message: 'This is a primary alert',
    },
    {
        type: 'secondary',
        message: 'This is a secondary alert',
    },
    {
        type: 'light',
        message: 'This is a light alert',
    },
    {
        type: 'dark',
        message: 'This is a dark alert',
    },
];
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular';
    alert = ALERTS.slice() // copy array
    close(alert:any) {
		this.alert.splice(this.alert.indexOf(alert), 1);
	}
    reset(){
        this.alert = Array.from(ALERTS);
    }
}
