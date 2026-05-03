import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 169 minutes into "2h 49m"', () => {
    expect(pipe.transform(169)).toBe('2h 49m');
  });

  it('should transform exactly 60 minutes into "1h"', () => {
    expect(pipe.transform(60)).toBe('1h');
  });

  it('should handle values less than an hour (e.g., 45 -> "45m")', () => {
    expect(pipe.transform(45)).toBe('45m');
  });

  it('should return an empty string for null or undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return "0m" for a value of 0', () => {
    expect(pipe.transform(0)).toBe('0m');
  });
});
