// =========================================================================== 
// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
// =========================================================================== 

// palindrome, with the given string, can we write forwards and backwards?
// use charMap or hastable to count how many times each character appears
// iterate through hash table and make sure no more than one character has an odd count.
// basically just know if the count is even or odd

// input: string (Tact Coa)
// output: boolean (permutations: "taco cat", "atco cta", etc.)
// time complexity: O(n), "n" is the length of string

function palindrome(str) {
  let clean = str.replace(/\s/g, '').toLowerCase().split('');
  // console.log(clean);
  let charMap = {};
  let unique = 0;

  clean.map(char => {
    charMap[char] = charMap[char] + 1 || 1;
  })
  // console.log(charMap); 
  // {t: 2, a: 2, c: 2, o: 1} for first test
  // {t: 2, a: 2, c: 3, o: 1} for second test (two odd counts)
  // {m: 2, i: 2, e: 2, w: 2, o: 1} for third test

  for (let char in charMap) {
    // console.log(charMap[char]); 
    // 2 2 2 1 for first test
    // 2 2 3 1 for second test
    if (charMap[char] % 2 !== 0) {
      unique += 1; 
      // 0 0 0 1 for first test
      // 0 0 1.5 1 for second test
    }
  }
  // console.log('unique', unique)
  // unqiue is 1 for first test
  // unqiue is 2 for second test

  if (unique > 1) {
    return false
  } else {
    return true;
  }
}

let p1 = palindrome('tact coa'); // true
console.log(p1);

// let p2 =  palindrome('Tact cCoa'); // false
// console.log(p2)

// let p3 = palindrome('mmiieewwo'); // true
// console.log(p3) 