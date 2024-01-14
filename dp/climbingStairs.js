var climbStairs = function (n) {
    if (n === 2 || n === 1) {
        return n;
    }
    const dp = [];
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i <= n; i++) {
        const temp = curr;
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1];
};
