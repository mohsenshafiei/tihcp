const arr = [4, 2, 2, 9];

const plusOne = (arr) => {
  let ok = false;
  let i = arr.length - 1;
  while (ok === false) {
    if (arr[i] === 9 && i === 0) {
      arr[i] = 0;
      return [1, ...arr];
    }
    if (arr[i] === 9) {
      arr[i] = 0;
      i--;
    } else {
      arr[i]++;
      ok = true;
      break;
    }
  }
  return arr;
};

console.log(plusOne(arr));
