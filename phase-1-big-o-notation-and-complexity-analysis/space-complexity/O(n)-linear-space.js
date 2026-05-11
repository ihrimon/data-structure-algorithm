/*
    O(n) — Linear Space
     Memory grows proportionally with input size
*/

// Example 1: Create a copy — O(n) space
{
  function doubleArray(arr) {
    const result = []; // O(n) — new array grows with input
    for (let x of arr) {
      result.push(x * 2);
    }
    return result;
  }
  // Space: O(n) — 'result' holds n items
  console.log(doubleArray([1, 2, 3])); // [2, 4, 6]
}

// Example 2: Store frequency — O(n) space
{
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
}

// Example 3: arr.map() creates a new array — O(n) space
{
  function squareAll(arr) {
    return arr.map((x) => x * x); // new array of size n
  }
  // Space: O(n)
  console.log(squareAll([1, 2, 3, 4])); // [1, 4, 9, 16]
}

// Example 4: Hash Set for uniqueness — O(n) space
{
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
}


/ ============================================================
// O(n) — Recursive Call Stack Space
// Each recursive call adds a frame to the call stack
// ============================================================

// Example 9: Recursive sum — O(n) stack space
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

// Example 10: Fibonacci — naive O(n) stack space
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // max depth = n frames
}
// Space: O(n) — max depth of call stack
// Time: O(2^n) — very slow without memoization
console.log(fib(10)); // 55

// Example 11: vs iterative Fibonacci — O(1) space
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
