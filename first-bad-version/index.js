const y = [];

const isBadVersion = (x) => false;

const x = (n) => {
  let left = 1;
  let right = n;
  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);
    if (isBadVersion(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};
