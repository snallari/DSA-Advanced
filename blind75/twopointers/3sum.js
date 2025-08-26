function threesum(nums) {
  let res=[]
   nums.sort((a,b)=>a-b)
   for(let i=0; i<nums.length; i++){
       let j=i+1, k=nums.length-1
       while(j<k){
           let sum=nums[i]+nums[j]+nums[k]
           if(sum==0){
              res.push([nums[i], nums[j], nums[k]])
              j++
              k--
           }else if(sum<0){
               j++
           }else{
               k--  
           }
       }
   }
   return res.length>0? res : []

}

console.log(threesum([-1,0,1,2,-1,-4]))