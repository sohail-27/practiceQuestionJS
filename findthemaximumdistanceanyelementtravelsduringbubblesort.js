var bubbleSort = function(nums){
    let n = nums.length;
    
    let originalIdx = nums.map((_,i)=>i);
    
    for(let i = 0; i<n; i++){
        for ( let j = 1; j<n - i; j++){
            if(nums[j]<nums[j-1]){
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
                [originalIdx[j-1], originalIdx[j]] = [originalIdx[j], originalIdx[j-1]]
            }
        }
    }
    
     let movement = originalIdx.map((orig, fin) => Math.abs(orig - fin));
     let maxMove = Math.max(...movement);
     return maxMove;
}
console.log(bubbleSort([5, 1, 4, 8, 2]))// 3
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))// 5
console.log(bubbleSort([5,4,3,2,1]))// 4
console.log(bubbleSort([1,2,3,4,5]))// 0
console.log(bubbleSort([]))// 0
console.log(bubbleSort([1]))// 0
console.log(bubbleSort([2,1]))// 1
console.log(bubbleSort([3,2,1]))// 2