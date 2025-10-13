var search = function(nums, target) {

    function findPivot(nums){
        let s = 0, e = nums.length - 1;

        while(s<e){

            let mid = Math.floor( s + ( e - s )/2);

            if(mid < e && nums[mid] > nums[mid + 1]){
                return mid;
            }
            if(mid > s && nums[mid] < nums[mid - 1]){
                return mid-1;
            }
            if(nums[mid] <= nums[s]){
                e = mid - 1;
            }
            else{
                s = mid + 1;
            }
        }

        return -1
    }
    
    
    function findTarget(nums, target, s, e){
        
        while(s<=e){

            let mid = Math.floor( s + ( e - s )/2);

            if(target < nums[mid]){
                e = mid - 1;
            }
            else if(target > nums[mid]){
                s = mid + 1;
            }
            else{
                return mid;
            }

        }
        return -1;
    }
    let pivot = findPivot(nums);
    
    if(pivot == -1) return findTarget(nums, target, 0, nums.length-1);
    if(target == nums[pivot]) return pivot;
    if(target >= nums[0]) return findTarget(nums, target, 0,pivot-1) 
    return findTarget(nums, target, pivot+1,nums.length-1) 

};
console.log(search([4,5,6,7,0,1,2], 2));
console.log(search([5,1,3], 5));