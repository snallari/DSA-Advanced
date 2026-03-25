export function isAnagram(st,tt){
    if(st.length!==tt.length){
        return false
    }
    let s=st.toLowerCase().split('')
    let t=tt.toLowerCase().split('')
    let obj={}
    for(let i=0;i<s.length;i++){
       obj[s[i]]=obj[s[i]]||0+1
    }
    console.log("obj", obj)

    for(let i=0; i<t.length;i++){
        if(obj[t[i]]){
            obj[t[i]]=obj[t[i]]-1
        }else{
            console.log("obj", obj)
            return false
        }
    }

    return true
}

console.log(isAnagram("dog", "god"))