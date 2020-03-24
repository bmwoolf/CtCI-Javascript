// compress a string of repeated characters to their individual letters followed by their respective sequential count

// Time: O(N + C^2) || Space: O(N)
function stringCompressBad (str) {
    let compressed = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            compressed += "" + str.charAt(i) + count;
            count = 0;
        }
    }
    return compressed.length < str.length? compressed : str;
};

// Time: O(N) || Space: O(N)
function stringCompress(str) {
    var compressed = '';
    var char = '';
    var count = '';
    for (let i = 0; i < str.length; i++) {
        // meaning we have to start on a new letter
        if (char !== str[i]) {
            // add on the individual letters to the sequence
            compressed = compressed + char + count;
            var maxCount = Math.max(maxCount, count);
            char = str[i];
            count = 1;
        } else {
            // update the count for that specific letter- remember, they are consecutive
            count++;
        }
    }
    // add on the final update
    compressed = compressed + char + count;
    maxCount = Math.max(maxCount, count);

    return maxCount === 1? str : compressed;
}


console.log('aaaaaa', stringCompressBad('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompressBad('aabcccccaaa'), 'a2b1c5a3');

console.log('aaaaaa', stringCompress('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompress('aabcccccaaa'), 'a2b1c5a3');