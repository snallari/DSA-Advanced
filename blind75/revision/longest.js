function lengthOfLongestSubstring(s) {
        //variable sliding window
        let left=0 , map=new Map(), max=0
        for(let right=0; right<s.length; right++){
            console.log("map", map)
            if(map.has(s[right])){
                console.log("left", left, map.get(s[right]))
                left = Math.max(left, map.get(s[right]));
            }
            map.set(s[right],right)
            max = Math.max(max, right-left+1)
            console.log("max",  max)
        }
        return max
    }

lengthOfLongestSubstring("pwwkew")