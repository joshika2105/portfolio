import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'github' | 'phone';
}

@Component({
  selector: 'app-contact',
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().contact);

  protected readonly methods = computed<ContactMethod[]>(() => {
    const t = this.t();
    return [
      {
        label: t.emailLabel,
        value: 'nelsonsarahjoshika@gmail.com',
        href: 'mailto:nelsonsarahjoshika@gmail.com',
        icon: 'email',
      },
      {
        label: t.githubLabel,
        value: 'github.com/nelsonsarahjoshika',
        href: 'https://github.com/nelsonsarahjoshika',
        icon: 'github',
      },
      {
        label: t.phoneLabel,
        value: '+43 660 3920283',
        href: 'tel:+436603920283',
        icon: 'phone',
      },
    ];
  });
}
