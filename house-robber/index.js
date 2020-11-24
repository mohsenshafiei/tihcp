const arr = [2, 7, 9, 3, 1];

const houseRobber = (arr) => {
  let prevMax = 0;
  let currMax = 0;
  for (let x in arr) {
    let temp = currMax;
    currMax = Math.max(prevMax + arr[x], currMax);
    prevMax = temp;
  }
  return currMax;
};

console.log(houseRobber(arr));
