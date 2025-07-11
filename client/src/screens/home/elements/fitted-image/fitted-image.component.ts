import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpjs-home-fitted-image',
  templateUrl: 'fitted-image.component.html',
  styleUrl: 'fitted-image.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-fitted-image cpj-fill-height cpj-flex-grow',
    '[class]': 'objectFitClass()',
  },
  imports: [NgTemplateOutlet],
})
export class HomeFittedImageComponent {
  readonly src = input.required<string>();
  readonly objectFit = input<'cover' | 'contain'>('cover');

  protected readonly objectFitClass = computed(() => `
    cpjs-home-fitted-image-${this.objectFit()}
  `);
}
