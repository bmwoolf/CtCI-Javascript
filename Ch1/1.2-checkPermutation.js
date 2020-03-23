// given two strings, find if one string is a permutation of the other

// sort the strings then see if they are equal
// Time: O(N) || Space: O(N)
function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    } 
    // check if they are not strings
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }
    // do the logic
    else {
        let sortedStr1 = str1.split('').sort().join('');
        let sortedStr2 = str2.split('').sort().join('');
        if (sortedStr1 === sortedStr2) {
            return true;
        }
    }
    return false;
}

console.log(checkPermutation('sadf', 'fdas')); // true
console.log(checkPermutation('x', 'y')); // false
console.log(checkPermutation(1, 0)); // false