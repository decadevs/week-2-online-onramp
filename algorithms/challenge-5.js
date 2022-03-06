function arraySum(arr1, arr2) {
    for(var i =0; i< arr1.length; i++){
        arr1[i]+= arr2[i%arr2.length];
    }
    return arr1;
}

1
console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]))//console.log() to return [3,5,9,7,9,7,3]  
console.log(arraySum([10,20,30,40,50], [20,40,60]))// to return [30,60,90,60,90]

module.exports = arraySum
