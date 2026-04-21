function container(height){
    //get the min
    let left=0, right=height.length-1, max=0;
    while(left<right){
        let min=Math.min(height[left], height[right]);
        const width=right-left;
        const area=min*width;
        max=Math.max(max, area)
         console.log("left", left, right,min, area, max)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
}

console.log(container([1,8,6,2,5,7]))