/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const missingSub = target - nums[i];
        const missingSum = target + nums[i];

        if (map.has(missingSum)) {
            return [map.get(missingSum).index, i]
        }

        if (map.has(missingSub)) {
            return [map.get(missingSub).index, i]
        }

        map.set(nums[i], { index: i, value: nums[i] });
    }
};

twoSum([3, 2, 95, 4, -3], 92)