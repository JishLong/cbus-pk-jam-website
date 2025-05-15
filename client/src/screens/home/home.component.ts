import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../elements/icon/icon.component';

@Component({
  selector: 'cpjs-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home cpj-max-dimensions cpj-flex-column cpj-align-center'
  },
  imports: [IconComponent],
})
export class HomeComponent {
  protected readonly ARROWS_ICON = 'keyboard_arrow_down'
}
