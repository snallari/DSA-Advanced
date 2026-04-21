function window(arr){
    let left=0, right=0, max=0, set=new Set()
   while(right<arr.length){
        if(set.has(arr[right])){
            set.delete(arr[left])
            left++
        }else{
            set.add(arr[right])
            right++
            max=Math.max(max, right-left)
        }
    }
    return max
}

console.log(window("abcabcbb"))