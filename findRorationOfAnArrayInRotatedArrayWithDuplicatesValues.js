// Count the rotation of an array in a rotated sorted array with duplicates values

var rotationCount = function(arr) {

    function findPivotWithDuplicates(arr) {

        let s = 0, e = arr.length - 1;
        
        while(s<e){

            let mid = Math.floor( s + ( e - s )/2);
            
            // case 1 -
            if(mid < e && arr[mid] > arr[mid + 1]) return mid;
            // case 2-
            if(arr[mid - 1] > arr[mid]) return mid - 1;
            // case 3 - if elements at middle, start, end are equal then just skip the duplicates
            if(arr[s] == arr[mid] && arr[mid] == arr[e]){
                // skip the duplicates
                // NOTE: what if these elements at start and end were the pivot??
                // check if start is pivot
                if(arr[s] > arr[s + 1]) return s;
                s++;
                if(arr[e] < arr[e - 1]) return e - 1;
                e--;
            }
            // left side is sorted, so pivot should be in right
            else if( arr[s] < arr[mid] || arr[s] == arr[mid] && arr[mid] > arr[e]){
                s = mid + 1;
            }
            else{
                e = mid - 1;
            }
        }
        return -1
    }

    return findPivotWithDuplicates(arr) + 1;
}

console.log(rotationCount([2,3,3,4,5,5,9,0,1,2,2,2])); //7
console.log(rotationCount([4,5,6,7,0,1,2])); //4
console.log(rotationCount([1,2,3,4,5])); //0
console.log(rotationCount([1])); //0
console.log(rotationCount([3,1,2])); //1
console.log(rotationCount([1,1,1,1,1])); //0
console.log(rotationCount([1,1,1,0,1])); //3