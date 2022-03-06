//function increment(arr, value) which increments the value of val key in every object inside the array by the given value and returns the new array
function increment(arr, value) {
  let arr1 = [];

  let length = arr.length;

  for (let i = 0; i < length; i++) {
    // Increment single value (in place)
    arr1[i]["val"] += value;
  }
  return arr;
}

console.log(increment);

module.exports = increment;
