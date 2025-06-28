import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { BulletPointComponent } from '../../../../elements/bullet-point/bullet-point.component';
import { ButtonComponent } from '../../../../elements/button/button.component';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { OpenLinkDirective } from '../../../../elements/open-link/open-link.directive';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NavigateToDirective } from '../../../../framework/navigation/navigate-to.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';
import { ScreenResponsivenessService } from '../../../../framework/screen-responsiveness/screen-responsiveness.service';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';
import { HomeRegistrationTicketCard } from './ticket-card/ticket-card.component';

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
    BulletPointComponent,
    ButtonComponent,
    ElementTransitionDirective,
    HomeRegistrationTicketCard,
    HomeSeparatorComponent,
    NavigateToDirective,
    OpenLinkDirective,
  ],
})
export class HomeRegistrationComponent {
  private readonly breakpoints = inject(ScreenResponsivenessService).getActiveBreakpoints();

  protected readonly isMobile = computed(() =>
    this.breakpoints().some(b => b.name === 'mobile-portrait')
  );
}
