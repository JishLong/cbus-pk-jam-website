import { inject, Injectable, Signal, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Screen } from './screen-routing.symbols';
import { HomeComponent } from '../../screens/home/home.component';
import { LoggerService } from '../logger/logger.service';

@Injectable({ providedIn: 'root' })
export class ScreenRoutingService {
  private readonly loggerService = inject(LoggerService);

  private readonly currentScreen = signal<Screen>(HomeComponent);

  constructor() {
    toObservable(this.currentScreen).pipe(
      takeUntilDestroyed(),
    ).subscribe(value => {
      this.loggerService.log('ScreenRoutingService', 'Current screen set to '.concat(value.name.slice(1)));
    });
  }

  getCurrentScreen(): Signal<Screen> {
    return this.currentScreen;
  }

  setCurrentScreen(screen: Screen) {
    this.currentScreen.set(screen);
  }
}
