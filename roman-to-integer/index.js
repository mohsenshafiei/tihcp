const str = "MCMXCIV";
const str1 = "III";

const getNumber = (st) => {
  switch (st) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    case "IV":
      return 4;
    case "IX":
      return 9;
    case "XL":
      return 40;
    case "XC":
      return 90;
    case "CD":
      return 400;
    case "CM":
      return 900;
    default:
      return 0;
  }
};

const romanToInteger = (s) => {
  let x = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        x += getNumber("IV");
        i++;
        continue;
      }
      if (s[i + 1] === "X") {
        x += getNumber("IX");
        i++;
        continue;
      }
    }
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        x += getNumber("XL");
        i++;
        continue;
      }
      if (s[i + 1] === "C") {
        x += getNumber("XC");
        i++;
        continue;
      }
    }
    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        x += getNumber("CD");
        i++;
        continue;
      }
      if (s[i + 1] === "M") {
        x += getNumber("CM");
        i++;
        continue;
      }
    }
    x += getNumber(s[i]);
  }
  return x;
};

console.log(romanToInteger(str));
console.log(romanToInteger(str1));
