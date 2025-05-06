function mergeTwoSortedArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    const arr3 = [];

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            arr3.push(arr1[index1]);
            index1++;
        } else {
            arr3.push(arr2[index2]);
            index2++;
        }
    }

    while (index1 < arr1.length) {
        arr3.push(arr1[index1]);
        index1++;
    }

    while (index2 < arr2.length) {
        arr3.push(arr2[index2]);
        index2++;
    }

    return arr3;
}

console.log(mergeTwoSortedArrays([1, 3, 4, 5], [2, 4, 6, 8]));
console.log(mergeTwoSortedArrays([5, 8, 9], [4, 7, 8]));
