import { computed, Injectable, signal } from '@angular/core';
import filmsData from '../../../assets/data/films.json';
import { Film } from '../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly _films = signal<Film[]>(filmsData);

  readonly searchQuery = signal<string>('');

  readonly films = this._films.asReadonly();

  readonly filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allFilms = this._films();

    if (!query) return allFilms;

    return allFilms.filter((film) => film.title.toLowerCase().includes(query));
  });

  readonly favoriteFilms = computed(() => this._films().filter((film) => film.isFavorite));

  getFilmById(id: number): Film | undefined {
    return this._films().find((film) => film.id === id);
  }

  updateSearchQuery(query: string): void {
    this.searchQuery.set(query);
  }

  toggleFavorite(id: number): void {
    this._films.update((films) =>
      films.map((film) => (film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)),
    );
  }
}
