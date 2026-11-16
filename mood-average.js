(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.MoodAverage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function calculate(moodIds, orderedMoodIds) {
    if (!Array.isArray(moodIds) || moodIds.length === 0) {
      throw new RangeError('At least one mood is required to calculate an average.');
    }
    if (!Array.isArray(orderedMoodIds) || orderedMoodIds.length < 2) {
      throw new TypeError('Provide the ordered mood scale.');
    }

    const scores = new Map(orderedMoodIds.map((moodId, index) => [moodId, index + 1]));
    const total = moodIds.reduce((sum, moodId) => {
      if (!scores.has(moodId)) throw new RangeError(`Unknown mood: ${moodId}`);
      return sum + scores.get(moodId);
    }, 0);
    const average = total / moodIds.length;

    return {
      average,
      moodId: orderedMoodIds[Math.round(average) - 1]
    };
  }

  return { calculate };
});
