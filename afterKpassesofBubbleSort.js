var bubbleSort = function(nums, k){
    for (let i = 0; i < k; i++) {

        for (let j = 1; j < nums.length; j++) {

            if (nums[j] < nums[j-1]) {
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
    }
    return nums;
}
console.log(bubbleSort([5,1,4,2,8], 2));// [1,2,4,5,8]
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90], 3));// [11,12,22,25,34,64,90]
console.log(bubbleSort([5,4,3,2,1], 4));// [1,2,3,4,5]
console.log(bubbleSort([1,2,3,4,5], 2));// [1,2,3,4,5]
console.log(bubbleSort([], 1));// []
console.log(bubbleSort([1], 1));// [1]
console.log(bubbleSort([2,1], 1));// [1,2]
console.log(bubbleSort([3,2,1], 2));// [1,2,3]