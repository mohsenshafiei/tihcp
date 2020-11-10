const str = "AABABBA";

// Solution that I failed  and it is not complete
const getIntervals = (str) => {
  const map = {};
  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) continue;
    else Object.assign(map, { [str[i]]: [] });
  }
  for (let i = 0; i < str.length; i++) {
    const latest = map[str[i]][map[str[i]].length - 1];
    if (latest && i - latest[1] === 1) ++map[str[i]][map[str[i]].length - 1][1];
    if (!latest || (latest && i - latest[1] >= 1)) {
      map[str[i]].push([]);
      map[str[i]][map[str[i]].length - 1][0] = i - 1;
      map[str[i]][map[str[i]].length - 1][1] = i;
    }
  }
  return map;
};
const longestRepeatingCharacterReplacement = (str) => {
  const intervals = getIntervals(str);
  let max = 0;
  const keys = Object.keys(intervals);
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < keys[i].length; j++) {
      const len1 = keys[i][j][1] - keys[i][j][0];
    }
    console.log(keys[i]);
  }
};

// longestRepeatingCharacterReplacement(str);

// Real Solution
const longestRepeatingCharacterReplacementEnhanced = (str, k) => {
  let maxCount = 0;
  let start = 0;
  let i = 0;
  let charCounts = {};
  while (i < str.length) {
    charCounts[str[i]] ? (charCounts[str[i]] += 1) : (charCounts[str[i]] = 1);
    maxCount = Math.max(maxCount, charCounts[str[i]]);
    if (i - start + 1 > k + maxCount) {
      charCounts[str[start]] -= 1;
      start += 1;
    }
    i += 1;
  }
  return Math.min(maxCount + k, str.length);
};
console.log(longestRepeatingCharacterReplacementEnhanced(str, 1));
