/* 
  Space Complexity — How much MEMORY does use in code?
  Space complexity measures the extra memory an algorithm
  uses as input size (n) grows. Same Big-O rules apply.
*/

/* 
  O(1) — Constant Space
  Memory usage does NOT grow with input size
*/

// Example 1: Find sum — only uses one extra variable
{
  function sumArray(arr) {
    let total = 0; // O(1) — single variable, no new array
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  // Space: O(1) — 'total' is fixed regardless of arr size
  console.log(sumArray([1, 2, 3, 4, 5])); // 15
}

// Example 2: Find maximum — O(1) space
{
  function findMax(arr) {
    let max = arr[0]; // O(1) — just one variable
    for (let x of arr) {
      if (x > max) max = x;
    }
    return max;
  }
  // Space: O(1)
  console.log(findMax([3, 7, 1, 9, 4])); // 9
}

// Example 3: Two pointer — O(1) space
{
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1; // O(1) — only two pointers
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  // Space: O(1) — no new string or array created
  console.log(isPalindrome('racecar')); // true
  console.log(isPalindrome('hello')); // false
}

// Example 4: In-place reverse — O(1) space
{
  function reverseInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
      left++;
      right--;
    }
    return arr;
  }
  // Space: O(1) — modifies original array, no extra memory
  console.log(reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
}

/*
  SUMMARY TABLE
  ======================
  
  O(1) space:
    - Using a fixed number of variables (let x, let i, let j)
    - Two pointer technique
    - In-place swapping
    - Iterative solutions with no extra array
*/
