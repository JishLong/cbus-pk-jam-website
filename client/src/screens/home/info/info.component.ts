import {Component, computed, inject, ViewEncapsulation} from '@angular/core';
import {NavigationMarkerDirective} from '../../../framework/navigation/navigation-marker.directive';
import {NAVIGATION_MARKER_TOKEN} from '../../../framework/navigation/navigation.symbols';
import {ElementTransitionDirective} from '../../../framework/element-transition/element-transition.directive';
import {ScreenResponsivenessService} from '../../../framework/screen-responsiveness/screen-responsiveness.service';

@Component({
  selector: 'cpjs-info',
  templateUrl: 'info.component.html',
  styleUrl: 'info.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-info cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-info',
    },
  ],
  imports: [ElementTransitionDirective],
})
export class InfoComponent {
  private readonly breakpoints = inject(ScreenResponsivenessService).getActiveBreakpoints();

  protected readonly isMobile = computed(() =>
    !this.breakpoints().some(b => b.name === 'desktop-landscape')
  );
}
