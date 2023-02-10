import { Component, Input } from '@angular/core';

@Component({
  selector: 'customHeader',
  template: `{{title}}`,
})
export class HeaderComponent {
  @Input() public title: string;
}
