import { Component, ViewEncapsulation } from '@angular/core';
import { HomeHexSnapContainer } from './elements/hex-snap-container/hex-snap-container';
import { NavBarComponent } from '../../framework/nav-bar/nav-bar.component';
import { CountdownComponent } from './subscreens/countdown/countdown.component';
import { HomeInfoComponent } from './subscreens/info/info.component';
import { HomeLandingComponent } from './subscreens/landing/landing.component';
import { HomeSpecialGuestsComponent } from './subscreens/special-guests/special-guests.component';
import { HomeSponsorsComponent } from './subscreens/sponsors/sponsors.component';

@Component({
  selector: 'cpjs-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home',
  },
  imports: [
    CountdownComponent,
    HomeHexSnapContainer,
    HomeInfoComponent,
    HomeLandingComponent,
    HomeSpecialGuestsComponent,
    HomeSponsorsComponent,
    NavBarComponent,
  ],
})
export class HomeComponent {}
