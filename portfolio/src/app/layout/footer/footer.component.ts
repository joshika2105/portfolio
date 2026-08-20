import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'email';
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().footer);
  protected readonly year = new Date().getFullYear();

  protected readonly socialLinks: SocialLink[] = [
    { label: 'Mail', href: 'mailto:nelsonsarahjoshika@gmail.com', icon: 'email' },
    { label: 'Instagram', href: 'https://instagram.com/joshikasn', icon: 'instagram' },
  ];
}