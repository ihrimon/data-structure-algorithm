# Practice: Deriving Complexity from Code

> **Phase 1 — Foundation | Final Topic**  
> This is the most practical skill. Read any code and instantly know its complexity.

---

## The 5-Step Method

Every time you see a piece of code, walk through these steps in order:

```
Step 1 → Find all loops. How many times does each run?
Step 2 → Are loops nested or separate?
Step 3 → Find any recursion. How deep is the call stack?
Step 4 → Combine: separate = add, nested = multiply
Step 5 → Drop constants, keep the dominant term
```

---

## Step 1: No Loops → O(1)

If there are no loops and no recursion, it is O(1).

```js
function isEven(n) {
  return n % 2 === 0;          // arithmetic → O(1)
}

function getMiddle(arr) {
  return arr[Math.floor(arr.length / 2)]; // index access → O(1)
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];   // no loop → O(1)
}
```

**Complexity: O(1)**

---

## Step 2: One Loop → O(n)

A single loop over n items = O(n).

```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {  // runs n times
    console.log(arr[i]);
  }
}
```

**Complexity: O(n)**

---

## Step 3: Two Separate Loops → O(n)

Separate loops ADD. O(n) + O(n) = O(2n) → **O(n)** (drop the constant 2).

```js
function twoLoops(arr) {
  for (let x of arr) console.log(x);    // O(n)
  for (let x of arr) console.log(x*2); // O(n)
  // Total: O(n) + O(n) = O(2n) = O(n)
}
```

**Complexity: O(n)**

---

## Step 4: Nested Loops → O(n²)

Nested loops MULTIPLY. O(n) × O(n) = **O(n²)**.

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {     // O(n)
    for (let j = 0; j < arr.length; j++) {   // O(n)
      console.log(arr[i], arr[j]);
    }
  }
  // Total: O(n) × O(n) = O(n²)
}
```

**Complexity: O(n²)**

---

## Step 5: Halving Each Step → O(log n)

If the input or range is halved at each step, it is O(log n).

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {              // halves each iteration
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

**Complexity: O(log n)**

---

## Step 6: Loop + Halving → O(n log n)

An outer O(n) loop that does O(log n) work inside = **O(n log n)**.

```js
// Merge Sort: splits (log n levels) × merges (n work per level)
// Time: O(n log n) — the most common "efficient sort" complexity
```

---

## The Dominant Term Rule

When you combine complexities, only the **dominant (fastest-growing) term** survives.

```js
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

  // Total: O(n²) + O(n) → O(n²)  ← n² dominates
}
```

**Dominant term wins:**

| Combined | Simplifies to |
|---|---|
| O(n²) + O(n) | O(n²) |
| O(n) + O(log n) | O(n) |
| O(n³) + O(n²) + O(n) | O(n³) |
| O(2n) + O(50) | O(n) |

---

## Different Input Variables

When a function takes two separate inputs, use different variable names.

```js
// ❌ Wrong — assuming both arrays are size n
function compareTwoArrays(arrA, arrB) {
  for (let a of arrA) console.log(a);  // O(a)
  for (let b of arrB) console.log(b);  // O(b)
}
// Correct complexity: O(a + b), NOT O(n)

// ❌ Wrong nested case
function nestedDifferent(arrA, arrB) {
  for (let a of arrA) {
    for (let b of arrB) {
      console.log(a, b);
    }
  }
}
// Correct complexity: O(a × b), NOT O(n²)
```

---

## Recognizing Recursion

For recursive functions, ask: **how many times does it call itself × how much work per call?**

```js
// Factorial — calls itself n times, O(1) work each time
// Total: O(n)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);  // n levels deep
}

// Fibonacci (naive) — branches into 2 calls, n levels deep
// Total: O(2^n) — exponential, very slow
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);  // 2 branches × n deep
}

// Binary search (recursive) — halves each time, O(1) work each call
// Total: O(log n)
function binarySearch(arr, t, l = 0, r = arr.length - 1) {
  if (l > r) return -1;
  const mid = Math.floor((l + r) / 2);
  if (arr[mid] === t) return mid;
  if (arr[mid] < t) return binarySearch(arr, t, mid + 1, r);
  return binarySearch(arr, t, l, mid - 1);
}
```

---

## Practice Problems — Derive the Complexity

Work through each one before checking the answer.

---

### Problem 1

```js
function A(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
  }
  for (let j = 0; j < n; j++) {
    count++;
  }
  return count;
}
```

<details>
<summary>Answer</summary>

**O(n)**

Two separate loops: O(n) + O(n) = O(2n) → drop constant → **O(n)**

</details>

---

### Problem 2

```js
function B(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

<details>
<summary>Answer</summary>

**O(n²)**

Nested loops. Inner loop starts at i+1 (not 0), so it runs (n-1) + (n-2) + ... + 1 = n(n-1)/2 times → drops to **O(n²)**

</details>

---

### Problem 3

```js
function C(n) {
  let i = n;
  while (i > 1) {
    i = Math.floor(i / 2);
  }
}
```

<details>
<summary>Answer</summary>

**O(log n)**

`i` is halved each iteration. The loop runs log₂(n) times → **O(log n)**

</details>

---

### Problem 4

```js
function D(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}
```

<details>
<summary>Answer</summary>

**Time: O(n²) | Space: O(n²)**

Nested loops = O(n²) time. The result array stores n² pairs = O(n²) space.

</details>

---

### Problem 5

```js
function E(arr) {
  const map = new Map();

  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  for (let [key, count] of map) {
    if (count > 1) return true;
  }

  return false;
}
```

<details>
<summary>Answer</summary>

**Time: O(n) | Space: O(n)**

Two separate loops (not nested): O(n) + O(n) = O(n) time.  
HashMap stores up to n entries = O(n) space.

</details>

---

### Problem 6 — Tricky

```js
function F(arr) {
  for (let i = 0; i < arr.length; i++) {
    const idx = arr.indexOf(arr[i] * 2);  // ← what is this?
    if (idx !== -1) return true;
  }
  return false;
}
```

<details>
<summary>Answer</summary>

**O(n²)**

The outer loop is O(n). But `arr.indexOf()` inside is also O(n) — it scans the array each time.  
O(n) × O(n) = **O(n²)**

**Fix:** Use a Set → O(n) total.

```js
function F_fixed(arr) {
  const set = new Set(arr);          // O(n)
  for (let val of arr) {             // O(n)
    if (set.has(val * 2)) return true; // O(1)
  }
  return false;
}
// Time: O(n) | Space: O(n)
```

</details>

---

### Problem 7 — Recursion

```js
function G(n) {
  if (n <= 0) return 0;
  return G(n - 1) + G(n - 1);
}
```

<details>
<summary>Answer</summary>

**O(2^n)**

Each call makes 2 recursive calls. The tree doubles at every level with n levels deep.  
Total calls = 2⁰ + 2¹ + 2² + ... + 2ⁿ = **O(2^n)** — exponential.

This is the naive Fibonacci pattern. Avoid this for large n — use memoization instead.

</details>

---

## Quick Reference: Patterns to Recognize

| Code pattern | Complexity |
|---|---|
| No loop, no recursion | O(1) |
| `for i in range(n)` | O(n) |
| Two separate loops | O(n) |
| `while (n > 1) n = n/2` | O(log n) |
| Loop inside a loop | O(n²) |
| Three nested loops | O(n³) |
| `.indexOf()` / `.includes()` inside a loop | O(n²) — trap! |
| `.sort()` | O(n log n) |
| Recursive: calls itself twice | O(2^n) |
| Recursive: halves the input | O(log n) |
| Recursive: halves, does n work | O(n log n) |

---

## Checklist

- [ ] Identify O(1) — no loops, direct access
- [ ] Identify O(n) — single loop or two separate loops
- [ ] Identify O(log n) — input halved each step
- [ ] Identify O(n²) — nested loops
- [ ] Apply the dominant term rule correctly
- [ ] Use different variables for different input sizes
- [ ] Spot the hidden O(n) trap: `.indexOf()` / `.includes()` inside loops
- [ ] Derive complexity for recursive functions
- [ ] Solve all 7 practice problems above without looking at answers

---

## Phase 1 Complete ✅

You have now covered all four Phase 1 topics:

| Topic | Status |
|---|---|
| Time Complexity: O(1), O(n), O(log n), O(n²) | ✅ |
| Space Complexity | ✅ |
| Best, Average & Worst Case | ✅ |
| Deriving Complexity from Code | ✅ |

**Next:** [Phase 2 — Core DSA: Arrays & Strings](../../phase-2-core/arrays/README.md)

---

*Phase 1 — Foundation complete. Commit your progress to GitHub.*