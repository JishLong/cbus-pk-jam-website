import { Component, ViewEncapsulation } from '@angular/core';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';

@Component({
  selector: 'cpjs-home-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-contact cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-contact',
    }
  ],
  imports: [
    ElementTransitionDirective,
    HomeSeparatorComponent,
  ],
})
export class HomeContactComponent {}
