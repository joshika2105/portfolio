import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  protected readonly themeService = inject(ThemeService);
}
