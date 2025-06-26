import { NgComponentOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ScreenRoutingService } from '../screen-routing/screen-routing.service';

@Component({
  selector: 'cpjf-screen-wrapper',
  template: `<ng-container *ngComponentOutlet="currentScreen()" />`,
  styleUrl: 'screen-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-screen-wrapper cpj-screen-dimensions',
  },
  imports: [NgComponentOutlet],
})
export class ScreenWrapperComponent {
  protected readonly currentScreen = inject(ScreenRoutingService).getCurrentScreen();
}
