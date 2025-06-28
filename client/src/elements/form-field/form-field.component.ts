import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cpje-form-field',
  template: '<ng-content />',
  styleUrl: 'form-field.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpje-form-field cpj-flex-column cpj-gap-1',
  },
})
export class FormFieldComponent {}
