function container(arr){
    let i=0, j=arr.length-1, maxArea=0
    while(i<j){
        const height = Math.min(arr[i], arr[j]);
        const width = j - i;
        maxArea = Math.max(maxArea, height * width);
        if(arr[i]<arr[j]){
            i++
        }else{
            j--
        }
    }
    return maxArea
}