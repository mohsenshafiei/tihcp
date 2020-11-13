const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicateFromSortedArray = (arr) => {
  let i = 1;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
    i++;
  }
  arr.splice(j + 1, arr.length - 1);
};

removeDuplicateFromSortedArray(arr);
console.log(arr);
