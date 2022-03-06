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

console.log(missingNumber([1,2,3,4,6,7,8,9]))// to return 5  
console.log(missingNumber([1,2,3,4,5,6,8]))// to return [7, 9]  
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))// to return false 


module.exports = missingNumber
