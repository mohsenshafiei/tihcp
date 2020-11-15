const arr1 = [4, 9, 5];
const arr2 = [9, 4, 9, 8, 4];

const getIntersectionOfTwoArrays = (arr1, arr2) => {
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < arr1.length; i++) {
    if (map1[arr1[i]]) map1[arr1[i]]++;
    else map1[arr1[i]] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (map2[arr2[i]]) map2[arr2[i]]++;
    else map2[arr2[i]] = 1;
  }
  let keys1 = Object.keys(map1);
  let intersection = [];
  for (let i = 0; i < keys1.length; i++) {
    if (map1[keys1[i]] && map2[keys1[i]]) {
      if (map1[keys1[i]] < map2[keys1[i]]) {
        for (let j = 0; j < map1[keys1[i]]; j++) {
          intersection.push(parseInt(keys1[i]));
        }
      } else {
        for (let j = 0; j < map2[keys1[i]]; j++) {
          intersection.push(parseInt(keys1[i]));
        }
      }
    }
  }
  return intersection;
};

console.log(getIntersectionOfTwoArrays(arr1, arr2));
