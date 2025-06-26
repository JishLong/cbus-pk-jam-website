import { InjectionToken } from '@angular/core';

export type NavigationMarker =
  'cpjf-navigation-marker-landing' |
  'cpjf-navigation-marker-info' |
  'cpjf-navigation-marker-sponsors' |
  'cpjf-navigation-marker-special-guests' |
  'cpjf-navigation-marker-schedule' |
  'cpjf-navigation-marker-registration' |
  'cpjf-navigation-marker-contact';

export const NAVIGATION_MARKER_TOKEN = new InjectionToken<NavigationMarker>(
  'Navigation Marker Token'
);
