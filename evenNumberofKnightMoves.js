var canReach = function(start, target) {
    const startColor = (start[0] + start[1]) % 2;
    const targetColor = (target[0] + target[1]) % 2;

    return startColor === targetColor;
};

console.log(canReach([0, 0], [1, 2])); // true
console.log(canReach([0, 0], [1, 1])); // false
console.log(canReach([2, 3], [4, 5])); // true
console.log(canReach([1, 1], [2, 2])); // false
console.log(canReach([0, 0], [2, 1])); // true
console.log(canReach([0, 0], [3, 3])); // false