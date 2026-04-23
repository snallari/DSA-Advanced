//VARIABLE SLIDING WINDOW
//2 POINTERS , STAY LEFT, RIGHT START, INCREMENT RIGHT IF THE CONDITION OK ELSE INCREMENT
//LEFT WHICH IS START AT WINDOW sometimes get the max width==(right-left)
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