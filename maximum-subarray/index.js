const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// O (n)
const maximumSubarray = (arr) => {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > arr[i]) sum += arr[i];
    else sum = arr[i];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
};

console.log(maximumSubarray(arr));
