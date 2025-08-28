function subarray(str){
    let split=str.split('')
    let i=0, j=0, max=0, set=new Set()
    while(j<split.length){
        if(!set.has(split[j])){
            set.add(split[j])
            j++
        }else{
            set.delete(split[i])
            i++
        }
        console.log(i,j)
        max=Math.max(max,j-i)
        console.log("max",  max)
    }
    return split.slice(i,j)
}

console.log(subarray("aabacbebebe"))
