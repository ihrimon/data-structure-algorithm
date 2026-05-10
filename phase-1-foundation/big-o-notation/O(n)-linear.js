// ============================================================
// O(n) — Linear Time Complexity
// Time grows proportionally with input size
// ============================================================

// ✅ Example 1: Find maximum value (single loop)
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // loops n times
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax([3, 7, 1, 9, 4])); // 9

// ✅ Example 2: Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // worst case: n steps
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([5, 2, 8, 1, 9], 8)); // 2
console.log(linearSearch([5, 2, 8, 1, 9], 7)); // -1

// ✅ Example 3: Two separate loops = O(n) + O(n) = O(2n) = O(n)
function twoSeparateLoops(arr) {
  // Loop 1: n steps
  for (let x of arr) {
    console.log(x);
  }

  // Loop 2: n steps
  for (let x of arr) {
    console.log(x * 2);
  }
  // Total = 2n → still O(n) because constants are dropped
}

// ✅ Example 4: Sum of all elements
function sumAll(arr) {
  let total = 0;
  for (let num of arr) {
    // n iterations
    total += num;
  }
  return total;
}

console.log(sumAll([1, 2, 3, 4, 5])); // 15

// ✅ Example 5: Reverse an array
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // n steps
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// ✅ Example 6: Count occurrences using HashMap (O(n))
function countFrequency(arr) {
  const freq = new Map();
  for (let val of arr) {
    // n iterations
    freq.set(val, (freq.get(val) || 0) + 1);
  }
  return freq;
}

console.log(countFrequency([1, 2, 2, 3, 1, 1]));
// Map { 1 => 3, 2 => 2, 3 => 1 }

// ❌ Common misconception: .includes() inside a loop
// This looks like one line but is actually O(n²)
function badHasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).includes(arr[i])) return true; // .includes() = O(n) inside O(n) loop!
  }
  return false;
}

// ✅ Better version using Set — O(n)
function hasDuplicate(arr) {
  const seen = new Set();
  for (let val of arr) {
    // O(n)
    if (seen.has(val)) return true; // O(1)
    seen.add(val); // O(1)
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 2])); // true
console.log(hasDuplicate([1, 2, 3, 4])); // false

// ============================================================
// BUILT-IN JS METHODS THAT ARE O(n):
//   arr.map(fn)       → transforms every element
//   arr.filter(fn)    → filters elements
//   arr.find(fn)      → searches until found
//   arr.includes(x)   → scans from start
//   arr.forEach(fn)   → visits every element
//   arr.reduce(fn)    → accumulates over all elements
//   arr.indexOf(x)    → linear scan
//   [...arr]          → spread operator copies all elements
// ============================================================
