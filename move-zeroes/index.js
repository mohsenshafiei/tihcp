const arr = [0, 1, 0, 3, 12];

const moveZeroes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] !== 0) {
        arr[i] = arr[j];
        arr[j] = 0;
        break;
      }
    }
  }
};

moveZeroes(arr);
console.log(arr);
