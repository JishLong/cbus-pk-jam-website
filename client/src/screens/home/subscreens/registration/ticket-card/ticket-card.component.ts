import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[cpjsHomeRegistrationTicketCard]',
  templateUrl: 'ticket-card.component.html',
  styleUrl: 'ticket-card.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-registration-ticket-card cpj-fill-width cpj-flex-row',
  },
})
export class HomeRegistrationTicketCard {
  readonly title = input<string>('');
  readonly price = input<string>('');
}
