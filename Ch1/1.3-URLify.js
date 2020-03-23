// replace all spaces in a string with '%20'

// it's easiest to start at the end of a string and decrement to change strings
// Time: O(N) || Space: O(N)
function URLify(str) { 
    if (typeof str !== 'string') {
        return false;
    }
    let spaced = str.split('');
    for (let i = spaced.length - 1; i >= 0; i--) {
        if (spaced[i] == ' ') {
            spaced[i] = '%20';
        }
    }
    return spaced.join('');
}

console.log(URLify('hel l o  '));
console.log(URLify(1));
console.log(URLify('    '));