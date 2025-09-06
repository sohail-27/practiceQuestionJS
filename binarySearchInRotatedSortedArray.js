var binarySearchInRotatedSortedArray = function (nums, target) {

    let left = 1;
    let right = nums.length;

    while( left <= right)
    {
        let mid = Math.floor(left + right)/2;

        if(target == nums[mid]) return mid;

        if ( target > nums[mid]){
            left = mid + 1;
        }

        else {
            right = mid - 1
        }

    }
    return -1;
}


console.log(binarySearchInRotatedSortedArray([4,5,6,7,0,1,2],0))
console.log(binarySearchInRotatedSortedArray([4,5,6,7,0,1,2],3))
console.log(binarySearchInRotatedSortedArray([1],0)) 