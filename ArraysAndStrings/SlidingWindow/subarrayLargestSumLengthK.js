function subarrayLargestSumLengthK(nums, k) {
    let curr = 0;

    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }

    let answer = curr;

    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        answer = Math.max(answer, curr);
    }

    return answer;
}

console.log(subarrayLargestSumLengthK([3,-1,4,12,-8,5,6], 4));