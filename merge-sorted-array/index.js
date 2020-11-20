const arr1 = [0];
m = 0;
const arr2 = [1];
n = 1;
const merge = (arr1, m, arr2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= -1 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      arr1[i] = 0;
      i--;
    } else {
      arr1[k] = arr2[j];
      arr2[j] = 0;
      j--;
    }
    k--;
  }
  return arr1;
};

console.log(merge(arr1, m, arr2, n));
