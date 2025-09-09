
var searchRange = function (nums, target) {
    if (!nums || nums.length === 0) return [-1, -1]

    function findPosition(isFirst) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }

            else if (target > nums[mid]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return result;
    }

    let firstPosition = findPosition(true);
    let lastPosition = findPosition(false);

    return [firstPosition, lastPosition];

}


console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]
console.log(searchRange([], 0)) // [-1, -1]
console.log(searchRange([1], 1)) // [0, 0]
console.log(searchRange([2, 2], 2)) // [0, 1]
console.log(searchRange([1, 2, 3], 1)) // [0, 0]



