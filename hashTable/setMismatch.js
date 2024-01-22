var findErrorNums = function(nums) {
    let dup = -1, missing = -1;

    const numFrequency = new Map();

    for (const num of nums) {
        numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (numFrequency.get(i) === 2) {
            dup = i;
        }
        else if (!numFrequency.has(i)) {
            missing = i;
        }
    }

    return [dup, missing];
};
