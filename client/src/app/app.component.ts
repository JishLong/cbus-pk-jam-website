import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenResponsivenessService } from '../framework/screen-responsiveness/screen-responsiveness.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  // This has to be injected in at least one place for it to be instantiated and observe the breakpoints
  private readonly screenResponsivenessService = inject(ScreenResponsivenessService);

  title = 'client';
}
