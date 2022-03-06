function arraySum(arr1, arr2) {}

var arr1 = [];
var arr2 = [];

var sum = arr1 + arr2;
for (var i = 0; i < arr1.length; i++) {
  sum.push(arr1[i] + arr2[i]);
}
console.log(sum.push());
module.exports = arraySum;
