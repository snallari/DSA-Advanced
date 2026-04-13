function bestTime(prices){
    let minPrices=prices[0], max=0
    for(let i=1; i<prices.length; i++){
        minPrices=Math.min(minPrices, prices[i])
        console.log(minPrices)
        max=Math.max(max, prices[i]-minPrices)
    }
    return max
}

console.log(bestTime([4,2,1]))