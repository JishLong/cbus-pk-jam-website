import { Component, input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../../elements/button/button.component';
import { IconComponent } from '../../../../../elements/icon/icon.component';
import { OpenLinkDirective } from '../../../../../elements/open-link/open-link.directive';

@Component({
  selector: 'cpjs-home-schedule-see-location-button',
  template: `
    <button class="cpj-title-1" cpjeButton="ghost-light-text" [cpjeOpenLink]="link()">
      <cpje-icon icon="my_location" />
    </button>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-schedule-see-location-button cpj-justify-self-end',
  },
  imports: [ButtonComponent, IconComponent, OpenLinkDirective],
})
export class HomeScheduleSeeLocationButtonComponent {
  readonly link = input.required<string>();
}
