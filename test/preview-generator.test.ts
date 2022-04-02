import { beforeEach, describe, expect, it } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';
import * as pg from '../src/preview-generator';

describe('preview generator works', () => {
  it('exports generatePreview', () => {
    expect(pg.generatePreview).toBeDefined();
  });
});
