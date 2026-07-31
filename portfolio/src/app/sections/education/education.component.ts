import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TimelineEntry } from '../../core/data/timeline.model';

type TimelineType = 'education' | 'experience';
type TimelineItem = TimelineEntry & { type: TimelineType };

@Component({
  selector: 'app-education',
  imports: [ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().timeline);

  protected readonly items = computed<TimelineItem[]>(() => {
    const t = this.t();
    const items: TimelineItem[] = [
      ...t.education.map((entry) => ({ ...entry, type: 'education' as const })),
      ...t.experience.map((entry) => ({ ...entry, type: 'experience' as const })),
    ];
    return items.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
  });
}
