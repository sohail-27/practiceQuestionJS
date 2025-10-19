var rotationCount = function(arr) {
    
    function findPivot(arr){
        let s = 0, e = arr.length - 1;
        
        while(s<e){
            let mid = Math.floor(s + ( e - s )/2);
            
            if(arr[mid] > arr[mid + 1]) return mid;
            if(arr[mid - 1] > arr[mid]) return mid - 1;
            if(arr[s] <= arr[mid]) s = mid + 1;
            else {
                e = mid - 1
            }
        }
        return -1;
    }
    
 let pivot = findPivot(arr);
 
 return pivot + 1;
    
};
console.log(rotationCount([2,3,3,4,5,5,9,0,1,2,2,2])); //7
console.log(rotationCount([4,5,6,7,0,1,2])); //4
console.log(rotationCount([1,2,3,4,5])); //0
console.log(rotationCount([1])); //0
console.log(rotationCount([3,1,2])); //1