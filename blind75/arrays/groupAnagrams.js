export function groupAnagrams(strs){
    let obj={}
    for(let str of strs){
        let word=str.split("").sort().join("")
        console.log("word",word)
        if(!obj[word]){
            obj[word]=[]
        }
        obj[word].push(str)
        console.log("obj", obj)
    }
    return Object.values(obj)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))