import { Component, inject, Signal, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../elements/button/button.component';
import { ElementTransitionDirective } from '../../../../elements/element-transition/element-transition.directive';
import { FormFieldComponent } from '../../../../elements/form-field/form-field.component';
import { OpenLinkDirective } from '../../../../elements/open-link/open-link.directive';
import { HomeSeparatorComponent } from '../../elements/separator/separator.component';
import { EmailService } from '../../../../framework/email/email.service';
import { SendEmailResponse } from '../../../../framework/email/email.symbols';
import { NavigationMarkerDirective } from '../../../../framework/navigation/navigation-marker.directive';
import { NAVIGATION_MARKER_TOKEN } from '../../../../framework/navigation/navigation.symbols';

@Component({
  selector: 'cpjs-home-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'cpjs-home-contact cpj-fill-width cpj-flex-row cpj-justify-center'
  },
  hostDirectives: [NavigationMarkerDirective],
  providers: [
    {
      provide: NAVIGATION_MARKER_TOKEN,
      useValue: 'cpjf-navigation-marker-contact',
    }
  ],
  imports: [
    ButtonComponent,
    ElementTransitionDirective,
    FormFieldComponent,
    FormsModule,
    HomeSeparatorComponent,
    OpenLinkDirective,
    ReactiveFormsModule,
  ],
})
export class HomeContactComponent {
  private readonly emailService = inject(EmailService);

  protected readonly formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required),
  });
  protected sendEmailResponse: Signal<SendEmailResponse | undefined> | undefined;

  protected sendEmail() {
    const name = this.formGroup.get('name')?.value;
    const email = this.formGroup.get('email')?.value;
    const message = this.formGroup.get('message')?.value;

    this.sendEmailResponse = this.emailService.sendEmail({
      name: !!name ? name : undefined,
      email: !!email ? email : undefined,
      message: !!message ? message : undefined,
    });
  }
}
