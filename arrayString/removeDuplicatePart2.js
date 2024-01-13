var removeDuplicates = function (nums) {
    let k = 1;
     for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[k - 1] || nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
nums = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(nums))
console.log(nums)