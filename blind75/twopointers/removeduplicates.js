const removeDuplicates=(arr)=>{
    let i=0, j=1, count=0
    while(j<arr.length){
        if(arr[i]==arr[j]){
            j++
        }else{
            arr[i+1]=arr[j]
            i++
        }
    }
    return arr.slice(0,i+1)
}

console.log("removeDuplicates", removeDuplicates([1,1,2,2,3,4,4,5]))
//i=1 , j=1
//i=1, j=2