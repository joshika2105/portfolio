import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Fades/slides an element in once, the first time it scrolls into view.
 * Never re-triggers (unobserves on first reveal) and never animates on
 * its own — purely a scroll-triggered, one-shot transition.
 */
@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('scroll-reveal');

    if (this.revealDelay) {
      element.style.transitionDelay = `${this.revealDelay}ms`;
    }

    if (!this.isBrowser || !('IntersectionObserver' in window)) {
      element.classList.add('scroll-reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('scroll-reveal--visible');
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
