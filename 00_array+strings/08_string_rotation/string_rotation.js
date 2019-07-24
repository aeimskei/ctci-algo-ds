// =========================================================================== 
//1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat"); =========================================================================== 

// find the rotation point. for instance, if you rotate "waterbottle" after "wat", you get "erbottlewat". in a rotation, we cut str` into two parts, x and y, rearrange them to get str2.

/*
str1 = xy = waterbottle
x = wat
y = erbottle
str2 = erbottlewat
*/

// input: string
// output: boolean

function isRotated(str1, str2) {
  str1 = str1 + str1; // abcabc
  // console.log(str1);

  if (str1.includes(str2)) {
    return true;
  }
  return false;
}

console.log(isRotated('abc', 'def')); // false
// console.log(isRotated('hello world', 'orldhello w')); // true