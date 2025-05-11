import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'cpje-icon-button',
  templateUrl: 'icon-button.component.html',
  styleUrl: 'icon-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-icon-button',
  },
  imports: [IconComponent],
})
export class IconButtonComponent {
  readonly icon = input<string>('');
  readonly onClick = output<MouseEvent>();
}
