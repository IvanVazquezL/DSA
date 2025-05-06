function isPalindrome(str) {
    const alphanumeric = str
        .split('')                           
        .filter(char => isAlphanumeric(char))
        .map(char => char.toLowerCase())     
        .join('');  
    let left = 0;
    let right = alphanumeric.length - 1;

    while (left < right) {
        if (alphanumeric[left] !== alphanumeric[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphanumeric(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
