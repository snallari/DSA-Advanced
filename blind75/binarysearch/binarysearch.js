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

    searchInSortedArray(arr, target){
        //find mid
        //low=0 high=arr.length-1
        //target>=arr[low] target<=arr[mid]
        //high=mid-1
        //else low=mid+1
    }

}
var search=new Search()
search.bs([2,3,4,5,6], 3)
search.searchInSortedArray([4,5,6,7,0,1,2], 0)
