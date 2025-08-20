const longest=(n)=>{
    let s=n.split("")
    let i=0,j=0, max=0
    let setval=new Set()
    while(j<s.length){
        if(!setval.has(s[j])){
            setval.add(s[j])
            j++
        }else{
            setval.delete(s[i])
            i++
        }
        max=Math.max(max,j-i)
        console.log(setval, i, j, s[i], s[j], "max", max)
        /*j=0 add a, j=1 add b, j=2 add c, j=3 set has the val, so delete s[i] which is 0, i=2, now bca, j=4 delete i=3 cab*/
    }
    return max;
}

longest("abcabcbb")