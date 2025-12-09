var selectionSort = function(nums){
    let n = nums.length;
    
    for( let i = 0; i< n; i++){
        
            let max = i;
            for( let j = i; j<n;j++){
                if(nums[max]<nums[j]) max = j;
            }
       
            
            [nums[max], nums[i]] = [nums[i], nums[max]];
    }
    
    return nums
}

console.log(selectionSort([3,1,8,0,5,4,2]))// [8,5,4,3,2,1,0]
console.log(selectionSort([10,20,5,15]))// [20,15,10,5]
console.log(selectionSort([7,3,9,1,6]))// [9,7,6,3,1]
console.log(selectionSort([1,2,3,4,5]))// [5,4,3,2,1]
console.log(selectionSort([5,4,3,2,1]))// [5,4,3,2,1]
console.log(selectionSort([4,2,7,1,3,6,5]))// [7,6,5,4,3,2,1]
