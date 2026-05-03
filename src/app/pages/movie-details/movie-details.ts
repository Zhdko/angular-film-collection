import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DurationPipe, NgOptimizedImage],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetails {
  readonly filmService = inject(FilmService);
  readonly id = input.required<string>();

  readonly film = computed(() => {
    const currentId = this.id();
    if (!currentId) return null;

    const filmId = Number(currentId);
    return this.filmService.getFilmById(filmId);
  });

  goBack(): void {
    window.history.back();
  }
}
