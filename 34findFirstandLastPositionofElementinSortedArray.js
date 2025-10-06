function findFirstAndLastPosition(arr, key) {
    let ans = [-1, -1];

    // first occurence
    function search(arr, key, findFirst) {

        let idx = -1;
        let s = 0;
        let e = arr.length - 1;

        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);

            if (key > arr[mid]) {
                s = mid + 1;
            }
            else if (key < arr[mid]) {
                e = mid - 1;
            }
            else {
                idx = mid;
                if(findFirst){
                    e = mid - 1;
                }
                else{
                    s = mid + 1;
                }
            }
        }
        return idx;
    }

    ans[0] = search(arr, key, true); // logN time complexity
    if(ans[0]!=-1){
        ans[1] = search(arr, key, false); // logN time complexity
        // logN + logN = 2logN = O(logN) beacuse we ignore constants in time complexity
    }

    return ans;
}



console.log(findFirstAndLastPosition([5, 7, 7, 7, 7, 8, 8, 10], 7)); //[1,4]
console.log(findFirstAndLastPosition([5, 7, 7, 8, 8, 10], 6)); //[-1,-1]
console.log(findFirstAndLastPosition([], 0)); //[-1,-1]
console.log(findFirstAndLastPosition([1, 2, 3], 1)); //[0,0]
console.log(findFirstAndLastPosition([1, 2, 3], 3)); //[2,2]    
console.log(findFirstAndLastPosition([1], 1)); //[0,0] 
console.log(findFirstAndLastPosition([2, 2], 2)); //[0,1]
