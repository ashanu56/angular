import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular';
    show = true;
    showString = 'yes';
    showColor = 'red';
    changeCondition() {
        this.show = !this.show;
        var showString = 'no';
        if (this.show) {
            var showString = 'yes';
        }
        this.showString = showString;
    }
}
