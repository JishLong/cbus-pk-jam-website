import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable, RendererFactory2, Signal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoggerService } from '../logger/logger.service';
import { Breakpoint, BREAKPOINT_CLASS_PREFIX, BREAKPOINTS } from './screen-responsiveness.symbols';

@Injectable({ providedIn: 'root' })
export class ScreenResponsivenessService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly loggerService = inject(LoggerService);
  private readonly rendererFactory2 = inject(RendererFactory2);
  private readonly renderer2 = this.rendererFactory2.createRenderer(null, null);

  private readonly activeBreakpoints = signal<Breakpoint[]>([]);

  constructor() {
    this.breakpointObserver.observe(BREAKPOINTS.map(b => b.breakpoint)).pipe(
      takeUntilDestroyed(),
    ).subscribe(result => {
      const activeBreakpoints: Breakpoint[] = [];

      Object.entries(result.breakpoints).forEach((value, index) => {
        const breakpoint = BREAKPOINTS[index];
        const breakpointClassName = BREAKPOINT_CLASS_PREFIX.concat(breakpoint.name);
        const bodyHasBreakpointClass = document.body.classList.contains(breakpointClassName);

        if (value[1]) {
          activeBreakpoints.push(breakpoint);
          if (!bodyHasBreakpointClass) {
            this.renderer2.addClass(document.body, breakpointClassName);
          }
        } else if (bodyHasBreakpointClass) {
          this.renderer2.removeClass(document.body, breakpointClassName);
        }
      });

      this.loggerService.log(
        'ScreenResponsivenessService - active breakpoints set:', activeBreakpoints
      );
      this.activeBreakpoints.set(activeBreakpoints);
    });
  }

  getActiveBreakpoints(): Signal<Breakpoint[]> {
    return this.activeBreakpoints;
  }
}
