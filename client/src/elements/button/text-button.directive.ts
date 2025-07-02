import { computed, Directive, input } from '@angular/core';
import { ButtonType } from './button.symbols';

@Directive({
  selector: '[cpjeTextButton]',
  host: {
    class: 'cpje-button',
    '[class]': 'typeClass()',
  },
})
export class TextButtonDirective {
  readonly type = input<ButtonType>('light', {
    alias: 'cpjeTextButton',
  });

  protected readonly typeClass = computed(() =>
    `cpje-button-${this.type()}`
  );
}
