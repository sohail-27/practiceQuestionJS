/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let s = 0, e = nums.length-1;

    while(s<e){// not s<=e because if do, both s,e pointing to same element
        const sum = nums[s] + nums[e];

        if(sum === target) return [s+1, e+1];
        if(sum < target) s++;// 
        else e--;//Decreasing the right pointer moves to smaller values. So, by comparing the sum to the target, we can decide which pointer to move.


    }
};


console.log(twoSum([2,7,11,15], 9)); // [1,2] s = 2, e = 15 at first, then sum=17>9, so we have to decreasevalue which is e--, and same for s increase.
console.log(twoSum([2,3,4], 6)); // [1,3]
console.log(twoSum([-1,0], -1)); // [1,2]