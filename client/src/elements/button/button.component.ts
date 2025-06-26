import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { ButtonType } from './button.symbols';

@Component({
  selector: 'button[cpjeButton]',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-button cpj-flex-row cpj-align-center',
    '[class]': 'typeClass()',
  },
})
export class ButtonComponent {
  readonly type = input<ButtonType>('light', {
    alias: 'cpjeButton',
  });

  protected readonly typeClass = computed(() =>
    `cpje-button-${this.type()}`
  );
}
