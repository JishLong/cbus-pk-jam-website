import { Component, DestroyRef, inject, ViewEncapsulation } from '@angular/core';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { CountdownService } from '../../../../utils/countdown/countdown.service';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';
import { CountdownCellComponent } from './countdown-cell/countdown-cell.component';

@Component({
  selector: 'cpjs-home-countdown',
  templateUrl: 'countdown.component.html',
  styleUrl: 'countdown.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-countdown cpj-flex-column cpj-align-center cpj-gap-7 cpj-padding-7 cpj-border-box',
  },
  imports: [CountdownCellComponent, ElementTransitionDirective, HomeSeparatorComponent],
})
export class CountdownComponent {
  private readonly COUNTDOWN_DATE = new Date('2025-08-15T00:00:00');

  protected readonly countdownTime = inject(CountdownService).getCountdownTime(
    this.COUNTDOWN_DATE, inject(DestroyRef)
  );
}
