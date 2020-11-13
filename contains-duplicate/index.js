const arr = [1, 2, 3, 4, 5, 6]; // false
const arr1 = [1, 2, 3, 4, 5, 6, 1]; // true
const arr2 = [1, 2, 3, 1];

const containDuplicate = (arr) => {
  let x = {};
  for (let i = 0; i < arr.length; i++) {
    if (x[arr[i]]) return true;
    x[arr[i]] = 1;
  }
  return false;
};

console.log(containDuplicate(arr2));
