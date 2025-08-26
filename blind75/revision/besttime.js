function besttime(arr){
    let min=Infinity, newlen=0, maxprofit=0
    for(let i=0; i<arr.length; i++){
        min = Math.min(min, arr[i]);
        maxprofit = Math.max(maxprofit, arr[i] - min);
    }
    return maxprofit;
}

console.log(besttime([10,1,5,6,7,1]))