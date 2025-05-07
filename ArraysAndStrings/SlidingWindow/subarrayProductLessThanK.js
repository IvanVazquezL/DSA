function subarrayProductLessThanK(nums, k) {
    if (k <= 1) return 0;

    let left = 0;
    let curr = 1;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right];

        while (curr >= k) {
            curr /= nums[left];
            left++;
        }

        answer += right - left + 1;
    }

    return answer;
}

console.log(subarrayProductLessThanK([10, 5, 2, 6], 100));