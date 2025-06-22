import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../../elements/icon/icon.component';

@Component({
  selector: 'cpjs-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-contact cpj-fill-dimensions cpj-flex-column cpj-align-center'
  },
  imports: [IconComponent],
})
export class ContactComponent {

}
