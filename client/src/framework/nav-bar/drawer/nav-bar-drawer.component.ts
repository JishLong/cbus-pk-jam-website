import { Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { NavigateToDirective } from '../../navigation/navigate-to.directive';
import { NavBarDrawerButtonComponent } from './nav-bar-drawer-button.component';

@Component({
  selector: 'cpjf-nav-bar-drawer',
  templateUrl: 'nav-bar-drawer.component.html',
  styleUrl: 'nav-bar-drawer.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-nav-bar-drawer cpj-flex-column cpj-gap-3 cpj-padding-7',
    '[class]': 'openedClass()',
  },
  imports: [NavBarDrawerButtonComponent, NavigateToDirective],
})
export class NavBarDrawerComponent {
  readonly opened = input<boolean>(false);
  readonly onDrawerButtonClicked = output();

  protected readonly openedClass = computed(() =>
    `${ this.opened() ? 'cpjf-nav-bar-drawer-opened' : '' }`
  );
}
