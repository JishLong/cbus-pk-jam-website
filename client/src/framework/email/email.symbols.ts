export interface SendEmailRequest {
  name?: string;
  email?: string;
  message?: string;
}

export interface SendEmailResponse {
  success: boolean;
}

export const SEND_EMAIL_REQUEST_DEFAULT_VALUES: SendEmailRequest = {
  name: 'No name given',
  email: 'No email given',
  message: 'No message given',
}
