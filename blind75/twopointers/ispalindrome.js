function isPalindrome(s) {
    //In 15
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("")
    let left = 0, right = str.length - 1
    while (left < right) {
        if (str !== " ") {
            if (str[left] == str[right]) {
                left++
                right--
            } else {
                return false
            }
        }
    }
    return true
}

console.log(isPalindrome("tab a cat"))