// ============================================================
// Strings — Core Techniques & Practice Problems
// Phase 2 — Core DSA
// ============================================================
// Key fact: JS strings are IMMUTABLE
// To modify: split("") → modify array → join("")
// ============================================================

// ============================================================
// TECHNIQUE 1: CHARACTER FREQUENCY MAP
// ============================================================

function charFrequency(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(charFrequency('hello')); // { h:1, e:1, l:2, o:1 }

// First Unique Character — O(n) time, O(1) space (26 letters max)
function firstUniqChar(s) {
  const freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

console.log(firstUniqChar('leetcode')); // 0 ('l')
console.log(firstUniqChar('aabb')); // -1

// Valid Anagram — O(n) time, O(1) space
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1; // count s
  for (let c of t) {
    if (!freq[c]) return false; // char not in s or used up
    freq[c]--;
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false

// Group Anagrams — O(n·k log k) time where k = max string length
function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const key = str.split('').sort().join(''); // sorted string as key
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return [...map.values()];
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]

// ============================================================
// TECHNIQUE 2: TWO POINTER ON STRINGS
// ============================================================

// Reverse String in-place — O(n) time, O(1) space
function reverseString(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]

// Is Palindrome (basic) — O(n) time, O(1) space
function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

// Is Palindrome (alphanumeric only — interview version)
function isPalindromeClean(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0,
    right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromeClean('A man, a plan, a canal: Panama')); // true
console.log(isPalindromeClean('race a car')); // false

// Longest Palindromic Substring — expand around center — O(n²) time, O(1) space
function longestPalindrome(s) {
  let start = 0,
    maxLen = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLen) {
        maxLen = r - l + 1;
        start = l;
      }
      l--;
      r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // odd length palindromes
    expand(i, i + 1); // even length palindromes
  }

  return s.slice(start, start + maxLen);
}

console.log(longestPalindrome('babad')); // "bab" or "aba"
console.log(longestPalindrome('cbbd')); // "bb"

// ============================================================
// TECHNIQUE 3: SLIDING WINDOW ON STRINGS
// ============================================================

// Longest Substring Without Repeating Characters — O(n) time, O(n) space
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3

// Minimum Window Substring — O(n) time, O(n) space
function minWindow(s, t) {
  if (!s || !t || s.length < t.length) return '';

  const need = {};
  for (let c of t) need[c] = (need[c] || 0) + 1;

  let left = 0,
    formed = 0;
  const required = Object.keys(need).length;
  const window = {};
  let result = '';
  let minLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;
    if (need[c] && window[c] === need[c]) formed++;

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        result = s.slice(left, right + 1);
      }
      const lc = s[left];
      window[lc]--;
      if (need[lc] && window[lc] < need[lc]) formed--;
      left++;
    }
  }
  return result;
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log(minWindow('a', 'a')); // "a"
console.log(minWindow('a', 'aa')); // ""

// ============================================================
// USEFUL STRING UTILITIES
// ============================================================

// Reverse words in a string
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}
console.log(reverseWords('  hello world  ')); // "world hello"

// Check all characters are unique
function allUnique(s) {
  return new Set(s).size === s.length;
}
console.log(allUnique('abcde')); // true
console.log(allUnique('aabcd')); // false

// Count vowels
function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('Hello World')); // 3

// ============================================================
// COMPLEXITY SUMMARY
// ─────────────────────────────────────────────────────────────
// Technique              Time          Space
// ─────────────────────────────────────────────────────────────
// Frequency map          O(n)          O(1) for 26 letters
// Two pointer            O(n)          O(1)
// Sort to compare        O(n log n)    O(n)
// Sliding window         O(n)          O(k) window size
// Expand around center   O(n²)         O(1)
// ─────────────────────────────────────────────────────────────
// Common traps:
//   s + t concatenation in loop → O(n²)! Use array.join("") instead
//   s.includes() inside loop   → O(n²)! Use Set
// ─────────────────────────────────────────────────────────────
