// 2 pointer inside a loop 
function threesum(nums){
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length-1; i++){
        let left=i+1, right=nums.length-1
        while(left<right){
            let sums=nums[i]+nums[left]+nums[right]
            if(sums==0){
                return [nums[i], nums[left], nums[right]]
            }else if(sums>0){
                right--
            }else{
                left++
            }
        }
    }

}

console.log(threesum([-1,0,1,2,-1,-4]))