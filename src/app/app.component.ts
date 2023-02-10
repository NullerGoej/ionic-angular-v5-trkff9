import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HelloComponent } from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  handleRefresh(event) {
    setTimeout(() => {
      var current = new Date();
      document.getElementById(
        'dato'
      ).innerText = `Tidspunkt: ${current.toLocaleTimeString()}`;
      event.target.complete();
    }, 2000);
  }
}
