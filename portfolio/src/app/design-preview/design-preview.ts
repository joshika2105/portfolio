import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeToggle } from '../core/theme/theme-toggle/theme-toggle';

@Component({
  selector: 'app-design-preview',
  imports: [ThemeToggle],
  templateUrl: './design-preview.html',
  styleUrl: './design-preview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignPreview {}
