class Kadanes {
    //step1-intialize maxsum=arr[0] , cursum=arr[0]
    //step2-currsum=maxsum+arr[i]
    //step3-presentmax=max of present arr[i] or currmax(arr[i], currMax)
    //step4-maxglobal max or before max
    getsubarray(arr) {
        console.log("arr", arr)
        let currSum = arr[0], max = arr[0], maxGlobal = arr[0]
        for (let i = 1; i < arr.length; i++) {
            currSum = max + arr[i]
            max = Math.max(arr[i], currSum)
            console.log("maxsum", max, arr[i])
            maxGlobal = Math.max(maxGlobal, max)
            console.log("maxsum gl", maxGlobal)
        }
    }

    maxSubarray(arr) {
        //If arr[i]>maxsum+arr[i]
        //maxsum=arr[i], also change the tempstatart from 0 to new index as there is new arr value which is high
        //else maxsum=maxsum+arr[i]
        //if maxglobal>maxsum set the maxgloabal to maxsum ,start=tempstart and end=i
        let currsum = arr[0], maxsum = arr[0], maxGlobal = arr[0], start = 0, end = 0, tempstart = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxsum + arr[i]) {
                console.log("maxsum i", arr[i], "i", i)
                maxsum = arr[i],
                    tempstart = i
            } else {
                console.log("maxsum", maxsum + arr[i], "i", i)
                maxsum = maxsum + arr[i]
            }
            if (maxsum > maxGlobal) {
                maxGlobal = maxsum
                start = tempstart
                end = i
                console.log("i", i)
            }
        }
        console.log("startend", start, end)
        return arr.slice(start, end)
    }

    maxProduct(arr) {
        let maxProduct = 0, maxGlobal = 0, tempStart = 0, start=0, end=0
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i], arr[i]*maxProduct)
            if (arr[i] > arr[i] * maxProduct) {
                maxProduct = arr[i]
                 console.log(maxProduct, "maxproducta[i]")
                tempStart = i
            } else {
                maxProduct = arr[i] * maxProduct
                console.log(maxProduct, "maxproduct")
            }
           
            if (maxProduct > maxGlobal) {
                maxGlobal = maxProduct
                start = tempStart
                end = i
            }
            console.log("start product", start, end, arr[start])
        }
        return arr[start]*arr[end]
    }
}
var k = new Kadanes()
k.maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(k.maxProduct([-2, 0, -1]))