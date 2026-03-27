fun reverse(input: String): String {
    var chars = input.toCharArray()
    var i = 0
    var j = chars.lastIndex

    while(i<j){
        var temp = chars[i]
        chars[i] = chars[j]
        chars[j] = temp
        i++
        j--
    }
    return String(chars)
}
