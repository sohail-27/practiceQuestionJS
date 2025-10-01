function findFloorElement(arr, key) {
    
    if(!arr || arr.length === 0) return -1;

    let s = 0
    let e = arr.length - 1;

    while(s<=e){
         let mid = Math.floor(s+(e-s)/2);

         if(key < arr[mid]){
            e = mid - 1;
         }
         else {
            s = mid + 1;
         }
    }

    return e < 0 ? -1 : e;

}


console.log(findFloorElement([2,3,5,9,14,16,18], 15)); //4
console.log(findFloorElement([4,6,10], 6)); //1
console.log(findFloorElement([1,3,8,10,15], 12));
console.log(findFloorElement([4,6,10], 17)); //-1
console.log(findFloorElement([4,6,10], -1)); //0
console.log(findFloorElement([1,3,8,10,15], 12)); //3
console.log(findFloorElement([4,6,10], 17)); //2
console.log(findFloorElement([4,6,10], -1)); //-1
console.log(findFloorElement([1,3,8,10,15], 12)); //3