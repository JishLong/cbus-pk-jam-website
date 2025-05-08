import { Injectable } from '@angular/core';
import { getLogParams, LOGGER_ENVIRONMENT } from './logger.symbols';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private readonly emptyFunction = () => {};

  constructor() {
    if (LOGGER_ENVIRONMENT === 'production') {
      this.error = this.emptyFunction;
      this.log = this.emptyFunction;
      this.warn = this.emptyFunction;
    }
  }

  error(message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('error', message, optionalParams));
  }

  log(message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('log', message, optionalParams));
  }

  warn(message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('warn', message, optionalParams));
  }
}
