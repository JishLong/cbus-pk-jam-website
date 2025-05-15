import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../elements/icon/icon.component';

@Component({
  selector: 'cpjs-info',
  templateUrl: 'info.component.html',
  styleUrl: 'info.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-info cpj-max-dimensions cpj-flex-column cpj-align-center'
  },
  imports: [IconComponent],
})
export class InfoComponent {

}
