//https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/submissions/1817962348

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return nums.reduce((count, num) => count + (num > min && num < max ? 1 : 0), 0);
};

console.log(countElements([11,7,2,15])); //2
console.log(countElements([-3,3,3,90])); //2