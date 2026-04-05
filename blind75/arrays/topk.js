

export class Heap{

    getParent(index){
        return Math.floor((index-1)/2)
    }
    //MAX HEAP IS GOOD FOR TOP K PROBLEMS
    maxHeap(arr){
        const start=this.getParent(arr.length-1)
        for(let i=start; i>=0; i--){
            this.bubbleDown(arr,i)
        }
        return arr
    }

    bubbleDown(arr, index){
        let largest=index
        const left=2*index+1
        const right=2*index+2
        
        if(left<arr.length && arr[left][1]>arr[largest][1]){
            largest=left
        }

        if(right<arr.length && arr[right][1]>arr[largest][1]){
            largest=right
        }

        if(largest!==index){
            [arr[index], arr[largest]] = [arr[largest], arr[index]]
            this.bubbleDown(arr, largest)
        }
    }

    extractMax(arr){
        if(arr.length===0) return null
        if(arr.length===1) return arr.pop()
        const max=arr[0]
        arr[0]=arr.pop()
        console.log("pop", arr[0])
        this.bubbleDown(arr,0)
        return max
    }
}



export class TopK{
    topk(arr,k){
        const map=new Map()
        for(let i=0; i<arr.length; i++){
            if(map.has(arr[i])){
                map.set(arr[i],map.get(arr[i])+1)
            } else {
                map.set(arr[i], 1)
            }
        }
         console.log("Map", map)
        const heap=new Heap()
        const maxHeap=heap.maxHeap(Array.from(map.entries()))
        console.log("Maxheap", maxHeap)
        const result=[]
        const limit=Math.min(k,maxHeap.length)
        for(let i=0; i<limit; i++){
            const pair=heap.extractMax(maxHeap)
            result.push(pair[0])
        }
        return result
    }
}

console.log(new TopK().topk([1,1,2,2,2,2,3,3,3],2))