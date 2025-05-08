import {Component, inject, ViewEncapsulation} from '@angular/core';
import {IconComponent} from '../../elements/icon/icon.component';
import {ScreenResponsivenessService} from '../../framework/screen-responsiveness/screen-responsiveness.service';

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
