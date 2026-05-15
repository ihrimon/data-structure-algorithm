/*
    O(log n) — Logarithmic Time Complexity
    Input is halved at each step — extremely efficient
*/

// Example 1: Classic Binary Search
// Requires: sorted array
{
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      // halves the range each iteration
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) return mid; // found
      if (arr[mid] < target)
        left = mid + 1; // search right half
      else right = mid - 1; // search left half
    }

    return -1; // not found
  }

  const sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(binarySearch(sorted, 7)); // 3 (index)
  console.log(binarySearch(sorted, 6)); // -1 (not found)

  // How many steps for n=1,000,000?
  // log₂(1,000,000) ≈ 20 steps only!
}

// Example 2: Binary Search — find insertion position
{
  function searchInsert(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    return left; // position where target would be inserted
  }

  console.log(searchInsert([1, 3, 5, 6], 5)); // 2
  console.log(searchInsert([1, 3, 5, 6], 2)); // 1
  console.log(searchInsert([1, 3, 5, 6], 7)); // 4
}

// Example 3: Power of a number using fast exponentiation
// Instead of multiplying n times (O(n)), halve the problem (O(log n))
function power(base, exp) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) {
    const half = power(base, exp / 2); // halving!
    return half * half;
  }
  return base * power(base, exp - 1);
}

console.log(power(2, 10)); // 1024

// Example 4: Count digits in a number — O(log n)
{
  function countDigits(n) {
    if (n === 0) return 1;
    let count = 0;
    while (n > 0) {
      n = Math.floor(n / 10); // divide by 10 each time (log₁₀)
      count++;
    }
    return count;
  }

  console.log(countDigits(12345)); // 5
  console.log(countDigits(1000)); // 4
}
