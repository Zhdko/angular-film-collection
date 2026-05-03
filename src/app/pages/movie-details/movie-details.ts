import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BreadcrumbService } from '../../core/services/breadcrums.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DurationPipe, NgOptimizedImage],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetails {
  private readonly filmService = inject(FilmService);
  private readonly breadcrumbService = inject(BreadcrumbService);

  readonly id = input.required<string>();

  readonly film = computed(() => {
    const currentId = this.id();
    return currentId ? this.filmService.getFilmById(Number(currentId)) : null;
  });

  constructor() {
    effect(() => {
      const movieData = this.film();
      if (movieData?.title) {
        this.breadcrumbService.setDynamicTitle(movieData.title);
      }
    });
  }

  goBack(): void {
    window.history.back();
  }
}
