import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpjs-home-fitted-image',
  templateUrl: 'fitted-image.component.html',
  styleUrl: 'fitted-image.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-fitted-image cpj-fill-height cpj-flex-grow',
  },
})
export class HomeFittedImageComponent {
  readonly src = input.required<string>();
}
