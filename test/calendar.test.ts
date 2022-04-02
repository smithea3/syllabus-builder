import { beforeEach, describe, expect, it } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';
import calendar from '../src/calendar.json';

describe('calendar is valid', () => {
  it('should be an object', () => {
    expect(typeof (calendar)).toBe('object');
  });

  it('should contain terms array', () => {
    expect(Array.isArray(calendar.terms)).toBe(true);
  });

  calendar.terms.forEach((term) => {
    it('terms should contain name', () => {
      expect(typeof (term.name)).toBe('string')
    });
    it('term.start should be date after 2000-01-01', () => {
      expect(Temporal.PlainDate.compare('2000-01-01', term.start)).toBe(-1)
    });
    it('term.end should be date after 2000-01-01', () => {
      expect(Temporal.PlainDate.compare('2000-01-01', term.end)).toBe(-1)
    });
    it('term.events should be array', () => {
      expect(Array.isArray(term.events)).toBe(true);
    });

    term.events.forEach((event) => {
      it('event should have description', () => {
        expect(typeof (event.description) !== 'undefined').toBe(true);
      });
      it('event should have noClasses', () => {
        expect(typeof (event.noClasses) !== 'undefined').toBe(true);
      });
      if (event.start) {
        it('event with start should have end', () => {
          expect(typeof (event.date) === 'undefined').toBe(true);
        });
        it('event.start should be after 2000-01-01', () => {
          expect(Temporal.PlainDate.compare('2000-01-01', event.start)).toBe(-1);
        });
        it('event.end should be after 2000-01-01', () => {
          expect(Temporal.PlainDate.compare('2000-01-01', event.end)).toBe(-1);
        });
      } else if (event.date) {
        it('event with date should be after 2000-01-01', () => {
          expect(Temporal.PlainDate.compare('2000-01-01', event.date)).toBe(-1);
        });
      }
    });
  });
});
