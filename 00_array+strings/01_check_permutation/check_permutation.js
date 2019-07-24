// =========================================================================== 
//1.2 Check Permutation: Given two strings, write a methods to decide if one is a permutation of the other. 
// =========================================================================== 

// A permutation is the ability to rearrange the given strings in different variations. Pay attention to the length of input strings.
// ex.) god dog

// first, check if length are the same, if not return false
// split string into array then, 
// sort and compare characters

// input: two strings
// output: boolean
// edge: strings with different sizes cannot be permutations, case and symbol sensitive

function checkPermutation(str1, str2) {
  // handle if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  let charMap = {};
  let arr1 = str1.split(''); // ["a", "b", "c"]
  let arr2 = str2.split(''); // ["c", "b", "a"]
  
  // increment through first string
  arr1.map(char => {
    charMap[char] = charMap[char] + 1 || 1;
  })
  // console.log(charMap); // {a: 1, b: 1, c: 1} on first test

  // decrement through second string
  arr2.map(char => {
    if (charMap[char] > 1) {
      charMap[char] = charMap[char] - 1;
    } else {
      delete charMap[char];
    }
  })
  // console.log(charMap) // {a: 0, b: 0, c: 0} on first test 

  if (Object.keys(charMap).length === 0) {
    return true;
  } else {
    return false;
  }
}

let p1 =  checkPermutation('abc', 'cba'); 
console.log(p1); // true

// let p2 = checkPermutation('dog', 'god');
// console.log(p2);

// let p3 = checkPermutation('cat', 'fat');
// console.log(p3); // false
