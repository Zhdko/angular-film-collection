import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumbs } from '../../../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Breadcrumbs],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
