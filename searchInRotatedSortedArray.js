var Sorted = function (arr, k){
    if (!arr || arr.length === 0) return null;
    
    for ( let i = 0; i < arr.length; i++){
        if(k == arr[i]) return i
    }
    return -1
}
console.log(Sorted([7], 3)); // -1
console.log(Sorted([4,5,6,7,0,1,2], 0)); // 4
console.log(Sorted([4,5,6,7,0,1,2], 3)); // -1
console.log(Sorted([1], 1));             // 0
console.log(Sorted([1,3], 3));           // 1
console.log(Sorted([6,7,8,1,2,3,4,5], 3)); // 5
