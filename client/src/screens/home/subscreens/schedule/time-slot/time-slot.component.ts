import { Component, ViewEncapsulation } from '@angular/core';
import { HomeSeparatorComponent } from '../../../elements/separator/separator.component';

@Component({
  selector: 'cpjs-home-schedule-time-slot',
  templateUrl: 'time-slot.component.html',
  styleUrl: 'time-slot.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-schedule-time-slot cpj-fill-width cpj-flex-column cpj-gap-3',
  },
  imports: [HomeSeparatorComponent],
})
export class HomeScheduleTimeSlotComponent {}
