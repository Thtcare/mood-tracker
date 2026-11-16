import test from 'node:test';
import assert from 'node:assert/strict';
import './mood-average.js';
const MoodAverage = globalThis.MoodAverage;

const scale = ['bad', 'bored', 'soso', 'happy', 'veryhappy'];

test('calculates the mean score for a day with multiple check-ins', () => {
  const result = MoodAverage.calculate(['bad', 'soso', 'veryhappy'], scale);

  assert.equal(result.average, 3);
  assert.equal(result.moodId, 'soso');
});

test('maps a fractional daily average to the nearest mood, rounding ties up', () => {
  const result = MoodAverage.calculate(['bad', 'bored'], scale);

  assert.equal(result.average, 1.5);
  assert.equal(result.moodId, 'bored');
});

test('supports a day with one check-in', () => {
  const result = MoodAverage.calculate(['veryhappy'], scale);

  assert.equal(result.average, 5);
  assert.equal(result.moodId, 'veryhappy');
});

test('rejects an empty day', () => {
  assert.throws(() => MoodAverage.calculate([], scale), RangeError);
});

test('rejects mood values outside the scale', () => {
  assert.throws(() => MoodAverage.calculate(['unknown'], scale), /Unknown mood/);
});
