// find the point of rotation- basically if one of the strings is a substring of another

// Time: O(N) || Space: O
function isRotation(str1, str2) {
    let str1Length = str1.length;

    // check that they are not empty strings
    if (str1Length == str2.length && str1Length > 0) {
        // basically double the longer string and see if it includes the smaller one- like in the cs challenge
        let str1Double = str1 + str1;
        return str1Double.includes(str2);
    }
    return false;
}

console.log(isRotation('waterbottle', 'erbottlewat')); // true
console.log(isRotation('waterbottle', 'terbottwale')); // false