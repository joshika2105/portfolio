import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().about);
}
