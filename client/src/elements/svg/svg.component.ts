import { Component, input, ViewEncapsulation } from '@angular/core';
import { SvgType } from './svg.symbols';

@Component({
  selector: 'cpje-svg',
  templateUrl: 'svg.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-svg cpj-position-relative',
    '[style.width]': 'dimensions()',
    '[style.height]': 'dimensions()',
  },
})
export class SvgComponent {
  readonly type = input.required<SvgType>();
  readonly dimensions = input<string>('24px');
}
