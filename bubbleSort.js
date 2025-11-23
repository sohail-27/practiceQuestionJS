/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var bubbleSort = function(nums){
    
    for(let i =0; i<nums.length; i++){
        let swapped = false;
        for(let j =1; j<nums.length-i; j++){
            if(nums[j] < nums[j-1]){
                // swap if the item is smaller than the previous one
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return nums;
};

console.log(bubbleSort([5,1,4,2,8]));
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([1,2,3,4,5]));
console.log(bubbleSort([]));
console.log(bubbleSort([1]));
console.log(bubbleSort([2,1]));