import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpjs-home-separator',
  template: `<ng-content />`,
  styleUrl: 'separator.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-separator',
  },
})
export class HomeSeparatorComponent {}
