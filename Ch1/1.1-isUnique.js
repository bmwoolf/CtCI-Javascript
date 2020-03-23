// determine if a string has all unique characters- without using an additional data structure

// Time: O(n) | Space: O(n)
const isUnique = (str) => {
    if (str.length > 128) { // meaning that there is no way it can be greater in ASCII
        return false;
    }
    // create an array to store boolean values
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        // charAt means
        let value = str.charAt(i);
        // if we come across a true, we return false
        if (arr[value]) {
            return false;
        }
        arr[value] = true;
    } 
    return true;
}

// use bit vectoring when you have a MASSIVE array of booleans
// Time: O(n^2) | Space: O(1)
const isUniqueBitVector = (str, indexOffset = 'a'.charCodeAt()) => {
    let counterTable = Number();
    for (let index of [...str].map(char => char.charCodeAt() - indexOffset)) {
        const mask = 1 << index;
        if (counterTable & mask) {
            return false;
        }
        counterTable |= mask;
    }
    return true;
}
