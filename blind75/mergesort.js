
//15 min merge sort :P
class Merge {
    divide(arr) {
        if(arr.length <= 1){
            return arr;
        }else{
            console.log("arr", arr)
            let mid = Math.floor(arr.length / 2)
            let left = this.divide(arr.slice(0, mid))
            let right = this.divide(arr.slice(mid))
            return this.conquer(left, right)
        }
    }

    conquer(left, right) {
        console.log("left", left, "right", right)
        let i = 0, j = 0;
        const res = []
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res.push(left[i])
                i++
            } else {
                res.push(right[j])
                j++
            }
        }
        console.log("res1", res)
        while (j < right.length) {
            res.push(right[j])
            j++
        }
        console.log("resj", res)
        while (i < left.length) {
            res.push(left[i])
            i++
        }
        console.log("resi", res)
        return res
    }
}

const m = new Merge()
m.divide([1, 4, 2, 10, 2, 3, 1, 0, 20])