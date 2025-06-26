import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { IconComponent } from '../../elements/icon/icon.component';
import { OpenLinkDirective } from '../../elements/open-link/open-link.directive';
import { SvgComponent } from '../../elements/svg/svg.component';
import { NavigateToDirective } from '../navigation/navigate-to.directive';
import { ScreenResponsivenessService } from '../screen-responsiveness/screen-responsiveness.service';
import { NavBarDrawerComponent } from './drawer/nav-bar-drawer.component';

const DRAWER_CLOSED_ICON = 'menu';
const DRAWER_OPENED_ICON = 'close';

@Component({
  selector: 'cpjf-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrl: 'nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-nav-bar cpj-position-fixed cpj-top cpj-fill-width cpj-flex-column',
  },
  imports: [
    ButtonComponent,
    IconComponent,
    NavBarDrawerComponent,
    NavigateToDirective,
    OpenLinkDirective,
    SvgComponent,
  ],
})
export class NavBarComponent {
  private readonly breakpoints = inject(ScreenResponsivenessService).getActiveBreakpoints();

  protected readonly isMobile = computed(() =>
    !this.breakpoints().some(b => b.name === 'desktop-landscape')
  );
  protected readonly drawerButtonIcon = computed(() =>
    this.drawerOpened() ? DRAWER_OPENED_ICON : DRAWER_CLOSED_ICON
  );
  protected readonly drawerOpened = signal(false);
}
