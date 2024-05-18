export default function BinarySearch(
  haystack: number[],
  needle: number,
): number {
  let high = haystack.length;
  let low = 0;

  for (let i = 0; i < haystack.length; i++) {
    let mid = Math.floor(low + (high - low) / 2);
    let value = haystack[mid];

    if (value === needle) {
      return mid;
    }

    if (value > needle) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
