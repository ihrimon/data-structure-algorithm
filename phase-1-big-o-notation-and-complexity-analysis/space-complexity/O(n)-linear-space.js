/*
    O(n) — Linear Time Complexity
    Time grows proportionally with input size
*/

// ============================================================
// O(n) — Linear Space
// Memory grows proportionally with input size
// ============================================================

// ✅ Example 5: Create a copy — O(n) space
function doubleArray(arr) {
  const result = []; // O(n) — new array grows with input
  for (let x of arr) {
    result.push(x * 2);
  }
  return result;
}
// Space: O(n) — 'result' holds n items
console.log(doubleArray([1, 2, 3])); // [2, 4, 6]

// ✅ Example 6: Store frequency — O(n) space
function countFrequency(arr) {
  const map = new Map(); // O(n) — stores up to n unique keys
  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  return map;
}
// Space: O(n)
console.log(countFrequency([1, 2, 2, 3, 1]));
// Map { 1 => 2, 2 => 2, 3 => 1 }

// ✅ Example 7: arr.map() creates a new array — O(n) space
function squareAll(arr) {
  return arr.map((x) => x * x); // new array of size n
}
// Space: O(n)
console.log(squareAll([1, 2, 3, 4])); // [1, 4, 9, 16]

// ✅ Example 8: Hash Set for uniqueness — O(n) space
function removeDuplicates(arr) {
  const seen = new Set(); // O(n) — up to n items
  const result = [];
  for (let val of arr) {
    if (!seen.has(val)) {
      seen.add(val);
      result.push(val);
    }
  }
  return result;
}
// Space: O(n)
console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]

// ============================================================
// O(n) — Recursive Call Stack Space
// Each recursive call adds a frame to the call stack
// ============================================================

// ✅ Example 9: Recursive sum — O(n) stack space
function recursiveSum(n) {
  if (n <= 0) return 0; // base case
  return n + recursiveSum(n - 1); // adds 1 frame per call
}
// Space: O(n) — n frames on the call stack at once
//   recursiveSum(5)
//     recursiveSum(4)
//       recursiveSum(3)
//         recursiveSum(2)
//           recursiveSum(1)
//             recursiveSum(0) ← base case
console.log(recursiveSum(5)); // 15

// ✅ Example 10: Fibonacci — naive O(n) stack space
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // max depth = n frames
}
// Space: O(n) — max depth of call stack
// Time: O(2^n) — very slow without memoization
console.log(fib(10)); // 55

// ✅ vs iterative Fibonacci — O(1) space
function fibIterative(n) {
  if (n <= 1) return n;
  let prev = 0,
    curr = 1; // O(1) — just two variables
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
// Space: O(1) — no call stack growth
console.log(fibIterative(10)); // 55

// ============================================================
// O(n²) — Quadratic Space (rare but exists)
// ============================================================

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

/*
  SUMMARY TABLE
  ======================
  
  O(n) space:
   - Creating a new array/object/Map/Set of size n
   - arr.map(), arr.filter(), arr.slice() → new arrays
    - Recursive functions (n frames on call stack)
    - Storing results in a growing data structure
 O(n²) space:
   - 2D matrix of size n×n
  - Storing all pairs
*/
