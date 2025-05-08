export type LoggerEnvironment = 'development' | 'production';
export type LogLevel = 'error' | 'log' | 'warn';

export const LOGGER_ENVIRONMENT: LoggerEnvironment = 'development';

export function getLogParams(logLevel: LogLevel, caller: string, message: any, optionalParams: any[]): any[] {
  return [
    `%c[ ${caller} ] ${message}`,
    getLogStyling(logLevel),
    ...optionalParams,
  ];
}

function getLogStyling(logLevel: LogLevel): string {
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
