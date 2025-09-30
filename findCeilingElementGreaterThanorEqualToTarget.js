function FindCeilingElement(arr, target){
    if(!arr || arr.length === 0) return -1;

    let s = 0;
    let e = arr.length - 1;

    while(s<=e){
        let mid = Math.floor(s+(e-s)/2);

        if(target == arr[mid]) return mid;

        if(target > arr[mid]){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return s >= arr.length ? -1 : s;

}

console.log(FindCeilingElement([2,3,5,9,14,16,18], 15)); //5
console.log(FindCeilingElement([4,6,10], 6)); //1
console.log(FindCeilingElement([1,3,8,10,15], 12)); //4
console.log(FindCeilingElement([4,6,10], 17)); //-1
console.log(FindCeilingElement([4,6,10], -1)); //0
