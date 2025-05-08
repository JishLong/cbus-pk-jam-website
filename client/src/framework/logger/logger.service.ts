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

  endGroup() {
    console.groupEnd();
  }

  error(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('error', caller, message, optionalParams));
  }

  log(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('log', caller, message, optionalParams));
  }

  startGroup(...label: any[]) {
    console.group(...label);
  }

  warn(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...getLogParams('warn', caller, message, optionalParams));
  }
}
