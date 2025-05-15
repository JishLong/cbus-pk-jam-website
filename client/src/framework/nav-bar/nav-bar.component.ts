import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../elements/icon/icon.component';
import { IconButtonComponent } from '../../elements/icon-button/icon-button.component';
import { InstagramButtonComponent } from '../../elements/instagram-button/instagram-button.component';
import { ScreenResponsivenessService } from '../screen-responsiveness/screen-responsiveness.service';

const MENU_CLOSED_ICON = 'menu';
const MENU_OPENED_ICON = 'close';

@Component({
  selector: 'cpjf-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrl: 'nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-nav-bar cpj-flex-column',
  },
  imports: [IconButtonComponent, IconComponent, InstagramButtonComponent, RouterLink],
})
export class NavBarComponent {
  private readonly breakpoints = inject(ScreenResponsivenessService).getActiveBreakpoints();

  protected readonly useMenuDropdown = computed(() =>
    !this.breakpoints().some(b => b.name === 'desktop-landscape')
  );
  protected readonly menuButtonIcon = computed(() =>
    this.menuDropdownOpen() ? MENU_OPENED_ICON : MENU_CLOSED_ICON
  );
  protected readonly menuDropdownOpen = signal(false);

  protected onMenuButtonClicked() {
    this.menuDropdownOpen.update(value => !value);
  }
}
