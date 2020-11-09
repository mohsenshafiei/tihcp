const arr = [3, 4, 5, 1, 2];

const findMinimumInRotatedSortedArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] > arr[right]) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] < arr[right]) right = middle;
    else left = middle + 1;
  }
  return arr[left];
};

console.log(findMinimumInRotatedSortedArray(arr));
