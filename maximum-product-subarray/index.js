const arr = [2, 3, -2, 4];

// # First Solution: O(n^2)
const maximumContigouosSubarray = (arr) => {
  let res = [];
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    let temp = 1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] * temp > max) max = max * arr[j] * temp;
    }
  }
  return max;
};

// # Second Solution: Using DP to achieve O(n)
const maximumContigouosSubarrayDP = (arr) => {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  let res = max;
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    const tmpMax = Math.max(cur, Math.max(max * cur, min * cur));
    min = Math.min(cur, Math.min(max * cur, min * cur));
    max = tmpMax;
    res = Math.max(max, res);
  }
  return res;
};

console.log(maximumContigouosSubarray(arr));
console.log(maximumContigouosSubarrayDP(arr));
