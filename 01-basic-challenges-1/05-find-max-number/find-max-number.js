// 1) LOW LEVEL SOLUTION

function findMaxNumber(arr) {
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum > maxNum) {
      [currentNum, maxNum] = [maxNum, currentNum];
    }
  }
  return maxNum;
}

// 2) MATH METHOD SOLUTION

// function findMaxNumber(arr) {
//     return Math.max(...arr);
//   }

module.exports = findMaxNumber;
