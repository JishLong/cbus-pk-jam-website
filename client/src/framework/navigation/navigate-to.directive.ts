import { Directive, input } from '@angular/core';
import { NavigationMarker } from './navigation.symbols';

@Directive({
  selector: 'button[cpjfNavigateTo]',
  host: {
    '(click)': 'navigateTo()',
  },
})
export class NavigateToDirective {
  readonly navigationMarker = input.required<NavigationMarker>(
    { alias: 'cpjfNavigateTo' }
  );

  protected navigateTo() {
    document.getElementById(this.navigationMarker())?.scrollIntoView({ behavior: "smooth" });
  }
}
