const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// # First Solution

const shallowEqual = (obj1, obj2) => {
  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  if (k1.length !== k2.length) return false;
  for (let k of k1) {
    if (obj1[k] !== obj2[k]) return false;
  }
  return true;
};

const isAnagram = (x, y) => {
  if (x.length !== y.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < x.length; i++) {
    if (obj1[x[i]]) obj1[x[i]]++;
    else obj1[x[i]] = 1;
    if (obj2[y[i]]) obj2[y[i]]++;
    else obj2[y[i]] = 1;
  }
  return shallowEqual(obj1, obj2);
};

const groupAnagrams = (s) => {
  const strs = [...s];
  const groups = [];
  let counter = 0;
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        groups[counter] =
          groups[counter] && groups[counter].length
            ? [...groups[counter], strs[j]]
            : [strs[j]];
        strs.splice(j, 1);
      }
    }
    groups[counter] =
      groups[counter] && groups[counter].length
        ? [...groups[counter], strs[i]]
        : [strs[i]];
    counter++;
    strs.splice(i, 0);
  }
  return groups;
};

// # Second Solution

const uniform = (str) => str.split("").sort().join("");
const groupAnagramsSecondApproach = (strs) => {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(strs));
console.log(groupAnagramsSecondApproach(strs));
