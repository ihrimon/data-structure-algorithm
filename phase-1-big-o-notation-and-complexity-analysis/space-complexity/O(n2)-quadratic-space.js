/*
    O(n²) — Quadratic Space Complexity
    Nested data structures — space grows as n squared
*/


/

// ✅ Example 11: 2D matrix — O(n²) space
function createMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0); // n rows × n cols
  }
  return matrix;
}
// Space: O(n²) — stores n × n elements
console.log(createMatrix(3));
// [[0,0,0],[0,0,0],[0,0,0]]

// ✅ Example 12: All subsets — O(2^n) space
function getAllSubsets(arr) {
  const result = [[]]; // O(2^n) — number of subsets
  for (let x of arr) {
    const newSubsets = result.map((subset) => [...subset, x]);
    result.push(...newSubsets);
  }
  return result;
}
// Space: O(2^n) — 2^n possible subsets
console.log(getAllSubsets([1, 2, 3]));

// ============================================================
// COMPARISON: Time vs Space tradeoff
// ============================================================

// ❌ Time: O(n²), Space: O(1)
function hasDuplicateSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// ✅ Time: O(n), Space: O(n)  ← trade space for speed
function hasDuplicateFast(arr) {
  const seen = new Set(); // extra O(n) space
  for (let val of arr) {
    if (seen.has(val)) return true;
    seen.add(val);
  }
  return false;
}
// Using extra memory (Set) made the algorithm faster.
// This is the most common DSA tradeoff.

console.log(hasDuplicateSlow([1, 2, 3, 2])); // true — O(n²) time, O(1) space
console.log(hasDuplicateFast([1, 2, 3, 2])); // true — O(n) time,  O(n) space
