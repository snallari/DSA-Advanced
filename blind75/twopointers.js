class Twppts {
    arr2(arr, target) {
        let i = 0, j = arr.length - 1
        while (i < j) {
             console.log("i,j", i, j)
            if (arr[i] + arr[j] == target) {
                return [i, j]
            } else if (arr[i] + arr[j] < target) {
                i++
            } else {
                j--
            }
        }
    }
}

var s= new Twppts()
s.arr2([3,2,4],6)