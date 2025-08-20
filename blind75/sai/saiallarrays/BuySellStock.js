class BuySellStock {
    buySellStock(prices) {
        let minsofar=Infinity, maxprofit=0
        prices.forEach(element => {
            minsofar=Math.min(minsofar,element)
            maxprofit=Math.max(maxprofit,element-minsofar)
            console.log(maxprofit)
            return element
        });
    }
}

var buy=new BuySellStock()
buy.buySellStock([7,6,4,3,1])
