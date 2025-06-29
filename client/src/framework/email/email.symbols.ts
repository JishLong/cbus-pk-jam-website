export interface SendEmailRequest {
  name?: string;
  email?: string;
  message?: string;
}

export interface SendEmailResponse {
  success: boolean;
}

export const SEND_EMAIL_REQUEST_DEFAULT_VALUES: SendEmailRequest = {
  name: 'no name given',
  email: 'no email given',
  message: 'no message given',
}
