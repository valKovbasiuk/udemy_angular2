import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  count = 0;
  logs = [];

  toggleShow() {
    this.show = !this.show;
    this.logs.push(this.count + 1);
    this.count++;
  }

  getColor() {
    let a = this.count > 4 ? "blue" : "";
    return a;
  }
}
