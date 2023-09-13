function arrayIntersection(arr1, arr2) {
  const bigArray = arr1.length >= arr2.length ? arr1 : arr2;
  const smallArray = bigArray === arr1 ? arr2 : arr1;
  const intersection = [];

  for (let i = 0; i < bigArray.length; i++) {
    if (bigArray.includes(smallArray[i])) intersection.push(smallArray[i]);
  }
  return intersection;
}

module.exports = arrayIntersection;
