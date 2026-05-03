import { computed, Injectable, signal } from '@angular/core';
import filmsData from '../../../assets/data/films.json';
import { Film } from '../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly filmsSignal = signal<Film[]>(filmsData);

  readonly films = this.filmsSignal.asReadonly();

  readonly favoriteFilms = computed(() => this.filmsSignal().filter((film) => film.isFavorite));

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find((f) => f.id === id);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update((films) =>
      films.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }
}
