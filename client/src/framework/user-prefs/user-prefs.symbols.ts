import { signal, WritableSignal } from '@angular/core';

export const USER_PREFS: Record<string, WritableSignal<any>> = {
  locale: signal<string>('en-US'),
};
