function findMaxAverage(nums, k) {
    let curr = 0;

    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }

    let answer = curr / k;

    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        answer = Math.max(answer, curr / k);
    }

    return answer;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));