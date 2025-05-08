import { Routes } from '@angular/router';
import { ScreenWrapperComponent } from '../framework/screen-wrapper/screen-wrapper.component';

export const routes: Routes = [
  {
    path: '**',
    component: ScreenWrapperComponent,
  }
];
