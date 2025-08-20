class slidingwindow{

    longestSubstring(s){
        let char=s.split('')
        let visted=new Set()
        // let left=0, right=1 
        for(let i=0; i<char.length;i++){
            if(!visted.has(char[i])){
                visted.add(char[i])
            }
        }
        console.log("visited",visted)
        return visted.size
    }

    getMax(arr, target){
        let max=0, newsum=0
        for(let i=0; i<target;i++){
            max+=arr[i]
        }
         console.log("max1", max)
        let sum=max;
        for(let i=target; i<arr.length; i++){
            sum=sum+arr[i]-arr[i-target]
            max=Math.max(max,sum)
            console.log("max", max, sum,arr[i-target], arr[i])
        }
    }
}
var s=new slidingwindow()
s.getMax([1, 4, 2, 10, 2, 3, 1, 0, 20],4)
console.log("sliding", s.longestSubstring("geeksforgeeks"))