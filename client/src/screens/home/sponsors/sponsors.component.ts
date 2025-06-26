import { Component, ViewEncapsulation } from '@angular/core';
import {NavigationMarkerDirective} from '../../../framework/navigation/navigation-marker.directive';
import {NAVIGATION_MARKER_TOKEN} from '../../../framework/navigation/navigation.symbols';

@Component({
  selector: 'cpjs-sponsors',
  templateUrl: 'sponsors.component.html',
  styleUrl: 'sponsors.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-sponsors'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-sponsors',
    }
  ],
})
export class SponsorsComponent {

}
