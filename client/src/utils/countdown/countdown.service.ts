import { DestroyRef, Injectable, signal, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, timer } from 'rxjs';
import { CountdownTimeRemaining, ZERO_TIME_REMAINING } from './countdown.symbols';

@Injectable({ providedIn: 'root' })
export class CountdownService {
  getCountdownTime(targetDate: Date, destroyRef: DestroyRef): Signal<CountdownTimeRemaining> {
    const countdownTimeRemaining = signal(this.getCountdownTimeRemaining(targetDate));

    timer(0, 1000).pipe(
      delay(0),
      takeUntilDestroyed(destroyRef),
    ).subscribe(() => {
      countdownTimeRemaining.set(this.getCountdownTimeRemaining(targetDate));
    });

    return countdownTimeRemaining;
  }

  private getCountdownTimeRemaining(targetDate: Date): CountdownTimeRemaining {
    const timeRemaining = targetDate.getTime() - Date.now();
    return timeRemaining > 0 ? {
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
      seconds: Math.floor((timeRemaining / 1000) % 60),
    } : ZERO_TIME_REMAINING;
  }
}
