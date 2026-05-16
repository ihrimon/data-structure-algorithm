// ============================================================
// Arrays — Core Techniques & Practice Problems
// Phase 2 — Core DSA
// ============================================================

// ============================================================
// TECHNIQUE 1: TWO POINTER
// Use two indices moving toward each other → O(n) instead of O(n²)
// ============================================================

// Reverse array in-place — O(n) time, O(1) space
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Two Sum (sorted array) — O(n) time, O(1) space
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // [1, 3]

// Move Zeroes to end — O(n) time, O(1) space
function moveZeroes(nums) {
  let left = 0; // position for next non-zero

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// Container With Most Water — O(n) time, O(1) space
function maxWater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
}

console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// ============================================================
// TECHNIQUE 2: SLIDING WINDOW
// Maintain a window that slides across the array
// ============================================================

// Maximum sum of k consecutive elements — O(n) time, O(1) space
function maxSumKElements(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Build first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // add new, remove old
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSumKElements([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)

// Longest substring without repeating characters — O(n) time, O(n) space
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicate
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 ("abc")
console.log(lengthOfLongestSubstring('pwwkew')); // 3 ("wke")

// Best Time to Buy and Sell Stock — O(n) time, O(1) space
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // update cheapest buy
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice); // update best profit
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 (no profit possible)

// ============================================================
// TECHNIQUE 3: PREFIX SUM
// Pre-compute cumulative sums for O(1) range queries
// ============================================================

// Range sum query — O(n) build, O(1) query
function buildPrefixSum(arr) {
  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }
  return prefix;
}

function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}

const nums = [1, 2, 3, 4, 5];
const prefix = buildPrefixSum(nums);
console.log(rangeSum(prefix, 1, 3)); // 9 (2+3+4)
console.log(rangeSum(prefix, 0, 4)); // 15 (all)

// Subarray Sum Equals K — O(n) time, O(n) space
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1); // empty subarray
  let prefixSum = 0;
  let count = 0;

  for (let num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2

// Product of Array Except Self — O(n) time, O(1) extra space
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  // Left pass: result[i] = product of all elements left of i
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Right pass: multiply by product of all elements right of i
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// ============================================================
// TECHNIQUE 4: KADANE'S ALGORITHM
// Maximum sum subarray — O(n) time, O(1) space
// ============================================================

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend current subarray or start fresh
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (4,-1,2,1)
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-1, -2, -3])); // -1

// ============================================================
// PRACTICE PROBLEMS
// ============================================================

// 1. Two Sum (unsorted) — O(n) time, O(n) space
function twoSum(nums, target) {
  const map = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// 2. Contains Duplicate — O(n) time, O(n) space
function containsDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false

// 3. Merge Sorted Array — O(m+n) time, O(1) space
// Merge nums2 into nums1 in-place (nums1 has extra space at end)
function merge(nums1, m, nums2, n) {
  let i = m - 1; // pointer for nums1
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // pointer for merged position

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // Copy remaining nums2 elements
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]

// 4. 3Sum — O(n²) time, O(1) space (sort + two pointer)
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]

// ============================================================
// COMPLEXITY SUMMARY
// ─────────────────────────────────────────────────────────────
// Technique        Time       Space    Use When
// ─────────────────────────────────────────────────────────────
// Two Pointer      O(n)       O(1)     pairs, sorted array, reverse
// Sliding Window   O(n)       O(1/n)   subarray/substring problems
// Prefix Sum       O(n)+O(1)  O(n)     range sum queries
// Kadane's         O(n)       O(1)     maximum subarray sum
// HashMap          O(n)       O(n)     two sum, frequency count
// ─────────────────────────────────────────────────────────────
