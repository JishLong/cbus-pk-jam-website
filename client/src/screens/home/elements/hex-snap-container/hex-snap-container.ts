import { NgTemplateOutlet } from "@angular/common";
import { Component, ViewEncapsulation, input } from "@angular/core";

@Component({
  selector: 'cpjs-home-hex-snap-container',
  templateUrl: 'hex-snap-container.html',
  styleUrl: 'hex-snap-container.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-hex-snap-container',
  },
  imports: [NgTemplateOutlet],
})
export class HomeHexSnapContainer {
  readonly type = input.required<'male' | 'female'>();
}
