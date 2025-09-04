function subnumsay(str) {
  let split = str.split('')
  let i = 0, j = 0, max = 0, set = new Set()
  while (j < split.length) {
    if (!set.has(split[j])) {
      set.add(split[j])
      j++
    } else {
      set.delete(split[i])
      i++
    }
    console.log(i, j)
    max = Math.max(max, j - i)
    console.log("max", max)
  }
  return split.slice(i, j)
}

function subnumsaySum(nums, target) {
  let i = 0, j = 0, sum = 0, k=0,res=[]
  while (j < nums.length) {
    sum += nums[j]
    if (sum == target) {
      k++
      res.push([i, j])
    }
    j++
    if (sum > target) {
      i++
      sum -= nums[i]
    }
  }
  return res.length > 0 ? res : []
}




console.log(subnumsaySum([1,2,3], 3))
