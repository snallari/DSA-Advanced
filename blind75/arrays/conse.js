function conse(arr){
        //nums=new Set(nums)
    //for(let i=0; i<nums; i++)
    //set has !nums[i]-1
    //current=1
    let set =new Set(arr)
    let longest=0
    let current=0
    for(let i of set){
        if(!set.has(i-1)){
            console.log(i, longest)
            current=1
            while(set.has(i+current)){
                current++
            }
            longest=Math.max(longest,current)
            console.log("longest", longest)
        }
    }
    return longest
}

console.log(conse([100,4,200,1,3,2]))