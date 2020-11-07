const arr = [-1, 2, 3, -2, -2, 4];

const threeSum = (arr) => {
  let sa = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sa.length; i++) {
    let j = i + 1;
    let k = sa.length - 1;
    if (i > 0 && sa[i] == sa[i - 1]) continue;
    while (j < k) {
      if (k < sa.length - 1 && sa[k] == sa[k + 1]) {
        k--;
        continue;
      }
      if (sa[i] + sa[j] + sa[k] > 0) k--
      if (sa[i] + sa[j] + sa[k] < 0) j++;
      if (sa[i] + sa[j] + sa[k] === 0) {
        result = [sa[i], sa[j], sa[k]];
        j++;
        k--;
      }
    }
  }
  return result;
};

console.log(threeSum(arr));
