import {inject, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import emailjs from '@emailjs/browser';
import { LoggerService } from '../logger/logger.service';
import {SEND_EMAIL_REQUEST_DEFAULT_VALUES, SendEmailRequest, SendEmailResponse} from './email.symbols';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly loggerService = inject(LoggerService);
  private readonly dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  constructor() {
    emailjs.init({
      publicKey: 'xqxY-PmNgK7p0lby9',
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });

    this.loggerService.log('Email Service', 'Initialized Email Service');
  }

  sendEmail(sendEmailRequest: SendEmailRequest): Signal<SendEmailResponse | undefined> {
    this.loggerService.log('Email Service', 'Sending email with properties:', sendEmailRequest);
    const result: WritableSignal<SendEmailResponse | undefined> = signal(undefined);

    emailjs.send('service_t4k7q6e', 'template_jvy0zes', {
      name: sendEmailRequest.name ?? SEND_EMAIL_REQUEST_DEFAULT_VALUES.name,
      email: sendEmailRequest.email ?? SEND_EMAIL_REQUEST_DEFAULT_VALUES.email,
      time: this.dateTimeFormatter.format(new Date()),
      message: sendEmailRequest.message ?? SEND_EMAIL_REQUEST_DEFAULT_VALUES.message,
    }).then(
      response => {
        this.loggerService.log('Email Service', 'Successfully sent email and got response:', response);
        result.set({ success: true });
      },
      error => {
        this.loggerService.error('Email Service', 'Error sending email:', error);
        result.set({ success: false });
      },
    );

    return result;
  }
}
