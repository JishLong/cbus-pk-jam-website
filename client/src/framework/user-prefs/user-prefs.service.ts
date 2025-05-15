import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { USER_PREFS } from './user-prefs.symbols';

@Injectable({ providedIn: 'root' })
export class UserPrefsService {
  private readonly loggerService = inject(LoggerService);

  constructor() {
    Object.entries(USER_PREFS).forEach(value => {
      const userPref = localStorage.getItem(value[0]);
      if (userPref) {
        this.loggerService.log('UserPrefsService', `Initialized ${value[0]} to ${userPref}`);
        value[1].set(userPref);
      } else {
        this.loggerService.log('UserPrefsService', `Initialized ${value[0]} to ${value[1]()}`);
      }
    });
  }

  getUserPref(userPref: string) {
    return USER_PREFS[userPref];
  }

  setUserPref(userPref: string, value: any) {
    this.loggerService.log('UserPrefsService', `Setting ${userPref} to ${value}`);
    localStorage.setItem(userPref, value);
    USER_PREFS[userPref].set(value);
  }
}
