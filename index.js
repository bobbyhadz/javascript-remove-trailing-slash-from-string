// EXAMPLE 1 - Remove a Trailing Slash from a String in JavaScript

function removeTrailingSlash(str) {
  return str.replace(/\/+$/, '');
}

// 👇️ "bobbyhadz.com"
console.log(removeTrailingSlash('bobbyhadz.com/'));

// 👇️ "bobbyhadz.com"
console.log(removeTrailingSlash('bobbyhadz.com///'));

// 👇️ "bobbyhadz.com"
console.log(removeTrailingSlash('bobbyhadz.com'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove a trailing slash from a String using `String.endsWith()`

// function removeTrailingSlash(str) {
//   return str.endsWith('/') ? str.slice(0, -1) : str;
// }

// // 👇️ "bobbyhadz.com"
// console.log(removeTrailingSlash('bobbyhadz.com/'));
// // 👇️ "bobbyhadz.com"
// console.log(removeTrailingSlash('bobbyhadz.com'));
