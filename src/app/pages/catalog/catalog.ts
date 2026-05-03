import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmCard } from './components/film-card/film-card';
import { AutofocusDirective } from '../../shared/directives/autofocus.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard, AutofocusDirective, NgOptimizedImage],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalog {
  private readonly filmService = inject(FilmService);
  readonly isSearchVisible = signal(true);

  readonly filteredFilms = this.filmService.filteredFilms;
  readonly searchQuery = this.filmService.searchQuery;

  applyFilter(query: string): void {
    console.log('Filtering by:', query);
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.applyFilter(input.value);
  }

  toggleSearch(): void {
    this.isSearchVisible.update((value) => !value);

    if (!this.isSearchVisible()) {
      this.applyFilter('');
    }
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
