const x = "-91283472332";
const stringToInteger = (str) => {
  const st = str.trim().split(" ")[0];
  const x = parseInt(st);
  if (Number.isNaN(x)) return 0;
  const upperBound = 2147483647;
  const lowerBound = -2147483648;
  if (x > 0 && x > upperBound) return upperBound;
  if (x < 0 && x < lowerBound) return lowerBound;
  return x;
};

console.log(stringToInteger(x));
