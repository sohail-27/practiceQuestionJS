var search = function (nums, target) {

    // Function to find the pivot element in the rotated sorted array
    // Pivot element is the largest element in the array
    // After pivot element, the array is rotated
    // For example, in [4,5,6,7,0,1,2], pivot is 7

    function findPivot(nums) {
        let s = 0, e = nums.length - 1;

        while (s < e) {

            let mid = Math.floor(s + (e - s) / 2);

            if (nums[mid] > nums[mid + 1]) { // If mid is greater than mid + 1, then mid is the pivot
                return mid;// Return mid as pivot
            }
            if (nums[mid] < nums[mid - 1]) {// If mid is less than mid - 1, then mid - 1 is the pivot
                return mid - 1;// Return mid - 1 as pivot
            }
            if (nums[mid] <= nums[s]) {// If mid is less than or equal to start, then pivot is in left side
                e = mid - 1;// Move the end pointer to mid - 1
            }
            else {// If mid is greater than start, then pivot is in right side
                s = mid + 1;// Move the start pointer to mid + 1
            }
        }

        return -1
    }

    function findTarget(nums, target, s, e) {

        while (s <= e) {

            let mid = Math.floor(s + (e - s) / 2);

            if (target < nums[mid]) { // If target is less than mid, then search in left side
                e = mid - 1; // Move the end pointer to mid - 1
            }
            else if (target > nums[mid]) {// If target is greater than mid, then search in right side
                s = mid + 1;// Move the start pointer to mid + 1
            }
            else {
                return mid;
            }

        }
        return -1;
    }
    let pivot = findPivot(nums);
    if (target == nums[pivot]) return pivot;
    if (target >= nums[0]) return findTarget(nums, target, 0, pivot - 1)
    return findTarget(nums, target, pivot + 1, nums.length - 1)

};


console.log(search([4, 5, 6, 7, 0, 1, 2], 0));//4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));//-1
console.log(search([1], 0));//-1
console.log(search([1, 3], 3));//1
console.log(search([3, 1], 1));//1
console.log(search([5, 1, 3], 3));//2
console.log(search([5, 1, 3], 5));//0