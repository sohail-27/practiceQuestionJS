var singleNonDuplicate = function(nums) {
    if(nums.length == 1) return nums[0];
    if(nums[0] != nums[1]) return nums[0];
    if(nums[nums.length-1] != nums[nums.length-2]) return nums[nums.length-1];

    let s = 1, e = nums.length-2;
    while(s<=e){
        let mid = Math.floor(s + (e - s)/2);
        //if mid is the ans
        if(nums[mid] != nums[mid+1] && nums[mid] != nums[mid-1]) return nums[mid];
        
        //if we are on left-
        if((mid%2 == 1 && nums[mid] == nums[mid-1]) || (mid%2 == 0 && nums[mid] == nums[mid+1])){
            s = mid + 1;
        }

        //if we are on right-
        else{
            e = mid - 1;
        }

    }
    return -1;
};

var singleNonDuplicate2 = function(nums) {
    let s = 0, e = nums.length - 1;

    while(s<e){

        let mid = Math.floor(s + (e - s)/2);

        if(mid%2 == 1) mid--; //make mid even

        if(nums[mid] == nums[mid+1]){//it means everything up to mid+1 is normal, so the single element must be after that.
            s = mid + 2; //Move s to mid + 2.
        }
        else{
            e = mid - 1; 
        }

    }
    return nums[s];//At the end of the loop, s == e, pointing to the single element.
}

console.log(singleNonDuplicate([3,3,7,7,10,11,11])); //10
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); //2
console.log(singleNonDuplicate([1,1,2])); //2
console.log(singleNonDuplicate2([1])); //1
console.log(singleNonDuplicate2([3,3,7,7,10,11,11])); //10
console.log(singleNonDuplicate2([1,1,2,3,3,4,4,8,8])); //2
console.log(singleNonDuplicate([1,1,2,2,3])); //3