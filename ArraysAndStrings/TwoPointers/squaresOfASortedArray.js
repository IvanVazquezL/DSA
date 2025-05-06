function squaresOfASortedArray(arr) {
    const result = new Array(arr.length);
    let left = 0;
    let right = arr.length - 1;
    let pos = arr.length - 1;

    while (left <= right) {
        const squareLeft = arr[left] * arr[left];
        const squareRight = arr[right] * arr[right];

        if (squareLeft > squareRight) {
            result[pos] = squareLeft;
            left++;
        } else {
            result[pos] = squareRight;
            right--;
        }

        pos--;
    }

    return result;
}

console.log(squaresOfASortedArray([-4,-1,0,3,10]));
console.log(squaresOfASortedArray([-7,-3,2,3,11]));