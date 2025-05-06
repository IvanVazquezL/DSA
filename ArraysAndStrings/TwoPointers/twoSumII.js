function twoSumII(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [ left + 1, right + 1 ];
        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(twoSumII([2,7,11,15], 9));
console.log(twoSumII([2,3,4], 6));
console.log(twoSumII([-1,0], -1));