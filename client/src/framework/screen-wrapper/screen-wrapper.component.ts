import { NgComponentOutlet } from '@angular/common';
import { Component, inject,  ViewEncapsulation } from '@angular/core';
import { ScreenRoutingService } from '../screen-routing/screen-routing.service';

@Component({
  selector: 'cpjf-screen-wrapper',
  templateUrl: './screen-wrapper.component.html',
  styleUrl: './screen-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-screen-wrapper cpj-flex-column',
  },
  imports: [NgComponentOutlet],
})
export class ScreenWrapperComponent {
  protected readonly currentScreen = inject(ScreenRoutingService).getCurrentScreen();
}
