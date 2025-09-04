var Missing = function (nums){
    if(!nums || nums.length === 0) return null;
    
    let missingNum = []
    let set = new Set(nums)
    
    for(let i = 0; i <= nums.length; i++){
        if(!set.has(i)) missingNum.push(i)
        
    }
    return missingNum
}

console.log(Missing([0,2,4]));