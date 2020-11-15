const arr = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const isValidSudoku = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (map[arr[i][j]] && arr[i][j] !== ".") return false;
      map[arr[i][j]] = 1;
    }
    map = {};
  }
  map = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (map[arr[j][i]] && arr[j][i] !== ".") return false;
      map[arr[j][i]] = 1;
    }
    map = {};
  }
  map = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let l = i * 3; l < i * 3 + 3; l++) {
        for (let k = j * 3; k < j * 3 + 3; k++) {
          if (map[arr[l][k]] && arr[l][k] !== ".") return false;
          map[arr[l][k]] = 1;
        }
      }
      map = {};
    }
    map = {};
  }
  return true;
};

console.log(isValidSudoku(arr));
