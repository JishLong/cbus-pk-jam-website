import { computed, Directive, inject, input } from '@angular/core';
import { NAVIGATION_MARKER_TOKEN, NavigationMarker } from './navigation.symbols';

@Directive({
  selector: '[cpjfNavigationMarker]',
  host: {
    '[id]': 'id()',
  },
})
export class NavigationMarkerDirective {
  private readonly navigationMarkerToken = inject(
    NAVIGATION_MARKER_TOKEN, { optional: true }
  );

  readonly navigationMarker = input<NavigationMarker | undefined>(
    undefined,
    { alias: 'cpjfNavigationMarker' }
  );

  protected readonly id = computed(() =>
    this.navigationMarker() ?? this.navigationMarkerToken ?? ''
  );
}
