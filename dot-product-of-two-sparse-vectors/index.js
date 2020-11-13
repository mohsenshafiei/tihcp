const v1 = [1, 0, 0, 2, 3];
const v2 = [0, 3, 0, 4, 0];

const dotProduct = (v1, v2) => {
  let sum = 0;
  for (let i = 0, j = 0; i < v1.length && j < v2.length; i++, j++) {
    if (v1[i] !== 0 && v2[j] !== 0) sum += v1[i] * v2[j];
  }
  return sum;
};

console.log(dotProduct(v1, v2));
