var minimum = function (nums){
    if(!nums || nums.length === 0) return null;
    if(nums.length === 1) return nums[0]
    
    let left = 0;
    let right = nums.length - 1;
    
    while( left < right){
        
        let mid = Math.floor((left+right)/2)
        
        if(nums[mid] > nums[right]){
            left = mid+1
        }
        else{
            right = mid
        }
        
    }
    left == right;
    return nums[left]
    
   
}


console.log(minimum([3,4,5,1,2])) //1
console.log(minimum([4,5,6,7,0,1,2])) //0
console.log(minimum([11,13,15,17])) //11
console.log(minimum([4, 5, 6, 7, 0, 1, 2])) //0