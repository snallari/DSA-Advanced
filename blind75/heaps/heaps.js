class heap {
    values = []
    index = NaN
    findLargest(arr, k) {
        for (let i = 0; i < arr.length; i++) {
            if (this.values.length > k) {
                return this.deleteHeap()
            }
        }
    }

    findKthLargest(nums, k) {
        let i=0, val=0
        for (let i = 0; i < nums.length; i++) {
            this.insert(nums[i])
        }
        while(i<k){
            val=this.deleteHeap()
            i++
        }
        return val
    }

    lastStoneWeight(stones) {
        for (let i = 0; i < stones.length; i++) {
            this.insert(stones[i])
        }
        while(this.values.length>1){
            let first=this.deleteHeap()
            let second=this.deleteHeap()
            if(first!==second){
                this.insert(first-second)
            }else{
                console.log("both destroyed")
            }
        }
        return this.values.length > 0 ? this.values : [0];
    }

    /**
     * Removes and returns the element at the given 1-based index from the heap.
     * @param {number} k - The 1-based index of the element to pop.
     * @returns {Array} An array containing the element at the specified index, or undefined if the index is out of bounds.
     */


    deleteHeap() {
        if (this.values.length === 0) return undefined;

        let extract = this.values[0];        // Max element
        let lastElement = this.values.pop(); // Remove last

        if (this.values.length > 0) {
            this.values[0] = lastElement;    // Put last at root
            this.heapifyDown(0);             // Restore heap property
        }
        console.log("extract", extract
        )
        return extract;
    }
    getLeft(index) {
        return index * 2 + 1
    }

    getRight(index) {
        return index * 2 + 2
    }
    // heapfyDown(index){
    //    let left,right
    //    left=this.getLeft(index)
    //    right=this.getRight(index)
    //    let count=0

    //     while(count<6){
    //          console.log("heapify", this.values[left],this.values[right],this.values[index])
    //         if (this.values[index]>this.values[left]  && this.values[left] > this.values[right]) {
    //             this.swap(index, left, this.values)
    //             index = left
    //         } else if (this.values[index]>this.values[right] && this.values[right] > this.values[left]) {
    //             this.swap(index, right, this.values)
    //             index = right
    //         }
    //         count++
    //         left=this.getLeft(index)
    //         right=this.getRight(index)
    //     console.log("heap deleteHeap", this.values, left, right, index)
    //     }
    // }

    heapifyDown(index) {
        let largest = index;
        let left = this.getLeft(index);
        let right = this.getRight(index);

        // Find largest among node and its children
        if (left < this.values.length && this.values[left] > this.values[largest]) {
            largest = left;
        }

        if (right < this.values.length && this.values[right] > this.values[largest]) {
            largest = right;
        }

        // If largest is not the current node, swap and continue
        if (largest !== index) {
            this.swap(index, largest, this.values);
            this.heapifyDown(largest);
        }
        console.log("heap", this.values)
    }

    getParent(index) {
        return Math.floor((index - 1) / 2)
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
        while (index > 0) {
            median = this.getParent(index)
            console.log("inserted", this.values[median], this.values[index])
            if (this.values[index] > this.values[median]) {
                console.log("b4", this.values[median], this.values[index], this.values)
                this.swap(median, index, this.values)
                index = median
            } else {
                break;
            }
        }
        console.log("inserted", this.values)
    }
    swap(a, b, arr) {
        let temp;
        temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
        //console.log("swapped",arr)
        return arr;
    }
}
let h = new heap()
 console.log(h.findKthLargest([2,1],1))
