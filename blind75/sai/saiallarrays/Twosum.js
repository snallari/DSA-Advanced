class Twosum{

    findtwoSum(nums, target){
        let map=new Map()
        let remaining=0
        for(let i=0; i<nums.length; i++){  
            remaining=target-nums[i]
            console.log("map",map)
            if(map.has(remaining)){
                map.get(remaining)
                return [map.get(remaining),i]
            }
             map.set(nums[i],i)
        }
        return []
    }
}

var twosum=new Twosum()
console.log(twosum.findtwoSum([3,2,4],6))