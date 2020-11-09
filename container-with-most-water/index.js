const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const containerWithMostWater = (arr) => {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const width = right - left;
    const height = Math.min(arr[right], arr[left]);
    const area = width * height;
    if (area > maxArea) maxArea = area;
    if (height === arr[left]) left++;
    else right--;
  }
  return maxArea;
};

console.log(containerWithMostWater(arr));
