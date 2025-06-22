import { Component, ViewEncapsulation } from '@angular/core';
import { NavBarComponent } from '../../framework/nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { LandingComponent } from './landing/landing.component';
import {CountdownComponent} from './countdown/countdown.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {HexSnapContainer} from '../../elements/hex-snap-container/hex-snap-container';

@Component({
  selector: 'cpjs-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home',
  },
  imports: [
    ContactComponent,
    CountdownComponent,
    HexSnapContainer,
    InfoComponent,
    LandingComponent,
    NavBarComponent,
    SponsorsComponent,
  ],
})
export class HomeComponent {

}
