function missingNumber(numArr) {
  count = 9,
  missing = []

  for (let i = 1; i <= count; i++) {
    if (numArr.indexOf(i) === -1) {
      missing.push(i)
    }
  }
  if(missing.length ===0){ // if missing array is empty
    return false;
  }else if(missing.length === 1){ // if missing array has length of 1
    return missing[0];
  }else {
    return missing;
  }
}

module.exports = missingNumber
