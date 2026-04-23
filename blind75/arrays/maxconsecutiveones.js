function maxConsecutiveOnes(nums){
    let left=0, right=0, max=0
    while(right<nums.length){
        if(nums[right]==1){
            right++
        }else{
            left=right+1
            right++
        }
        max=Math.max(max, right-left)
    }
    return max
}

console.log(maxConsecutiveOnes([1,1,0,1,1,1]))