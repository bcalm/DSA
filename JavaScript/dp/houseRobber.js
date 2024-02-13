var rob = function (nums) {
    const dp = Array(nums.length).fill(0);
    if (nums.length === 1) return nums[0];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for (let index = 2; index < nums.length; index++) {
        const rob = nums[index] + dp[index - 2];
        const notRob = dp[index - 1];
        dp[index] = Math.max(rob, notRob);
        console.log(dp, rob, notRob, nums[index])
    }
    return dp[nums.length - 1];
};

nums = [2,1]


console.log(rob(nums));