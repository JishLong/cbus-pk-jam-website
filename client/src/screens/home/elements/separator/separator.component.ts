import { Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpjs-home-separator',
  template: ``,
  styleUrl: 'separator.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-separator',
    '[class]': 'orientationClass()',
  },
})
export class HomeSeparatorComponent {
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');

  protected readonly orientationClass = computed(() =>
    `cpjs-home-separator-${ this.orientation() }`
  );
}
