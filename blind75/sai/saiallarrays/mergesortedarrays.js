function mergeSortedArray(arrA, arrB){
    let i=0, j=0, mergedArr=[], k=0
    while(i<arrA.length && j<arrB.length){
        if(arrA[i]<arrB[j]){
            mergedArr[k]=arrA[i]
            k++
            i++
        }else{
            mergedArr[k]=arrB[j]
            k++
            j++
        }
        console.log("arrk", mergedArr)
    }
    while(i<arrA.length){
        mergedArr[k]=arrA[i]
        k++
        i++
    }
     while(j<arrB.length){
        mergedArr[k]=arrB[j]
        k++
        j++
    }
      console.log("arrk", mergedArr)
}

mergeSortedArray([5,8,9],[4,7,10])