import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

type SkillIcon =
  | 'java'
  | 'javafx'
  | 'csharp'
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'tailwind'
  | 'angular'
  | 'vue'
  | 'node'
  | 'swift'
  | 'c'
  | 'python'
  | 'git'
  | 'database';

interface Skill {
  name: string;
  icon: SkillIcon;
}

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => this.languageService.t().skills);

  protected readonly skills: Skill[] = [
    { name: 'Java', icon: 'java' },
    { name: 'JavaFX', icon: 'javafx' },
    { name: 'C#', icon: 'csharp' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Swift', icon: 'swift' },
    { name: 'C', icon: 'c' },
    { name: 'Python', icon: 'python' },
    { name: 'Git', icon: 'git' },
    { name: 'PostgreSQL', icon: 'database' },
    { name: 'SQLite', icon: 'database' },
  ];
}
