var group = function (nums){
    if(!nums || nums.length === 0) return null;
    
    let map = {};
    
    for ( let ele of nums){
        if(!map[ele.age]){
            map[ele.age] = []
        }
        map[ele.age].push(ele.name);
    }
    return map
}

console.log(group([
  { name: "John", age: 18 },
  { name: "Jane", age: 18 },
  { name: "Jake", age: 19 }
]));