import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenResponsivenessService } from '../framework/screen-responsiveness/screen-responsiveness.service';
import { UserPrefsService } from '../framework/user-prefs/user-prefs.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
export class AppComponent {
  // These need to be instantiated at least once somewhere in order for them to be running
  private readonly screenResponsivenessService = inject(ScreenResponsivenessService);
  private readonly userPrefsService = inject(UserPrefsService);
}
