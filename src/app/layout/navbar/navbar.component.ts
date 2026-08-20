import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../../core/theme/theme-toggle/theme-toggle';
import { LanguageService } from '../../core/i18n/language.service';
import { Language } from '../../core/i18n/language.types';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggle, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly languageService = inject(LanguageService);

  /** Scroll distance (px) before the navbar reveals. Defaults to a small nudge, so it appears on the first scroll. */
  @Input() revealAfter?: number;

  protected readonly links = computed(() => {
    const t = this.languageService.t();
    return [
      { label: t.nav.about, fragment: 'about' },
      { label: t.nav.skills, fragment: 'skills' },
      { label: t.nav.projects, fragment: 'projects' },
      { label: t.nav.education, fragment: 'education' },
      { label: t.nav.contact, fragment: 'contact' },
    ];
  });

  protected readonly languages: Language[] = ['en', 'de'];
  protected readonly visible = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    if (!this.isBrowser) {
      return;
    }
    this.visible.set(window.scrollY > this.resolveThreshold());
  }

  private resolveThreshold(): number {
    return this.revealAfter ?? 24;
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
