/*
    Practice: Deriving Complexity from Code
    Phase 1 — Foundation | Final Topic

    METHOD: For every function, ask —
    1. Are there loops? How many times do they run?
    2. Are loops nested or separate?
    3. Is there recursion? How deep?
    4. Combine: separate = add, nested = multiply
    5. Drop constants, keep dominant term
 */

{
  // PATTERN 1: No loops → O(1)

  function isEven(n) {
    return n % 2 === 0; // arithmetic only → O(1)
  }

  function getMiddle(arr) {
    return arr[Math.floor(arr.length / 2)]; // index access → O(1)
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; // no loop → O(1)
  }

  // Complexity = Time: O(1) | Space: O(1)
}

{
  // PATTERN 2: One loop → O(n)

  function sumAll(arr) {
    let total = 0;
    for (let x of arr) {
      // runs n times → O(n)
      total += x;
    }
    return total;
  }

  // Complexity = Time: O(n) | Space: O(1)
}

{
  // PATTERN 3: Two SEPARATE loops → O(n) + O(n) = O(n)

  function twoLoops(arr) {
    for (let x of arr) console.log(x); // O(n)
    for (let x of arr) console.log(x * 2); // O(n)
    // O(n) + O(n) = O(2n) → drop constant → O(n)
  }

  // Complexity = Time: O(n) | Space: O(1)
}

{
  // PATTERN 4: Nested loops → O(n) × O(n) = O(n²)

  function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      // O(n)
      for (let j = 0; j < arr.length; j++) {
        // O(n) inside
        console.log(arr[i], arr[j]);
      }
    }
    // O(n) × O(n) = O(n²)
  }

  // Complexity = Time: O(n²) | Space: O(1)
}

{
  // PATTERN 5: Halving → O(log n)

  function binarySearch(arr, target) {
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      // range halves each time → O(log n)
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  // Complexity = Time: O(log n) | Space: O(1)
}

{
  // PATTERN 6: Loop + inner O(log n) → O(n log n)

  // Each element → binary search = O(n) × O(log n) = O(n log n)
  function searchEachInSorted(arr, sorted) {
    for (let val of arr) {
      // O(n)
      binarySearch(sorted, val); // O(log n) each time
    }
    // Total: O(n log n)
  }

  // Complexity = Time: O(n log n) | Space: O(1)
}

{
  // DOMINANT TERM RULE

  function mixed(arr) {
    // Part 1: O(n²)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i] + arr[j]);
      }
    }

    // Part 2: O(n)
    for (let x of arr) {
      console.log(x);
    }

    // O(n²) + O(n) → O(n²)  ← n² dominates, n is dropped
  }

  // Complexity = Time: O(n²) | Space: O(1)
}

{
  // DIFFERENT INPUT VARIABLES

  function compareTwo(arrA, arrB) {
    for (let a of arrA) console.log(a); // O(a)
    for (let b of arrB) console.log(b); // O(b)
    // NOT O(n) — two different inputs!
  }
  // Complexity: Time: O(a + b)

  function nestedTwo(arrA, arrB) {
    for (let a of arrA) {
      // O(a)
      for (let b of arrB) {
        // O(b)
        console.log(a, b);
      }
    }
  }
  // Complexity: Time: O(a × b)  — NOT O(n²) unless a === b
}

{
  // RECURSION PATTERNS

  // O(n) recursion — n levels deep, O(1) work per call
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // n frames on call stack
  }
  // Complexity = Time: O(n) | Space: O(n)

  // O(log n) recursion — halves each call
  function binarySearchRecursive(arr, t, l = 0, r = arr.length - 1) {
    if (l > r) return -1;
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === t) return mid;
    if (arr[mid] < t) return binarySearchRecursive(arr, t, mid + 1, r);
    return binarySearchRecursive(arr, t, l, mid - 1);
    // halves each call → log n levels deep
  }
  // Complexity = Time: O(log n) | Space: O(log n)

  // O(2^n) recursion — branches into 2 each call (avoid for large n!)
  function fibNaive(n) {
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2); // 2 branches, n deep
  }
  // Complexity = Time: O(2^n) | Space: O(n)

  // O(n) fibonacci with memoization — fix for O(2^n)
  function fibMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
  }
  // Complexity = Time: O(n) | Space: O(n)
}

/*
 CHEAT SHEET — Patterns to recognize instantly

Code pattern                             Complexity
─────────────────────────────────────────────────────
No loop, no recursion                    O(1)
One loop over n items                    O(n)
Two separate loops over n                O(n)
Loop: n = Math.floor(n/2)                O(log n)
Loop inside a loop                       O(n²)
Three nested loops                       O(n³)
.indexOf() or .includes() inside loop    O(n²) ← trap!
.sort()                                  O(n log n)
Recursive: calls itself once, n deep     O(n)
Recursive: halves each call              O(log n)
Recursive: branches into 2              O(2^n)
Recursive: halves + n work per level    O(n log n)
*/
