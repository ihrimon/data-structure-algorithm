/*
    O(n²) — Quadratic Time Complexity
    Nested loops — time grows as n squared
*/

// Example 1: Bubble Sort (classic O(n²))
{
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      // outer loop: n times
      for (let j = 0; j < n - 1 - i; j++) {
        // inner loop: ~n times
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        }
      }
    }
    return arr;
  }

  console.log(bubbleSort([5, 3, 8, 1, 4])); // [1, 3, 4, 5, 8]
}

// Example 2: Selection Sort — O(n²)
{
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      // outer loop: n times
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        // inner loop: n times
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
  }

  console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
}

{
  // ❌ O(n²) problem: Check all pairs for duplicate
  function hasDuplicateSlow(arr) {
    for (let i = 0; i < arr.length; i++) {
      // O(n)
      for (let j = i + 1; j < arr.length; j++) {
        // O(n)
        if (arr[i] === arr[j]) return true; // total: O(n²)
      }
    }
    return false;
  }

  // O(n) solution: Use a Set instead
  function hasDuplicateFast(arr) {
    const seen = new Set();
    for (let val of arr) {
      // O(n)
      if (seen.has(val)) return true;
      seen.add(val);
    }
    return false;
  }

  console.log(hasDuplicateSlow([1, 2, 3, 2])); // true — O(n²)
  console.log(hasDuplicateFast([1, 2, 3, 2])); // true — O(n)
}

// Example 3: Print all pairs (legitimately O(n²))
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`); // n × n = n² pairs
    }
  }
}

printAllPairs([1, 2, 3]);
// (1,1) (1,2) (1,3) (2,1) (2,2) (2,3) (3,1) (3,2) (3,3)

// Example 4: Two Sum — brute force vs optimized
// Brute force: O(n²)
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

// Optimized: O(n) using HashMap
function twoSumFast(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSumBrute([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumFast([2, 7, 11, 15], 9)); // [0, 1]

// Example 5: Matrix operations — O(n²) is sometimes unavoidable
function printMatrix(matrix) {
  for (let row of matrix) {
    // n rows
    for (let cell of row) {
      // n columns
      process.stdout.write(cell + ' ');
    }
    console.log();
  }
}

printMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
 