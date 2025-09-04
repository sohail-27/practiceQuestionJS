var product = function (nums){
    if(!nums || nums.length === 0) return null;
    
    let left = 1;
    let right = 1;
    let arr = []
    
    for( let i =0; i<nums.length; i++){
        if(i!== 0 ){
            for(let j =0; j<i;j++){
                left = left*nums[j];
            }
        }
        for(let k =i+1; k<nums.length; k++){
            right = right*nums[k];
        }
        
        
        
        arr.push(left*right)
        left = right = 1
        
    }
    
    return arr
    
}

console.log(product([1, 0, 3, 4]))