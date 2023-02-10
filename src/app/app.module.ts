import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot()],
  declarations: [AppComponent, HelloComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
