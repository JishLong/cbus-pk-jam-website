import { Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpjf-nav-bar-drawer',
  template: '<ng-content />',
  styleUrl: 'nav-bar-drawer.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: `
      cpjf-nav-bar-drawer
      cpj-position-absolute
      cpj-z-index-behind
      cpj-screen-width
      cpj-flex-column
      cpj-gap-3
      cpj-padding-7
      cpj-border-box
    `,
    '[class]': 'openedClass()',
  },
})
export class NavBarDrawerComponent {
  readonly opened = input<boolean>(false);

  protected readonly openedClass = computed(() =>
    `${ this.opened() ? 'cpjf-nav-bar-drawer-opened' : '' }`
  );
}
