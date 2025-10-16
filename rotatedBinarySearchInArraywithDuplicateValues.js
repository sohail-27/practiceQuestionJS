
var findElementInDuplicateRotatedArray = function(arr, key) {
    //find element in rotated array with duplicate values  
    
    function findPivotWithDuplicates(arr) {

        let s = 0;
        let e = arr.length - 1;

        while ( s < e ){
            let mid = Math.floor( s + ( e - s)/2);

            // case 1 -
            if(mid < e && arr[mid] > arr[mid + 1]){
                return mid;
            }
            // case 2-
            if(mid > s && arr[mid] < arr[mid - 1]){
                return mid - 1;
            }
            // case 3 - if elements at middle, start, end are equal then just skip the duplicates
            if(arr[s] == arr[mid] && arr[mid] == arr[e]){
                // skip the duplicates
                // NOTE: what if these elements at start and end were the pivot??
                // check if start is pivot
                if(arr[s] > arr[s + 1]){
                    return s;
                }
                s++;
                if(arr[e] < arr[e - 1]){
                    return e - 1;
                }
                e--;
            }
            // left side is sorted, so pivot should be in right
            else if ( arr[s] < arr[mid] || (arr[s] == arr[mid] && arr[mid] > arr[e])){
                s = mid + 1;
            }
            else{
                e = mid - 1;
            }
        }
        return -1;
    }

    function binarySearch(arr, key, s, e){
        while( s<= e){

            let mid = Math.floor( s + ( e - s)/2);

            if(key < arr[mid]){
                e = mid - 1;
            }
            else if ( key > arr[mid]){
                s = mid + 1;
            }
            else{
                return mid;
            }
        }
        return -1;
    }

    let pivot = findPivotWithDuplicates(arr);
    // if you did not find a pivot, it means the array is not rotated
    if(pivot == -1) return binarySearch(arr, key, 0, arr.length - 1);
    // if pivot is found, you have found 2 asc sorted arrays
    if(arr[pivot] == key) return pivot; // found at pivot
    // if key is greater than or equal to start, search in first half, else search in second half
    if(key >= arr[0]) return binarySearch(arr, key, 0, pivot-1);
    return binarySearch(arr, key, pivot + 1, arr.length - 1);


}

console.log(findElementInDuplicateRotatedArray([2,3,3,4,5,5,9,0,1,2,2,2], 5)); 
console.log(findElementInDuplicateRotatedArray([2,2,2,3,4,5,5,9,0,1,2], 3));//3
console.log(findElementInDuplicateRotatedArray([1,1,1,1,1,1,1], 2));//-1
console.log(findElementInDuplicateRotatedArray([1,1,1,1,1,1,1], 1)); //0
console.log(findElementInDuplicateRotatedArray([1,3,1,1,1], 3)); //1
console.log(findElementInDuplicateRotatedArray([3,1,1,1,1], 3)); //0
console.log(findElementInDuplicateRotatedArray([1,1,1,3,1], 3)); //3
console.log(findElementInDuplicateRotatedArray([1,1,3,1,1], 3)); //2
console.log(findElementInDuplicateRotatedArray([1,3,1,1,1], 3)); //1
console.log(findElementInDuplicateRotatedArray([3,1], 1)); //1
console.log(findElementInDuplicateRotatedArray([3,3,3,3,1,3], 1)); //4
console.log(findElementInDuplicateRotatedArray([3,3,3,3,1,3], 3)); //0