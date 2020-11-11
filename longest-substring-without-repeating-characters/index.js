const str = "abcabcbb";

const longestSubstringWithoutRepeatingCharacters = (str) => {
  let i = 0;
  let j = 0;
  let map = {};
  let max = 0;
  while (j < str.length) {
    !map[str[j]] ? (map[str[j]] = 1) : map[str[j]] === 1 && (map[str[j]] += 1);
    if (map[str[j]] > 1 && i < j) {
      if (map[str[i]] > 1) j++;
      --map[str[i]];
      i++;
    } else {
      if ((map[str[j]] && map[str[j]] <= 1) || j === i) j++;
      if (j - i > max) max = j - i;
    }
  }
  return max;
};

console.log(longestSubstringWithoutRepeatingCharacters(str));

// Better Solution
const longestSubstringWithoutRepeatingCharactersEnhanced = (str) => {
  let n = str.length;
  let ans = 0;
  let map = {};
  for (let j = 0, i = 0; j < n; j++) {
    if (map[str[j]]) i = Math.max(map[str[j]], i);
    ans = Math.max(ans, j - i + 1);
    map[str[j]] = j + 1;
  }
  return ans;
};

console.log(longestSubstringWithoutRepeatingCharactersEnhanced(str));
