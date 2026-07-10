import { Component, ViewEncapsulation } from '@angular/core';
import { HomeHexSnapContainer } from './elements/hex-snap-container/hex-snap-container';
import { NavBarComponent } from '../../framework/nav-bar/nav-bar.component';
import { CountdownComponent } from './subscreens/countdown/countdown.component';
import { HomeContactComponent } from './subscreens/contact/contact.component';
import { HomeInfoComponent } from './subscreens/info/info.component';
import { HomeLandingComponent } from './subscreens/landing/landing.component';
import { HomeScheduleComponent } from './subscreens/schedule/schedule.component';

@Component({
  selector: 'cpjs-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home cpj-position-relative',
  },
  imports: [
    CountdownComponent,
    HomeHexSnapContainer,
    HomeContactComponent,
    HomeInfoComponent,
    HomeLandingComponent,
    HomeScheduleComponent,
    NavBarComponent,
  ],
})
export class HomeComponent {}
