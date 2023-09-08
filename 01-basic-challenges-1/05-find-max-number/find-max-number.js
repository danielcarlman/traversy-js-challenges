// 1) LOW LEVEL SOLUTION

function findMaxNumber(arr) {
  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  return maxNum;
}

// 2) MATH METHOD SOLUTION

// function findMaxNumber(arr) {
//     return Math.max(...arr);
//   }

module.exports = findMaxNumber;
