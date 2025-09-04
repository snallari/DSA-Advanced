function bs(nums, target){
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]==target){
            return mid
        }else if(target>nums[mid]){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return -1
}
console.log(bs([-1,0,2,4,6,8], 4))