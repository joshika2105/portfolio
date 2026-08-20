import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LANGUAGE_STORAGE_KEY, Language } from './language.types';
import { TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly language = signal<Language>(this.resolveInitialLanguage());
  readonly t = computed(() => TRANSLATIONS[this.language()]);

  constructor() {
    effect(() => {
      const language = this.language();

      if (!this.isBrowser) {
        return;
      }

      document.documentElement.lang = language;
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    });
  }

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  private resolveInitialLanguage(): Language {
    if (!this.isBrowser) {
      return 'en';
    }

    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === 'en' || stored === 'de' ? stored : 'en';
  }
}
