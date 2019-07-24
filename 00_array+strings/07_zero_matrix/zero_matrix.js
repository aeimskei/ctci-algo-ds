// =========================================================================== 
//1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
// =========================================================================== 

// first, know that it's not changing everything to '0', only if at an intersection point of row and col is '0', you have to convert that whole row and col into '0', it's like an infection, hah.

let zeroMatrix = (arr) => {
  let indexes = {}; 
  indexes.row = new Set(); 
  indexes.col = new Set(); 
  
  for (let row = 0; row < arr.length; row++) {
    // console.log('row:', row); // 0 1 2
    for (let col = 0; col < arr[0].length; col++) {
      // console.log(arr[0].length); // 4
      // console.log('col:', col); // 0 1 2 3 0 1 2 3 0 1 2 3
      if (arr[row][col] === 0) {
        indexes.row.add(row); 
        // console.log(indexes.row.add(row));
        indexes.col.add(col); 
        // console.log('col:', indexes.col.add(col));
      }
    }
  }
  console.log('indexes:', indexes) 
  // { row: Set { 1, 2 }, col: Set { 0, 2, 3 } }
  
  // if row level has 0 change the whole row to 0
  indexes.row.forEach(ele => {
    arr[ele].fill(0); // [0, 0, 0, 0]
  })
  // console.log('arr:', arr);
  // [1, 1, 1, 1]
  // [0, 0, 0, 0]
  // [0, 0, 0, 0]

  let col = indexes.col.values(); 
  // console.log('col:', col) // SetIterator {0, 2, 3} columns have 0's
  for (let point of col) {
    arr.map(ele => {
      // console.log(ele[point]) 
      // 1 0 0 1 0 0 1 0 0 but it'll only change at col idx of 0 2 3
      ele[point] = 0; 
    })
  }
  return arr;
};

let matrix1 = [
  [1, 1, 1, 1], 
  [0, 1, 0, 0], 
  [0, 1, 1, 1]
  ]; 

let m1 = zeroMatrix(matrix1); 
console.log(m1);
// prints:
// [0, 1, 0, 0]
// [0, 0, 0, 0]
// [0, 0, 0, 0]

// ===============================

// let matrix2 = [
//   [1,2], 
//   [3,4], 
//   [5, 6]
// ];

// let m2 = zeroMatrix(matrix2); 
// console.log(m2);
// prints:
// [1, 2]
// [3, 4]
// [5, 6]

// ===============================

// let matrix3 = [
//   [1,2], 
//   [3, 4], 
//   [5, 0]
// ];

// let m3 = zeroMatrix(matrix3); 
// console.log(m3);
// prints:
// [1, 0]
// [3, 0]
// [0, 0]