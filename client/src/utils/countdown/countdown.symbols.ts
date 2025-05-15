export interface CountdownTimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const ZERO_TIME_REMAINING: CountdownTimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}
