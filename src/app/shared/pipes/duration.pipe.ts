import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const minutes = typeof value === 'string' ? parseInt(value, 10) : value;

    if (isNaN(minutes)) return '';

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  }
}
