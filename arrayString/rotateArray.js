var rotate = function (nums, k) {
    k = k % nums.length;
    if (k != 0) {
        let arr = [];
        for (var i = nums.length - k; i < nums.length; i++) {
            arr.push(nums[i]);
        }
        for (var i = 0; i < nums.length - k; i++) {
            arr.push(nums[i]);
        }
        for (var i = 0; i < nums.length; i++) {
            nums[i] = arr[i];
        }
    }
};
const nums = [1], k = 3
rotate(nums, k)
console.log(nums)