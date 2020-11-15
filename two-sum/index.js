const arr = [1, 3, 4, 2];
const target = 6;

const twoSum = (arr, target) => {
  let x = {};
  for (let i = 0; i < arr.length; i++) {
    if (!x[arr[i]]) x[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    const z = target - arr[i];
    if (x[z] && x[z] !== i) return [i, x[z]];
  }
};

console.log(twoSum(arr, target));
