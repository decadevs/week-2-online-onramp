function missingNumber(numArr) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let ans = [];
  let length = numArr.length;
  for (let i = 0; i < length; i++) {
    arr[numArr[i] - 1] = numArr[i];
  }

  for (let i = 0; i < 9; i++) {
    if (arr[i] === 0) {
      ans = Math.floor(((i + 1) * (i + 2)) / 2);
    }
  }
  if (ans.length === 0) {
    return false;
  } else if (missingNumber.length === 1) {
    return ans[0];
  } else {
    return ans;
  }
}
console.log(missingNumber([1, 3, 4, 5, 6, 9]));
module.exports = missingNumber;
