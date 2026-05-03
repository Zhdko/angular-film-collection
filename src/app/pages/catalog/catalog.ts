import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmCard } from './components/film-card/film-card';
import { AutofocusDirective } from '../../shared/directives/autofocus.directive';

@Component({
  selector: 'app-catalog',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalog {
  private readonly filmService = inject(FilmService);
  readonly isSearchVisible = signal(true);

  readonly filteredFilms = this.filmService.filteredFilms;
  readonly searchQuery = this.filmService.searchQuery;

  toggleSearch(): void {
    this.isSearchVisible.update((value) => !value);

    if (!this.isSearchVisible()) {
      this.onSearchChange({ target: { value: '' } } as any);
    }
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filmService.updateSearchQuery(input.value);
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
