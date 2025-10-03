function mountainArrayPeakIdx(arr){
    
    let s = 0;
    let e = arr.length - 1;
    
    while(s < e){ // we are using < because when s == e, that is the largest number and we want to return that also
        
        let mid = Math.floor(s + (e - s)/2);
        
        if(arr[mid] > arr[mid + 1]){
            // you are in decreasing part of array, this may be the ans but look at left side
            // this is why e != mid - 1
            e = mid;
        }
        else {
            // you are in ascending part of array, this means mid + 1 element > mid element
            // this is why s != mid
            s = mid + 1;
        }
    }
    // in the end, s == e and pointing to the largest number because of the 2 checks above
    // also, we can say that at the end of the while loop, s and e will both be pointing to the peak element because of the 2 checks above
    // morw ellantically, at every point of time for s and e, they have the best possible ans till that time
    // and if we are saying that only one element will be remaining, that is the best possible ans
    // we can return either s or e
    return s;
    
}



console.log(mountainArrayPeakIdx([0,10,23, 45, 50, 44, 30, 5,2])); //4
console.log(mountainArrayPeakIdx([1,3,5,7,9,11,13,12,10,8,6,4,2])); //6
console.log(mountainArrayPeakIdx([0,2,1])); //1
console.log(mountainArrayPeakIdx([3,4,5,1])); //2
console.log(mountainArrayPeakIdx([24,69,100,99,79,78,67,36,26,19])); //2
console.log(mountainArrayPeakIdx([0,1,0])); //1
console.log(mountainArrayPeakIdx([0,2,1,0])); //1
console.log(mountainArrayPeakIdx([0,10,5,2])); //1
console.log(mountainArrayPeakIdx([3,4,5,1])); //2
console.log(mountainArrayPeakIdx([24,69,100,99,79,78,67,36,26,19])); //2