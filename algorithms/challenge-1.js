function missingNumber(numArr) {
  let arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];
  if (numArr.length === arrayOfIntegers.length) {
    return false;
  } else {
    numArr.sort((a, b) => a - b);
    newArr = arrayOfIntegers.filter(function (obj) {
      return numArr.indexOf(obj) === -1;
    });
    return newArr;
  }
}

module.exports = missingNumber;
