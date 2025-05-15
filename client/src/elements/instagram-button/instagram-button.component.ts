import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpje-instagram-button',
  templateUrl: 'instagram-button.component.html',
  styleUrl: 'instagram-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-instagram-button',
  },
})
export class InstagramButtonComponent {
  protected readonly LINK = 'https://www.instagram.com/columbuspkjam/';
}
