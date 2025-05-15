export interface Breakpoint {
  breakpoint: string;
  name: string;
}

export const BREAKPOINTS: Breakpoint[] = [{
    breakpoint: '(max-width: 619.99px) and (orientation: portrait)',
    name: 'mobile-portrait',
  }, {
    breakpoint: '(max-width: 999.99px) and (orientation: landscape)',
    name: 'mobile-landscape',
  }, {
    breakpoint: '(min-width: 620px) and (max-width: 839.99px) and (orientation: portrait)',
    name: 'tablet-portrait',
  }, {
    breakpoint: '(min-width: 1000px) and (max-width: 1279.99px) and (orientation: landscape)',
    name: 'tablet-landscape',
  }, {
    breakpoint: '(min-width: 768px) and (max-width: 768px) and (orientation: portrait)',
    name: 'small-desktop-portrait',
  }, {
    breakpoint: '(min-width: 1366px) and (max-width: 1366px) and (orientation: landscape)',
    name: 'small-desktop-landscape',
  }, {
    breakpoint: '(min-width: 840px) and (orientation: portrait)',
    name: 'desktop-portrait',
  }, {
    breakpoint: '(min-width: 1280px) and (orientation: landscape)',
    name: 'desktop-landscape',
}];

export const BREAKPOINT_CLASS_PREFIX = 'cpj-breakpoint-';
