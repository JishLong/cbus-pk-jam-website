import { Component, ViewEncapsulation } from '@angular/core';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';

@Component({
  selector: 'cpjs-home-registration',
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-registration cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-registration',
    },
  ],
  imports: [
    ElementTransitionDirective,
    HomeSeparatorComponent,
  ],
})
export class HomeRegistrationComponent {}
