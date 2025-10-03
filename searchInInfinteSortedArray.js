function infiniteArray(arr, key){
    
    let s = 0;
    let e = 1;
    
    while(key > arr[e]){
        let newStart = e +1;
        e = e + (e - s + 1) * 2; // double the box size, As in normal binary search we cut them in half but here we double the box size means reverse of halving
        s = newStart;
    }
    
    return search(arr, key, s, e) // logN time complexity
    
}
    function search(arr, key, s, e){
        
        while(s<=e){
            let mid = Math.floor(s+(e-s)/2);
            
            if(key < arr[mid]){
                e = mid-1;
            }
            else if( key > arr[mid]){
                s = mid + 1;
            }
            else{
                return mid
            }
        }
        return -1;
    } // O(logN) time complexity

// overall time complexity is O(logN) + O(logN) = 2logN = O(logN) because we ignore constants in time complexity

console.log(infiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170],10)); //4
console.log(infiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170],3)); //0
console.log(infiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170],90)); //5
console.log(infiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170, 190, 200, 300, 309, 388, 399, 444, 455, 566, 677, 788, 899, 900, 11111, 22222, 222222],170)); //10
console.log(infiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170],101)); //-1