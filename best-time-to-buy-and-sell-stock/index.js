const stock = [7, 1, 5, 3, 6, 4];
const stock1 = [7, 6, 4, 3, 1];

/*
/ Solution 1: Brute Force Solution
*/
const findMaxProfit = (arr, start) => {
  x = 0;
  day = 0;
  for (let i = start + 1; i < arr.length; i++) {
    const profit = arr[i] - arr[start];
    if (profit > x) {
      x = profit;
      day = i;
    }
  }
  return [x, day];
};
const bestTimeToBuyAndSell = (stock) => {
  let buyDay = 0;
  let sellDay = 0;
  let maxProfit = 0;
  for (let i = 0; i < stock.length; i++) {
    const res = findMaxProfit(stock, i);
    if (maxProfit < res[0]) {
      buyDay = i;
      sellDay = res[1];
      maxProfit = res[0];
    }
  }
  return maxProfit;
};

/*
/ Solution 2: Better Solution
*/
const MAX_PRICE = 99999999;
const findMaxProfitFast = (stock) => {
  let minPrice = MAX_PRICE;
  let maxProfit = 0;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i] < minPrice) {
      minPrice = stock[i];
    } else if (stock[i] - minPrice > maxProfit) {
      maxProfit = stock[i] - minPrice;
    }
  }
  return maxProfit;
};

console.log(bestTimeToBuyAndSell(stock));
console.log(findMaxProfitFast(stock));
