import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Le Refresh Page :D';
  dato: string = 'Try and pull down the page!';
  constructor() {}
  handleRefresh(event) {
    setTimeout(() => {
      var current = new Date();
      this.dato = `Tidspunkt: ${current.toLocaleTimeString()}`;
      event.target.complete();
    }, 250);
  }
}
