import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { Project } from '../../core/data/project.model';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().projects);
}
