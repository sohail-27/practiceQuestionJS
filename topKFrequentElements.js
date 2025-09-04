var topKFrequent = function (nums, k){
    if(!nums || nums.length === 0) return null;
    
    let map = {};
    
    for ( let ele of nums) {
        map[ele] = (map[ele] || 0) + 1;
    }
    
   let sortedArr = Object.entries(map).sort((a, b) => b[1] - a[1])
   
   return sortedArr.slice(0,k).map(e => Number(e[0]))

}

console.log(topKFrequent([-1,-1,-2,-2,-2,-3],1));