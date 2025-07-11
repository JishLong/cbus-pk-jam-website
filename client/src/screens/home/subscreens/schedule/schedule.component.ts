import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../elements/button/button.component';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { OpenLinkDirective } from '../../../../elements/open-link/open-link.directive';
import { TextButtonDirective } from '../../../../elements/button/text-button.directive';
import { NavigateToDirective } from '../../../../framework/navigation/navigate-to.directive';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';
import { HomeScheduleTimeSlotComponent } from './time-slot/time-slot.component';
import { HomeScheduleSeeLocationButtonComponent } from './see-location-button/see-location-button.component';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';

@Component({
  selector: 'cpjs-home-schedule',
  templateUrl: 'schedule.component.html',
  styleUrl: 'schedule.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-schedule cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-schedule',
    }
  ],
  imports: [
    ButtonComponent,
    ElementTransitionDirective,
    HomeScheduleSeeLocationButtonComponent,
    HomeScheduleTimeSlotComponent,
    HomeSeparatorComponent,
    NavigateToDirective,
    OpenLinkDirective,
    TextButtonDirective,
  ],
})
export class HomeScheduleComponent {}
