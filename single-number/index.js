const arr = [4, 1, 2, 1, 2];

const singleNumber = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) delete map[arr[i]];
    else map[arr[i]] = 1;
  }
  const x = Object.keys(map);
  return x[0];
};

console.log(singleNumber(arr));
