import {Component, inject, ViewEncapsulation} from '@angular/core';
import {IconComponent} from '../../elements/icon/icon.component';
import {ScreenResponsivenessService} from '../../framework/screen-responsiveness/screen-responsiveness.service';
import {UserPrefsService} from '../../framework/user-prefs/user-prefs.service';

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
  private readonly userPrefsService = inject(UserPrefsService);
  readonly locale = this.userPrefsService.getUserPref('locale');

  setUserLocale(locale: string) {
    this.userPrefsService.setUserPref('locale', locale);
  }
}
