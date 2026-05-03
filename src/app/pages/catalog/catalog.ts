import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { FilmCard } from './components/film-card/film-card';

@Component({
  selector: 'app-catalog',
  imports: [DurationPipe, FilmCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalog {
  private readonly filmService = inject(FilmService);

  readonly isSearchVisible = signal(false);

  readonly filteredFilms = this.filmService.filteredFilms;
  readonly searchQuery = this.filmService.searchQuery;

  toggleSearch(): void {
    this.isSearchVisible.update((value) => !value);
    if (!this.isSearchVisible()) {
      this.filmService.updateSearchQuery('');
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
