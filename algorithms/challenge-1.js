function missingNumber(numArr) {
  var emptyArray = new Array()
    var newList = new Array()
    var x = 0
    for(i=0; i<=numArr.length-1; i++){
        newList.push(numArr[i])
    }
    for(i=1; i<=9; i++){
        if(newList.includes(i) == false){
            emptyArray.push(i)
        }
        
    }
    if(emptyArray.length == 1){
        return emptyArray[0];
    }
    else if(emptyArray.length > 1){
        return emptyArray;
    }
    else{
        return false;
    }


}

module.exports = missingNumber
