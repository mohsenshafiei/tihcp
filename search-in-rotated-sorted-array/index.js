const arr = [4, 5, 6, 7, 8, 9, -1, 0, 1, 2];
const target = 2;

// # First Solution: O(Logn)
const bs = (array, key, start, end) => {
  const middle = Math.floor((start + end) / 2);
  if (start > end) return -1;
  if (array[middle] === key) return middle;
  if (key > array[middle]) return bs(array, key, middle + 1, end);
  if (key < array[middle]) return bs(array, key, start, middle - 1);
  return -1;
};

const findPivotIndex = (arr, start, end) => {
  if (arr[start] < arr[end]) return 0;
  while (start <= end) {
    let pivot = Math.floor((start + end) / 2);
    if (arr[pivot] > arr[pivot + 1]) return pivot + 1;
    else {
      if (arr[pivot] < arr[start]) end = pivot - 1;
      else start = pivot + 1;
    }
  }
  return 0;
};

const searchInRotatedSortedArray = (arr, target) => {
  let pivotIndex = findPivotIndex(arr, 0, arr.length);
  if (target === arr[pivotIndex]) return pivotIndex;
  const left = bs(arr, target, pivotIndex + 1, arr.length);
  if (left !== -1) return left;
  else return bs(arr, target, 0, pivotIndex - 1);
};

// Shorter and Better Solution = O(Logn)
const searchInRotatedSortedArrayEnhanced = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + (end - start) / 2;
    if (nums[mid] == target) return mid;
    else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (target <= nums[end] && target > nums[mid]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};

console.log(searchInRotatedSortedArray(arr, target));
