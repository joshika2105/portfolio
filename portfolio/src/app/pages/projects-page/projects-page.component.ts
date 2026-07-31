import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, ScrollRevealDirective, RouterLink],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().projects);
  protected readonly projects = computed(() => this.t().items);
}
