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
