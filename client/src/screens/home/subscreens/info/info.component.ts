import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../elements/button/button.component';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { IconComponent } from '../../../../elements/icon/icon.component';
import { OpenLinkDirective } from '../../../../elements/open-link/open-link.directive';
import { TextButtonDirective } from '../../../../elements/button/text-button.directive';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';
import { NavigateToDirective } from '../../../../framework/navigation/navigate-to.directive';
import { HomeFittedImageComponent } from '../../elements/fitted-image/fitted-image.component';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';

@Component({
  selector: 'cpjs-home-info',
  templateUrl: 'info.component.html',
  styleUrl: 'info.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-info cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-info',
    },
  ],
  imports: [
    ButtonComponent,
    ElementTransitionDirective,
    HomeFittedImageComponent,
    IconComponent,
    NavigateToDirective,
    HomeSeparatorComponent,
    OpenLinkDirective,
    TextButtonDirective,
  ],
})
export class HomeInfoComponent {}
