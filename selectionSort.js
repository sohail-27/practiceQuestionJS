var selectionSort = function(nums){
    let n = nums.length;
    
    for( let i = 0; i< n; i++){
        let last = n-i-1;
        let maxIdx = getMaxIdx(nums, 0, last);
        swap(nums, maxIdx, last);
        
        function getMaxIdx(nums, start, end){
            let max = start;
            for( let j = start; j<=end;j++){
                if(nums[max]<nums[j]) max = j;
            }
            return max;
        }
        
        function swap(nums, max, last){
            
            //let temp = nums[max];
            //nums[max] = nums[last];
            //nums[last] = temp
            
            [nums[max], nums[last]] = [nums[last], nums[max]];
        }
    }
    
    return nums
}
console.log(selectionSort([3,1,8,0,5,4,2]))// [0,1,2,3,4,5,8]
console.log(selectionSort([10,9,8,7,6,5,4,3,2,1]))// [1,2,3,4,5,6,7,8,9,10]
