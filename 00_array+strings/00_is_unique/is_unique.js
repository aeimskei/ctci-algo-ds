// =========================================================================== 
// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// =========================================================================== 

// Use the Set object lets you store unique values of any type, whether primitive values or object references.

// input: string
// output: boolean
// time complexity: O(n) where "n" is the length of string
// space complecity: O(1)

function isUnique(str) {
  let set = new Set(str);
  // console.log(set);
  // {"a", "b", "c", "d", "e", …} or ["a", "b", "c", "d", "e", "g", "g"]
  if (set.size === str.length) {
    return true;
  } else {
    return false
  }
  // one liner without if-statement
  // return set.size === str.length;
}


let u1 = isUnique('abcdefgg'); 
console.log(u1);

let u2 = isUnique('abcdefg'); 
console.log(u2);

let u3 = isUnique('AaBbCcDdeFg1234567890(*&^%$#@!)'); 
console.log(u3);

let u4 = isUnique('!@#$%^&*()(*#($&#(*$&#*($&#()))))');
console.log(u4);