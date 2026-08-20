import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { THEME_STORAGE_KEY, Theme } from './theme.types';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();

      if (!this.isBrowser) {
        return;
      }

      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    });
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  toggleTheme(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  private resolveInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'light';
    }

    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
