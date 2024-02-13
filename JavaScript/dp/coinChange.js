var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(0);
    for (let i = 1; i <= amount; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i - coins[j]] !== -1) {
                min = Math.min(min, dp[i - coins[j]]);
            }
        }
        dp[i] = min === Number.MAX_SAFE_INTEGER ? -1 : min + 1;
    }
    return dp[amount];
};
coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount))