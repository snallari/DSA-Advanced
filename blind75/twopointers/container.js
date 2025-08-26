function container(heights){
     let left=0 , right=heights.length-1, max=0
        while(left<right){
            let h=Math.min(heights[left],heights[right])
            let w=right-left
            max=Math.max(max, h*w)
            if(heights[left]<heights[right]){
                left++
            }else{
                right--
            }
        }
    return max
}

console.log(container([1,8,6,2,5,4,8,3,7])) //49