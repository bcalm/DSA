var maxProfit = function (prices) {
    let profit = 0;
    let buyingPrice = prices[0];
    for (let index = 1; index < prices.length; index++) {
        if (buyingPrice > prices[index]) {
            buyingPrice = prices[index];
        }
        if (profit < prices[index] - buyingPrice) {
            profit = prices[index] - buyingPrice;
        }

    }
    return profit
};
prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))