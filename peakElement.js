var peakElement = function (nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return 0;

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid + 1] > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid
        }
    }
    return left
}

console.log(peakElement([1, 2, 3, 1]
)); //2
console.log(peakElement([1, 2, 1, 3, 5, 6, 4]
)); //5
console.log(peakElement([1]
)); //0
console.log(peakElement([1, 2])); //1 why 1 because 2 is the peak element in the array [1, 2]. The function returns the index of the peak element, which is 1 in this case.


