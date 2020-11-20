const climbingStairs = (n) => {
  let t = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) t[i] = 0;
    if (i === 1) t[i] = 1;
    if (i === 2) t[i] = 2;
    if (i > 2) t[i] = t[i - 1] + t[i - 2];
  }
  return t[n];
};

console.log(climbingStairs(3));
