function twoNumberSum(array, targetSum) {
 let map=new Map()
  for (let k = 0; k < array.length; k++) {
    let compare=targetSum-array[k]
    console.log("map", map)
    if(map.has(compare)){
      return [map.get(compare), k]
    }
    map.set(array[k], k)
  }
}
console.log(twoNumberSum([4,5,6], 10))