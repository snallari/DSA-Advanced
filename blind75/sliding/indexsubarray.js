const indexOfSubarray=(arr, target)=>{
    let i=0, j=0,   minlength=Infinity, newval=0
    /*check arr[j] which is 0 keep moving the array untill you find the target*/
    while(j<arr.length){
        newval+=arr[j]
        j++
        if(newval>target){
            newval-=arr[i]
            i++
        }
        if(newval===target){
             console.log({i,j})
            newval=j-i
            minlength=Math.min(minlength,newval)
        }

    }
    return minlength
}

indexOfSubarray([1, 2, 3, 7, 5],12)