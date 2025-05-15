import { NgComponentOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ScreenRoutingService } from '../screen-routing/screen-routing.service';
import { HomeComponent } from '../../screens/home/home.component';

@Component({
  selector: 'cpjf-screen-wrapper',
  templateUrl: 'screen-wrapper.component.html',
  styleUrl: 'screen-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-screen-wrapper cpj-flex-column',
  },
  imports: [HomeComponent, NavBarComponent, NgComponentOutlet],
})
export class ScreenWrapperComponent {
  protected readonly currentScreen = inject(ScreenRoutingService).getCurrentScreen();
}
