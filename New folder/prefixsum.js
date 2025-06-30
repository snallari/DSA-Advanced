function prefix(arr) {
    let le = arr.length
    let prefixSum=[]
    prefixSum[0]=arr[0]
    for (let i = 1; i < le; i++) {
      prefixSum[i]=arr[i]+prefixSum[i-1]
    }
    console.log("prefix",prefixSum)
    return prefixSum;
}

prefix([1,2,3,4,5])