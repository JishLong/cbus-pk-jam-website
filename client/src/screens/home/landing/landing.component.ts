import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../elements/icon/icon.component';
import { ElementTransitionDirective } from '../../../framework/element-transition/element-transition.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../framework/navigation/navigation.symbols';
import { NavigationMarkerDirective } from '../../../framework/navigation/navigation-marker.directive';

@Component({
  selector: 'cpjs-landing',
  templateUrl: 'landing.component.html',
  styleUrl: 'landing.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-landing cpj-screen-dimensions cpj-flex-column cpj-align-center',
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-landing',
    },
  ],
  imports: [ElementTransitionDirective, IconComponent],
})
export class LandingComponent {
  protected readonly ARROWS_ICON = 'keyboard_arrow_down';
}
