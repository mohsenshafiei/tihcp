const arr = ["flower", "flower", "flower", "flower"];

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  const first = arr[0];
  let max = "";
  for (let i = 0; i < first.length; i++) {
    let ok = false;
    for (let j = 1; j < arr.length; j++) {
      if (first[i] !== arr[j][i]) return first.substr(0, i);
      if (ok === false) max += first[i];
      ok = true;
    }
  }
  return max;
};

console.log(longestCommonPrefix(arr));
