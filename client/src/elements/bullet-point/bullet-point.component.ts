import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpje-bullet-point',
  template: `
    <div class="cpj-flex-row cpj-gap-3">
      <span>•</span>
      <ng-content />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-bullet-point',
  },
})
export class BulletPointComponent {}
