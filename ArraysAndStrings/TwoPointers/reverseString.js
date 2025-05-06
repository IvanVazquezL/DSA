function reverseString(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        left++;
        right--;
    }

    return str;
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
