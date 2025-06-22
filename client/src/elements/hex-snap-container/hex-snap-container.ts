import { NgTemplateOutlet } from "@angular/common";
import { Component, ViewEncapsulation, input } from "@angular/core";

@Component({
  selector: 'cpje-hex-snap-container',
  templateUrl: 'hex-snap-container.html',
  styleUrl: 'hex-snap-container.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-hex-snap-container',
  },
  imports: [NgTemplateOutlet],
})
export class HexSnapContainer {
  readonly type = input.required<'male' | 'female'>();
}
