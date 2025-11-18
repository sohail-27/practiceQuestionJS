/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let r = 0, c = matrix[0].length - 1;

    while(r < matrix.length && c >=0){

        if(matrix[r][c] == target) return true;
        if(target>matrix[r][c]) r++;
        else c--;


    }
    return false
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)) // true
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20)) // false
console.log(searchMatrix([[-1,3]], 3)) // true
console.log(searchMatrix([[1,3,5]], 1)) // true
console.log(searchMatrix([[1,3,5]], 0)) // false
console.log(searchMatrix([[1],[3],[5]], 5)) // true
console.log(searchMatrix([[1],[3],[5]], 2)) // false
console.log(searchMatrix([[1,3,5]], 3)) // true
console.log(searchMatrix([[1,3,5]], 4)) // false
