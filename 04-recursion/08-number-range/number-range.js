function numberRange(startNum, endNum) {
  if (startNum === endNum) return [endNum];
  console.log(startNum);
  return [startNum, ...[numberRange(startNum + 1, endNum)]].flat(Infinity);
}

module.exports = numberRange;
