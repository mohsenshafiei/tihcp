const str = "loveleetcode";
const str1 = "aadadaad";

const firstUniqueCharacterInString = (str) => {
  let res = -1;
  let map = {};
  let removed = {};
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] !== undefined) {
      arr[map[str[i]]] = -1;
      removed[str[i]] = 1;
      delete map[str[i]];
    } else {
      if (!removed[str[i]]) {
        const index = arr.length;
        arr.push(i);
        map[str[i]] = index;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) return arr[i];
  }
  return -1;
};

console.log(firstUniqueCharacterInString(str));
