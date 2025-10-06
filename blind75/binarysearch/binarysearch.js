class Search {
    bs(arr, target) {
        let i = 0, j = arr.length - 1
        let targetSearch = i + j / 2
        if (arr[targetSearch] == target) {
            console.log("founund",arr[targetSearch], targetSearch)
            return arr[targetSearch]
        } else if (arr[i] > target) {
            j--
        } else {
            i++
        }
    }

}
var search=new Search()
search.bs([2,3,4,5,6], 3)
