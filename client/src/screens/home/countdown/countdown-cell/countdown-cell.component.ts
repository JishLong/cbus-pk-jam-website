import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { ElementTransitionDirective } from '../../../../framework/element-transition/element-transition.directive';

@Component({
  selector: 'cpjs-countdown-cell',
  templateUrl: 'countdown-cell.component.html',
  styleUrl: 'countdown-cell.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-countdown-cell cpj-flex-column',
  },
  imports: [ElementTransitionDirective],
})
export class CountdownCellComponent {
  readonly count = input.required<number>();
  readonly unit = input.required<string>();

  protected readonly countString = computed(() =>
    this.count().toString().padStart(2, '0')
  );
  protected readonly unitString = computed(() => {
    const unit = this.unit();
    return this.count() === 1 ? unit : unit.concat('s');
  });
}
