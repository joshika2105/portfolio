import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram';
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
    { label: 'GitHub', href: 'https://github.com/nelsonsarahjoshika', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nelsonsarahjoshika', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://instagram.com/nelsonsarahjoshika', icon: 'instagram' },
  ];
}
