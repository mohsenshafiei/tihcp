const str = "00000000000000000000000000001011";

const hammingWeight = (n) => {
  let bits = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) != 0) bits++;
    mask <<= 1;
  }
  return bits;
};

console.log(hammingWeight(str));
