// #1 
// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

let nonUniqStr = 'myteststr'
let uniqStr = 'asdfgh'

// BCR is gonna be O(N) 
        // We will hae to touch each character at least once
// BCS is gonna be O(1)
        // We shouldn't have to duplicate parts of the str

// make a hash table for characters
// loop through str, adding each character to hash table
// if there is already a value there, then return false
// if we go throuhg entire string without duplicating, return true
// is string only going to contain alpabet characters?
    // do caps count as unique chars?
        // return false if str longer than 26 characters

function checkUniqStr(str) {
    let chars = {}
    chars[str[0]] = str[0]
    for (let i = 1; i < str.length; i++) {
        if (chars[str[i]] !== undefined) {
            console.log(false)
            return false
        }
        chars[str[i]] = str[i] 
    }
    console.log(true)
    return true
}

checkUniqStr('nonUniq:', nonUniqStr)
checkUniqStr('uniq:', uniqStr)


