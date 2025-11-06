/*# Intuition
Since the array is sorted in non-decreasing order, all negative numbers appear first, followed by zeros, and then positive numbers.
We don’t need to count every element — instead, we can use binary search to quickly find:

- The index of the last negative number, and

- The index of the first positive number.

Once we have those positions, we can compute the count of negatives and positives directly.

# Approach
1. Find the last negative number

- Use binary search to find the largest index r where nums[r] < 0.

- The count of negative numbers is r + 1 (since indices start at 0).

2. Find the first positive number

- Use binary search to find the smallest index l where nums[l] > 0.

- The count of positive numbers is n - l, where n is the array length.

3. Return the maximum of the two counts.

# Complexity
- Time complexity : O(log n)
We perform two binary searches, each taking logarithmic time.

- Space complexity : O(1)
Only a few pointers and variables are used — no extra data structures.

# Code
```javascript []

 *
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const n = nums.length;

    function firstPos(){
        let s = 0, e = n - 1;

        while(s<=e){
            let mid = Math.floor(s + (e - s)/2);

            if(nums[mid]>0) e = mid - 1;
            else s = mid + 1;
        }
        return s;
    }

    function firstNeg(){
        let s = 0, e = n - 1;

        while(s<=e){
            let mid = Math.floor(s + (e - s)/2);

            if(nums[mid]<0) s = mid + 1;
            else e = mid - 1;
        }
        return e;
    }

    const pos = n - firstPos();
    const neg = firstNeg() + 1;

    return Math.max(pos, neg);

};
//```


console.log(maximumCount([5,20,66,1314])); // 4
console.log(maximumCount([-2, -1, -1, 0, 0, 1, 1, 2])); // 3
console.log(maximumCount([0,0,0,0,0,0,1])); // 1
console.log(maximumCount([-3,-2,-1])); // 3
console.log(maximumCount([-5,-3,-1,0,0,0])); // 3
