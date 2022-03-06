function numSwap(number) {
    var chunks = splitArrayIntoChunksOfLen(number + "", 2);
    var result = "";
    for(var i =0; i < chunks.length; i++){
        result += chunks[i].slice(1) + chunks[i].slice(0,1)
    }
    return result;
}

function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}


console.log(numSwap(1234))
console.log(numSwap(1256))
console.log(numSwap(1212))
console.log(numSwap(1278))
console.log(numSwap(1234))
console.log(numSwap(432156))

module.exports = numSwap
