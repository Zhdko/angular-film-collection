import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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

  readonly films = this.filmService.films;

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
