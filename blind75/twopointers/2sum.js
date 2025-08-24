const twosum = (array,targetSum) => {
    array.sort((a,b)=>a-b)
    console.log("sorted", array)
    let i = 0; j = array.length - 1, sum = 0
    while (i < j) {
        sum = array[i] + array[j]
        if (sum == targetSum) {
            return [array[i], array[j]]
        } else if (sum > targetSum) {
            j--
        } else {
            i++
        }
        console.log("i", i, "j", j, "sum", sum)
    }
}

console.log("twosum", twosum([3,5,-4, 8, 11,1,-1,6],10))