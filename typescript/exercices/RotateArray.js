var rotate = function (nums, k) {
    function reverse(nums, i, j) {
        let li = i;
        let ri = j;

        while (li < ri) {
            const temp = nums[li];
            nums[li] = nums[ri];
            nums[ri] = temp;

            li++;
            ri--;
        }
    }

    k = k % nums.length;
    if (k < 0) {
        k += nums.length;
    }

    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));
console.log(rotate([-1,-100], 3));