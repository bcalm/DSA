var rotate = function(nums, k) {
    const subArray = nums.splice(nums.length - k, k);
    nums.unshift(...subArray)
};
const nums = [-1,-100,3,99], k = 2
rotate(nums, k)
console.log(nums)