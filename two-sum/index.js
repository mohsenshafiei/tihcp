const arr = [1, 2, 4, 6];
const target = 10;

const twoSum = (arr, target) => {
  const x = arr.reduce((res, el, index) => {
    return { ...res, [el]: index };
  }, {});
  for (let i = 0; i < arr.length; i++) {
    const z = target - arr[i];
    if (x[z]) return [i, x[z]];
  }
};

twoSum(arr, target);
