function twoSum(numbers, target) {
        let i=0,j=numbers.length-1, sum=0
        while(i<j){
            sum=numbers[i]+numbers[j]
            if(sum==target && numbers[i]!=numbers[j]){
                return [i,j]
            }else if(sum>target){
                j--
            }else{
                i++
            }
            console.log(i,j)
        }
        return []
    }

console.log(twoSum([1,2,3,4],3))