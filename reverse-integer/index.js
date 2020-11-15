let num = 1534236469;

const reverseInt = (num) => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split("").reverse().join(""));
  return n > limit ? 0 : n * k;
};
num = reverseInt(num);
console.log(num);
