function increment(arr, value) {
  let copy = arr.slice(0);
  for(let i=0; i<copy.length; i++){
      copy[i]['val'] += value
  }
  return copy


}

module.exports = increment
