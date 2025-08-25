const findDuplicates=(arr)=>{
    let i=0, j=0, count=0
    while(j<arr.length && count<3){
        if(arr[i]!=arr[i+1]){
            i++
            console.log(i, j, arr[i], arr[j], arr,"in i!=j")
        }else{
            arr[i+1]=arr[j]
            console.log("i", i, "j", j, "arr[i]", arr[i], "arr[j]", arr[j], "arr", arr,"in i==j")
        }
        count++
       
    }
}

//step 1 i=0 j=1  arr[i]=1 arr[j]=1 since equal increment j
//step 2 i=0 j=2  arr[i=0]=1 arr[j=2]=2 since no equal arr[i+1]=arr[j] i++ arr[1]=arr[]
console.log("removeDuplicates", findDuplicates([1,1,2,2,3,4,4,5]))
//i=1 , j=1
//i=1, j=2