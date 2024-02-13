var majorityElement = function (nums) {
    let m;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            m = num;
        }
        count += (num === m ? 1 : -1)
    }
    return m;
};

const nums = [3, 2, 3];
console.log(majorityElement(nums));