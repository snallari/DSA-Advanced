class heap {
    values=[]
    index=NaN
    findLargest(arr,k){
        for(let i=0; i<arr.length;i++){
            this.insert(arr[i])
        }
        console.log("actual val", this.values)
        this.delete()
    }

    /**
     * Removes and returns the element at the given 1-based index from the heap.
     * @param {number} k - The 1-based index of the element to pop.
     * @returns {Array} An array containing the element at the specified index, or undefined if the index is out of bounds.
     */


    delete(){
        //delete the element
        let popval,extract
        popval = this.values.pop()
        extract=this.values[0]
        this.values[0]=popval
        console.log("popval", popval, extract, this.values)
        this.heapfyDown(0)
    }
    getLeft(index){
        return index*2+1
    }

    getRight(index){
        return index*2+2
    }
    heapfyDown(index){
       let left,right
       left=this.getLeft(index)
       right=this.getRight(index)
       let count=0
      
        while(count<6){
             console.log("heapify", this.values[left],this.values[right],this.values[index])
            if (this.values[index]>this.values[left]  && this.values[left] > this.values[right]) {
                this.swap(index, left, this.values)
                index = left
            } else if (this.values[index]>this.values[right] && this.values[right] > this.values[left]) {
                this.swap(index, right, this.values)
                index = right
            }
            count++
            left=this.getLeft(index)
            right=this.getRight(index)
        console.log("heap delete", this.values, left, right, index)
        }
    }

    /**
     * Inserts a value into the heap and maintains the max-heap property by bubbling up the new value.
     *
     * @param {*} val - The value to be inserted into the heap.
     * @returns {void}
     */
    insert(val) {
        let index, median
        this.values.push(val)
        index = this.values.length - 1
            while (index>0) {
                median = Math.floor((index-1) / 2)
                 //console.log("inserted", this.values[median], this.values[index])
                if (this.values[index] > this.values[median]) {
                   // console.log("b4", this.values[median], this.values[index], this.values)
                    this.swap(median, index, this.values)
                    index=median
                }else{
                    break;
                }
            }
            //console.log("inserted", this.values)
    }
    swap(a, b , arr) {
        let temp;
        temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
        //console.log("swapped",arr)
        return arr;
    }
}
let h=new heap()
h.values=[3,25,19,33,41,63,71]
//console.log(h.findLargest([3,2,1,5,6,4],2))
h.delete()
// h.insert(10)
// h.insert(15)
// h.insert(29)
// h.insert(20)
// h.insert(3)