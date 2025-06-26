import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../elements/button/button.component';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { HomeFittedImageComponent } from '../../elements/fitted-image/fitted-image.component';
import { IconComponent } from '../../../../elements/icon/icon.component';
import { OpenLinkDirective } from '../../../../elements/open-link/open-link.directive';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';
import { SvgComponent } from '../../../../elements/svg/svg.component';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';

@Component({
  selector: 'cpjs-home-sponsors',
  templateUrl: 'sponsors.component.html',
  styleUrl: 'sponsors.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-sponsors cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-sponsors',
    }
  ],
  imports: [
    ButtonComponent,
    ElementTransitionDirective,
    HomeFittedImageComponent,
    IconComponent,
    OpenLinkDirective,
    HomeSeparatorComponent,
    SvgComponent
  ],
})
export class HomeSponsorsComponent {}
