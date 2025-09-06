var longestCommonPrefix = function (arr) {
    if (!arr || arr.length === 0) return "";
    if (arr.length === 1) return arr[0];

    let prefix = arr[0];

    for ( let i = 1; i < arr.length; i++){
        while(arr[i].indexOf(prefix)!==0){

            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;

}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix(["ab", "a"])); // "a"
console.log(longestCommonPrefix(["cir","car"])); // "c"