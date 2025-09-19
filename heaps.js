class heaps{
    constructor(){
        this.values=[]
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }

    getRight(index){
        return 2*index+2
    }

     getLeft(index){
        return 2*index+1
    }

    insert(val){
        this.values.push(val)
        this.bubbleUpMax()
    }
    swap(i,j,arr){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    bubbleUp(){
        //get the last element
        //check with the getparent
        //if its greater swap
        let index=this.values.length-1
        while(index>0){
            let parentIndex=this.getParent(index)
            if(this.values[index]>this.values[parentIndex]){
                this.swap(index,parentIndex,this.values)
                index=parentIndex
            }else{
                break
            }
        }

    }

     bubbleUpMax(){
        //get the last element
        //check with the getparent
        //if its greater swap
        let index=this.values.length-1
        while(index>0){
            let parentIndex=this.getParent(index)
            if(this.values[index]<this.values[parentIndex]){
                this.swap(index,parentIndex,this.values)
                index=parentIndex
            }else{
                break
            }
        }

    }

    delete(){
        let deleted=this.values.shift()
        console.log(deleted)
        this.bubbleDown()
    }
    bubbleDown(){
        let index=0
        while(index<this.values.length){
            let left=this.getLeft(index)
            let right=this.getRight(index)
            //compare with left and right find largest and than compare with the index to swap
            if(this.values[left]>this.values[right] && this.values[left]>this.values[index]){
                this.swap(index,left,this.values)
                index=left
            }else if(this.values[right]>this.values[left] && this.values[right]>this.values[index]){
                this.swap(index,right,this.values)
                index=right
            }else{
                break
            }
        }
    }

}

let h=new heaps()
//10, 20, 5, 6, 1, 8, 9
h.insert(10);
h.insert(20);
h.insert(5);
h.insert(6);
h.insert(1);
h.insert(8);
h.insert(9);
console.log(h.values)
h.delete()
console.log(h.values)