function isSubsequence(s, t) {
    let indexS = 0;
    let indexT = 0;

    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
        }
        
        indexT++;
    }

    return indexS === s.length;
}

console.log(isSubsequence("ace", "abcde"));  // true
console.log(isSubsequence("aec", "abcde"));  // false
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false