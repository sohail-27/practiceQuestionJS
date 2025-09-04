var duplicate = function (nums){
    if(!nums || nums.length === 0) return null;
    
    let count = {}
    let arr = []
    
    for( let ele of nums){
        
         count[ele] = (count[ele] || 0) + 1;
         
         if(count[ele] == 2)
        {
            arr.push(ele)
        }
    }
    
    
    return arr
};
    

    
    console.log(duplicate([0, 1, 0, 1, 3, 3, 4, 5, 6, 7, 8, 9, 9])) // [0,1,3,9];