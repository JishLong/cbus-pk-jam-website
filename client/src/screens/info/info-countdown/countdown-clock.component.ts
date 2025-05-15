import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { CountdownService } from '../../../utils/countdown/countdown.service';

interface CountdownDisplayValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 'cpjs-home-countdown-clock',
  templateUrl: 'countdown-clock.component.html',
  styleUrl: 'countdown-clock.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-countdown-clock cpj-flex-row cpj-align-center',
  },
})
export class CountdownClockComponent {
  private readonly countdownService = inject(CountdownService);

  readonly targetDate = input.required<Date>();
  private readonly countdownTimeRemaining = computed(() =>
    this.countdownService.getCountdownTime(this.targetDate())()
  );
  protected readonly countdownDisplayValues = computed<CountdownDisplayValues>(() => {
    const countdownTimeRemaining = this.countdownTimeRemaining();
    return {
      days: countdownTimeRemaining.days.toString(),
      hours: countdownTimeRemaining.hours.toString().padStart(2, '0'),
      minutes: countdownTimeRemaining.minutes.toString().padStart(2, '0'),
      seconds: countdownTimeRemaining.seconds.toString().padStart(2, '0'),
    }
  });
}
