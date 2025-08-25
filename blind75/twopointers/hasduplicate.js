function hasDuplicate(nums) {
        // let map=new Map()
        // for(let i=0; i<nums.length; i++){
        //     console.log("i", i, nums[i], map)
        //     if(!map.has(nums[i])){
        //          map.set(nums[i], i)
        //     }else{
        //         return true
        //     }
        // }
        // return false
        nums.sort((a,b)=>a-b)
        let i=0, j=1
        while(j<nums.length){
            if(nums[i]!=nums[j]){
                i++
                j++
            }else{
                return true
            }
        }
        return false
    }
console.log(hasDuplicate([2,14,18,22,22]))