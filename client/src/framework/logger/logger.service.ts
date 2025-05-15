import { Injectable } from '@angular/core';
import { LOGGER_ENVIRONMENT, LogLevel } from './logger.symbols';

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

  log(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...this.getLogParams('log', caller, message, optionalParams));
  }

  warn(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...this.getLogParams('warn', caller, message, optionalParams));
  }

  error(caller: string, message?: string, ...optionalParams: any[]) {
    console.log(...this.getLogParams('error', caller, message, optionalParams));
  }

  startGroup(...label: any[]) {
    console.group(...label);
  }

  endGroup() {
    console.groupEnd();
  }

  private getLogParams(logLevel: LogLevel, caller: string, message: any, optionalParams: any[]): any[] {
    return [
      `%c[ ${caller} ] ${message}`,
      this.getLogStyling(logLevel),
      ...optionalParams,
    ];
  }

  private getLogStyling(logLevel: LogLevel): string {
    switch (logLevel) {
      case 'error':
        return 'background: #ffe6e6; color: #800000; padding: 4px;';
      case 'log':
        return 'background: #f2f2f2; color: #404040; padding: 4px;';
      case 'warn':
        return 'background: #fffee6; color: #807800; padding: 4px;';
      default:
        return '';
    }
  }
}
