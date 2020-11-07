const arr = [1, 2, 3, 4];

const createEmptyArrayWithLengthN = (len) => {
  let a = [];
  for (let i = 0; i < len; i++) a.push(0);
  return a;
};

const productAllExceptSelf = (arr) => {
  const len = arr.length;
  const result = createEmptyArrayWithLengthN(len);
  result[0] = 1;
  for (let i = 1; i < len; i++) {
    result[i] = arr[i - 1] * result[i - 1];
  }
  let r = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * r;
    r *= arr[i];
  }
  return result;
};

console.log(productAllExceptSelf(arr));
