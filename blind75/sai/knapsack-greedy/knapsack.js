function knapsack(values,weights,capacity){
    let ratio=[]
    values.map((value,index)=>{
        ratio.push({ratio:value/weights[index],weight:weights[index],value:value})
    })

   
    ratio.sort((a,b)=>b.ratio-a.ratio)
     console.log(ratio)
    let totalval=0
    for(let i=0;i<ratio.length; i++){
        if(capacity>0){
            let weight=ratio[i].weight
            let value=ratio[i].value
            if(capacity-weight>=0){
                capacity-=weight
                totalval+=value
                 console.log("val", totalval, capacity)
            }else{
                totalval+=value*(capacity/weight)
                capacity=0
            }
        }
    }
    console.log("val", totalval, capacity)
    return totalval
}

knapsack([60, 100, 120, 200],[10,20,30,5], 50)