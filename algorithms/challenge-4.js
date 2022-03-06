function withdraw(amount) {
    var note_100 = amount/100;
    var note_50, note_20 ;
    var leftOver = amount%100;
    if((leftOver % 50) % 20 === 0 ){
        note_50 = leftOver /50;
        leftOver = leftOver % 50;
        note_20 = leftOver/20;
    }else {
        note_50 = (leftOver/50) -1
        leftOver = 50+ (leftOver % 50);
        note_20 = leftOver/20;
    }
    return [parseInt(note_100), parseInt(note_50), note_20]

}

console.log(withdraw(250)) //to return [2,1,0]  
console.log(withdraw(370)) //to return [3,1,1]
console.log(withdraw(360)) 

module.exports = withdraw