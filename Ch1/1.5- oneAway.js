// can edit strings by removing, adding, or replacing- check if a string is one edit or zero edits away

// need to check if the strings are the same, if so they are 0 edits away- can we do all 3 checks in a single pass?
// we care most about the lengths of the strings

// 1- easier to read
// Time: O(N) || Space: O(1)
function oneAway(str1, str2) {
    if (str1.length === str2.length) {
        return oneReplace(str1, str2); // means that we need to check if there is a replacement needed
    } else if (str1.length + 1 === str2.length) {
        // meaning str1 is longer than str2
        return oneInsert(str1, str2);
    } else if (str1.length - 1 === str2.length){
        // meaning that str2 is longer
        return oneInsert(str2, str1); // send in the larger string as the first parameter
    }
    return false;
};  

// can i find a difference in the strings that makes them the same?
function oneReplace (str1, str2) {
    let foundDifference = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
};

// can i insert a character into str1 to make str2?
function oneInsert(str1, str2) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < str2.length && index1 < str1.length) {
        if (str1.charAt(index1) !== str2.charAt(index2)) {
            if (index1 !== index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); //true 
console.log(oneAway('pale', 'bake')); // false


// 2- more compact, doesn't duplicate code
// Time: O(N) || Space: O(1)
function combinedOneAway (str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }
    
    var shorter, longer; // need to use var so we can access these from the if/else blocks
    if (str1.length === str2.length) {
        shorter = str1;
        longer = str2;
    } else {
        // what if they are the same length?
        shorter = str1.length < str2.length? str1 : str2;
        longer = str1.length > str2.length? str1 : str2;
    }

    let index1 = 0;
    let index2 = 0;
    // variable to track if we have found one difference in the strings
    let foundDifference = false;
    while (index2 < longer.length && index1 < shorter.length) {
        if (shorter.charAt(index1) !== longer.charAt(index2)) {
            // if this is the first difference found
            if (foundDifference) {
                return false;
            }
            foundDifference = true;

            if (shorter.length == longer.length) {
                index1++;
            }
        } else {
            index1++; // if matching, move shorter pointer
        }
        index2++; // always move pointer for longer string
    }
    return true;
}

console.log(combinedOneAway('pale', 'ple')); // true
console.log(combinedOneAway('pales', 'pale')); // true
console.log(combinedOneAway('pale', 'bale')); //true 
console.log(combinedOneAway('pale', 'bake')); // false