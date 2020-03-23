// given a string, find out if it is a permutation of a palindrome

// hints: do not generate all possible permutations, use an object, use bit vectoring
// we need an even number of the same letters, can have one odd letter- we only care about the final count

// Time: O(N) || Space: O(N)
function isPalinPerm (str) {
    if (typeof str !== 'string') {
        return false;
    }
    // essentially implement a set from scratch
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        // if the current character is not in the obj
        if (!(str.charAt(i) in obj)) {
            obj[str.charAt(i)] = true; // just give it a filler value of true
        } else {
            delete obj[str.charAt(i)];
        }
    }
    // return if the obj keys have a length of 1 or 0
    return Object.keys(obj).length === 0 || Object.keys(obj).length === 1;
}

console.log(isPalinPerm('asddsaf')); // true
console.log(isPalinPerm('asdjio')); // false
console.log(isPalinPerm(98)); // false