import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects-page/projects-page.component').then((m) => m.ProjectsPageComponent),
  },
  {
    path: 'design-preview',
    loadComponent: () => import('./design-preview/design-preview').then((m) => m.DesignPreview),
  },
];
