/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    if(nums[0]>0 || nums[nums.length-1]<0) return nums.length;
    let pos = 0, neg = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>0) pos++;
        if(nums[i]<0) neg++;
    }

    return pos>neg ? pos : neg;
};

console.log(maximumCount([-2,-1,-1,1,2,3])); // 3
console.log(maximumCount([-3,-2,-1,0,0,1,2])); // 3
console.log(maximumCount([5,20,66,1314])); // 4
console.log(maximumCount([-10,-5,-2,-1])); // 4
console.log(maximumCount([-1,0,0,0,0])); // 1