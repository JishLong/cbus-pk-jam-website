import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpje-icon',
  templateUrl: 'icon.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-icon cpj-icon',
  },
})
export class IconComponent {
  readonly icon = input<string>('');
}
