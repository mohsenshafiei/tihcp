const s = "anagram";
const t = "nagaram";

const shallowEqual = (obj1, obj2) => {
  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  for (let k of k1) {
    if (obj1[k] !== obj2[k]) return false;
  }
  return true;
};

const validAnagram = (s, t) => {
  let x = {};
  let y = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (x[s[i]]) x[s[i]]++;
    else x = Object.assign(x, { [s[i]]: 1 });
    if (y[t[i]]) y[t[i]]++;
    else y = Object.assign(y, { [t[i]]: 1 });
  }
  return shallowEqual(x, y);
};

console.log(validAnagram(s, t));
