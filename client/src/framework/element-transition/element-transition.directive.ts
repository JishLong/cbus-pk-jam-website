import { DestroyRef, Directive, ElementRef, computed, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[cpjfElementTransition]',
  host: {
    '[class]': 'classes()',
  }
})
export class ElementTransitionDirective {
  readonly startClass = input.required({
    alias: 'cpjfElementTransition',
  });
  readonly endClass = input('cpj-element-transition-end-default');

  protected readonly elementInViewport = signal(false);
  protected readonly classes = computed(() =>
    `${this.startClass()} ${this.elementInViewport() ? this.endClass() : ''}`
  );

  constructor() {
    const element = inject(ElementRef).nativeElement;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intersectionObserver.unobserve(element);
          this.elementInViewport.set(true);
        }
      }, {
        threshold: 0.1,
      },
    );

    intersectionObserver.observe(element);
    intersectionObserver.takeRecords();
    inject(DestroyRef).onDestroy(() => {
      if (!this.elementInViewport()) {
        intersectionObserver.unobserve(element);
      }
      intersectionObserver.disconnect();
    });
  }
}
