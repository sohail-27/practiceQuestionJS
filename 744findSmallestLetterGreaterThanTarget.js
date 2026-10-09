var nextGreatestLetter = function(letters, target) {
    let s = 0;
    let e = letters.length - 1;

    while(s<=e){
        let mid = Math.floor(s+(e-s)/2);
        
        if(target<letters[mid]){
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }
    }
    return letters[s % letters.length];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); //"c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); //"f"
console.log(nextGreatestLetter(["c", "f", "j"], "d")); //"f"
console.log(nextGreatestLetter(["c", "f", "j"], "g")); //"j"
console.log(nextGreatestLetter(["c", "f", "j"], "j")); //"c"
console.log(nextGreatestLetter(["c", "f", "j"], "k")); //"c"