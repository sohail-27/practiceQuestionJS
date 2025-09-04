var peakElement = function (nums){
    if(!nums || nums.length === 0) return null;
    
    let n = nums.length;
    
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;
    
    for ( let i = 1; i < n -1; i++ ){
        
        let leftCheck = nums[i] > nums[i-1]
        let rigthCheck = nums[i] > nums[i+1]
        
        if( ( leftCheck && rigthCheck) )return i
        }
}

console.log(peakElement([1,2,3,1]
));