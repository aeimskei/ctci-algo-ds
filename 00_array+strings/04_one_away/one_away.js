// =========================================================================== 
//1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// =========================================================================== 

// what does it mean for two strings to be one insertion, replacement, or removal away from each other?
// replacement - consider two strings "pale" and "bale" are one replacement away, there's only one first letter difference (there's only one letter difference)
// insertion - "apple" and "aple" you only need to insert one letter to get it to beomce the same
// removal - "apple" and "aple", you only need to remove one letter in "apple" one of the "p" to get to "aple"

/*
Example:

pale, pale => true
pales, pale => true
pale, bale => true
pale, bae => false
*/

// Use the Math.abs() function returns the absolute value of a number
// function difference(a, b) {
//   return Math.abs(a - b);
// }
// console.log(difference(3, 5)); // 2

// input: two strings
// output: boolean (if there is a difference)
// this is more compact and doesn't duplicate code

function oneAway(str1, str2) {
  // will itereate and check the character in each string input
  if (str1.length === str2.length) {
    let foundDiff = 0;

    for (let i = 0; i < str1.length; i++) {
      // console.log('str1[i]', str1[i]); // print work is same length
      // if value in indexes are different, increment foundDiff
      if (str1[i] !== str2[i]) {
        foundDiff += 1;
      } else if (foundDiff > 1) {
        return false;
      }
    }
    // console.log('foundDiff', foundDiff); // test 3, foundDiff 1
    return true;
  } else {
    // handles the difference in length and boolean response
    return Math.abs(str1.length - str2.length) < 2;
  }
}

// let o1 = oneAway('pale', 'ple'); // true
// console.log(o1);

// let o2 = oneAway('pales', 'pale');  // true
// console.log(o2);

// let o3 = oneAway('pale', 'bale'); // true
// console.log(o3);

// let o4 = oneAway('pale', 'bake'); // false
// console.log(o4);

let o5 = oneAway('pale', 'pale'); // true
console.log(o5);