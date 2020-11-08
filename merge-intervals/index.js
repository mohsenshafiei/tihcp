const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const intervals1 = [
  [1, 4],
  [4, 5],
];

const hasOverlap = (x, y) => {
  if (!(y[0] > x[1])) return true;
  return false;
};

const getOverlap = (x, y) => {
  const start = Math.min(x[0], y[0]);
  const end = Math.max(x[1], y[1]);
  return [start, end];
};

const mergeIntervals = (intervals) => {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (hasOverlap(sorted[i], sorted[i + 1])) {
      const overlap = getOverlap(sorted[i], sorted[i + 1]);
      sorted.splice(i, 1);
      sorted[i] = overlap;
    } else continue;
  }
  return sorted;
};

console.log(mergeIntervals(intervals));
console.log(mergeIntervals(intervals1));
