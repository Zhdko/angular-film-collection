import { NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumbs.model';
import { inject, Injectable, signal } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private readonly router = inject(Router);
  readonly breadcrumbs = signal<Breadcrumb[]>([]);
  private readonly dynamicTitle = signal<string | null>(null);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.dynamicTitle.set(null);
      this.updateBreadcrumbs();
    });
  }

  setDynamicTitle(title: string): void {
    this.dynamicTitle.set(title);
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs(): void {
    const root: Breadcrumb = { label: 'Home', url: '/' };
    const path = this.router.url;
    if (path === '/' || path === '/catalog' || !this.dynamicTitle()) {
      this.breadcrumbs.set([root]);
    } else {
      this.breadcrumbs.set([root, { label: this.dynamicTitle()!, url: path }]);
    }
  }
}
