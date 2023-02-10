import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hej {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() public name: string;
  @Input() public dato: string;
}
