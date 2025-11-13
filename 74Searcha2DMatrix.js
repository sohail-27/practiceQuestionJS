/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length; // rows number
    let n = matrix[0].length; // column numbers
    let left = 0, right = (m*n) - 1;

    while(left<=right){
        let mid = Math.floor(left + ( right - left)/2);

        //convert 1D row and column indices to 2D array indices -> at 0 index 1 is in 1D and (0,0) indices 1 is in 2D
        let row = Math.floor(mid/n);
        let col = mid%n;

        if(matrix[row][col] == target) return true;
        if(target > matrix[row][col]) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
console.log(searchMatrix([[1]], 1)); // true
console.log(searchMatrix([[1,3]], 3)); // true
console.log(searchMatrix([[1],[3]], 3)); // true
console.log(searchMatrix([[1,3,5]], 1)); // true
console.log(searchMatrix([[1],[3],[5]], 5)); // true