import { Injectable, Signal, signal } from '@angular/core';
import { Screen } from './screen-routing.symbols';
import { HomeComponent } from '../../screens/home/home.component';

@Injectable({ providedIn: 'root' })
export class ScreenRoutingService {
  private readonly currentScreen = signal<Screen>(HomeComponent);

  getCurrentScreen(): Signal<Screen> {
    return this.currentScreen;
  }

  setCurrentScreen(screen: Screen) {
    this.currentScreen.set(screen);
  }
}
