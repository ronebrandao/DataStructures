export default function LargestSum(arr: number[]): number {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(LargestSum([-2, -3, 4, -1, -2, 1, 5, -3]));
