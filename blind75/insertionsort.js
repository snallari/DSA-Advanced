class insertsort{
    //take the first element
    //compare if its greater swap a[i+1]=a[i]
    //i++

    sorrt(arr){
        let key, j
        for(let i=1; i<arr.length; i++){
            key=arr[i]
            j=i-1
            console.log("key,j", key,arr[j], "j", j, arr)
            while(arr[j]>key){
                arr[j+1]=arr[j]
                j--
            console.log("j",arr[j+1],arr)
            }
            arr[j+1]=key
        }
        console.log("arr", arr)
    }

}


var so=new insertsort()
so.sorrt([5,3,4,1])
