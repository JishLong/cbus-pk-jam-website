import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpj-icon',
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpj-icon cpj-icons',
  },
})
export class IconComponent {
  readonly icon = input<string>('');
}
