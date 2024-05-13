var firstMissingPositive = function(nums) {
    const numSet = new Set(nums.filter(num => num > 0)); 
    let i = 1;
    
    while (numSet.has(i)) {
        i++;
    }
    
    return i;
};
firstMissingPositive([1,2,3,4,-1,-1])