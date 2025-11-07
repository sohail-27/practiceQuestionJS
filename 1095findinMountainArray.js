function findTargetInMountainArr(arr, target) {
    // step1: find peak index
    function peakIndexInMountainArray(arr) {

        let s = 0, e = arr.length - 1;

        while (s < e) {
            let mid = Math.floor(s + (e - s) / 2);

            if (arr[mid] > arr[mid + 1]) {
                e = mid;
            }
            else {
                s = mid + 1;
            }
        }
        return s; // or return e; both are same when s==e
    }

    let peak = peakIndexInMountainArray(arr);

    function binarySearch(arr, target, s, e, isAsc) {
        let idx = -1
        while (s <= e) {
            let mid = Math.floor(s + (e - s) / 2);

            if (arr[mid] == target) {
                idx = mid;
                break;
            }
            if (isAsc) {
                if (target > arr[mid]) {
                    s = mid + 1;
                }
                else {
                    e = mid - 1;
                }
            }
            else {
                if (target > arr[mid]) {
                    e = mid - 1;
                }
                else {
                    s = mid + 1;
                }
            }
        }

        return idx;
    }

    let firstTry = binarySearch(arr, target, 0, peak, true);
    if (firstTry != -1) return firstTry;

    return binarySearch(arr, target, peak + 1, arr.length - 1, false);
}


console.log(findTargetInMountainArr([0, 1, 2, 4, 2, 1], 2)); //2
console.log(findTargetInMountainArr([0, 5, 3, 1], 1)); //3
console.log(findTargetInMountainArr([0, 1, 2, 4, 2, 1], 3)); //-1
console.log(findTargetInMountainArr([1, 5, 2], 2)); //2
console.log(findTargetInMountainArr([1, 2, 3, 4, 5, 3, 1], 3)); //2
console.log(findTargetInMountainArr([0, 10, 5, 2], 5)); //2
console.log(findTargetInMountainArr([3, 5, 3, 2, 0], 0)); //4
console.log(findTargetInMountainArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3)); //2
console.log(findTargetInMountainArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 11)); //-1
console.log(findTargetInMountainArr([0, 1, 2, 3, 4, 5, 3, 1], 5)); //5