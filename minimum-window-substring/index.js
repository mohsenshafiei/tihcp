const s = "";
const t = "";

const wordMap = (str) => {
  const map = {};
  for (let c of str) {
    if (map[c]) map[c] += 1;
    else map[c] = 1;
  }
  return map;
};

const minimumWindowSubstring = (s, t) => {
  if (t.length == 0) return "";
  let [left, right] = [0, 0];
  const map = wordMap(t);
  let mapCopy = Object.assign({}, map);
  let keysCount = 0;
  let min = null;
  while (left < s.length && right < s.length) {
    if (s[right] in map) {
      mapCopy[s[right]] -= 1;
      if (mapCopy[s[right]] == 0) keysCount += 1;
    }
    if (keysCount >= Object.keys(map).length) {
      while (left < right) {
        let key = s[left];
        if (mapCopy[key] == 0) break;
        else mapCopy[key] += 1;
        left += 1;
      }
      if (min == null || min[1] - min[0] > right - left) min = [left, right];
    }
    right += 1;
  }
  if (min !== null) return s.substr(min[0], min[1] - min[0] + 1);
  return "";
};
