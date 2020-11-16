const str = "A man, a plan, a canal: Panama";
const str1 = "ab_a";

const isValidPalindrome = (str) => {
  if (str && str.length === 0) return true;
  const alp = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  for (let i = 0, j = alp.length - 1; i <= j; i++, j--) {
    if (alp[i] !== alp[j]) return false;
  }
  return true;
};

console.log(isValidPalindrome(str1));
