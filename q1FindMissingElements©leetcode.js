/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Math.min(...nums), max = Math.max(...nums);
    let numSet = new Set(nums);
    let missing = [];

    for(let i = min; i < max; i++){
        if(!numSet.has(i)) missing.push(i);
    }

    return missing;
}

console.log(findMissingElements([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findMissingElements([1,2,3,4])); // []
console.log(findMissingElements([1,3,5,7])); // [2,4,6]