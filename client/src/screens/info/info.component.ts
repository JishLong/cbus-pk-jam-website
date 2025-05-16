import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CountdownService } from '../../utils/countdown/countdown.service';
import { CountdownClockComponent } from './info-countdown/countdown-clock.component';

@Component({
  selector: 'cpjs-info',
  templateUrl: 'info.component.html',
  styleUrl: 'info.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-info cpj-max-dimensions cpj-flex-column cpj-align-center'
  },
  imports: [CountdownClockComponent],
})
export class InfoComponent {
  protected readonly COUNTDOWN_DATE = new Date('2025-08-15T00:00:00');

  protected readonly countdownTime = inject(CountdownService).getCountdownTime(
    this.COUNTDOWN_DATE
  );
}
