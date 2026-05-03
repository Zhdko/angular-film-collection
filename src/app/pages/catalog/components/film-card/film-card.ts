import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../../../core/models/films.model';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCard {
  readonly film = input.required<Film>();

  toggleFavorite = output<number>();

  onFavoriteClick(event: Event): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.film().id);
  }
}
