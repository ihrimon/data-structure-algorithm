/*
    O(1) — Constant Time Complexity
    Time does NOT change with input size
*/

// Example 1: Array index access
{
  function getFirst(arr) {
    return arr[0]; // always 1 step, no matter how big the array is
  }

  function getLast(arr) {
    return arr[arr.length - 1]; // still O(1)
  }

  console.log(getFirst([10, 20, 30, 40])); // 10
  console.log(getLast([10, 20, 30, 40])); // 40
}

// Example 2: HashMap (Map) get and set
{
  function hashMapExample() {
    const map = new Map();

    map.set('name', 'Rimon'); // O(1)
    map.set('age', 25); // O(1)

    console.log(map.get('name')); // O(1) — direct lookup
    console.log(map.has('age')); // O(1)
  }

  hashMapExample();
}

// Example 3: Math formula (no loop)
{
  function sumFormula(n) {
    return (n * (n + 1)) / 2; // O(1) — just math, no iteration
  }

  console.log(sumFormula(100)); // 5050
  console.log(sumFormula(1000)); // 500500
}

// Example 4: Stack push / pop
{
  function stackExample() {
    const stack = [];
    stack.push(1); // O(1) — add to end
    stack.push(2); // O(1)
    stack.pop(); // O(1) — remove from end
    console.log(stack);
  }

  stackExample();
}

// Example 5: Object property access
function objectAccess(obj) {
  return obj.name; // O(1)
}

console.log(objectAccess({ name: 'Rimon', age: 30 })); // "Rimon"

// Example 6: Swap two variables
{
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; // O(1) — no loop
  }

  const arr = [5, 3, 8, 1];
  swap(arr, 0, 2);
  console.log(arr); // [8, 3, 5, 1]
}

// ============================================================
// SUMMARY
// ============================================================
// O(1) operations:
//   arr[i]           → index access
//   map.get(key)     → HashMap lookup
//   map.set(key, v)  → HashMap insert
//   arr.push(x)      → add to end of array
//   arr.pop()        → remove from end
//   obj.property     → object access
//   Math formula     → no loop, just calculation
// ============================================================
