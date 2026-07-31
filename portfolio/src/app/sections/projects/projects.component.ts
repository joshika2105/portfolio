import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective, ProjectCardComponent, RouterLink],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().projects);
  protected readonly projects = computed(() => this.t().items);
}
