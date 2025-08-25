function threesum(nums) {
    nums.sort((a,b)=>a-b)
    let i = 0, j = 1, k = 2, res = []
    console.log("sorted", nums)
    while (j < nums.length) {
        console.log("i", i, "j", j, "k", k)
        if (nums[i] + nums[j] + nums[k] == 0) {
            console.log("3 sum", nums[i], nums[j], nums[k])
            res.push([nums[i], nums[j], nums[k]])
            j++
            k++
        } else{
            j++
            k++
        }
       
    }
    return res.length > 0 ? res : []
}

console.log(threesum([-1,0,1,2,-1,-4]))