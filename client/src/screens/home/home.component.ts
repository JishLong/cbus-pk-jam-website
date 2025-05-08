import {Component, ViewEncapsulation} from '@angular/core';
import {IconComponent} from '../../elements/icon/icon.component';

@Component({
  selector: 'cpjs-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpj-home'
  },
  imports: [IconComponent],
})
export class HomeComponent {

}
