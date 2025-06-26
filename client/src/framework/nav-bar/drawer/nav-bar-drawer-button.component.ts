import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../elements/icon/icon.component';
import { NavigationMarker } from '../../navigation/navigation.symbols';
import { NavigateToDirective } from '../../navigation/navigate-to.directive';

@Component({
  selector: 'cpjf-nav-bar-drawer-button',
  templateUrl: 'nav-bar-drawer-button.component.html',
  styleUrl: 'nav-bar-drawer-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjf-nav-bar-drawer-button cpj-fill-width',
  },
  imports: [IconComponent, NavigateToDirective],
})
export class NavBarDrawerButtonComponent {
  readonly icon = input<string>('');
  readonly navigateTo = input.required<NavigationMarker>();
  readonly onClick = output();
}
