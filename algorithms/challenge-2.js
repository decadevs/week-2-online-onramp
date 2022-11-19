function numSwap(number) {
  let body = new Array();
    let newVal = number.toString()
    for(value of newVal){
        body.push(value);
    }
    for(let val=0; val<=body.length-1; val++){
        
        if(body.length%2 != 0){

            return `length of ${number} is not even = ${body.length}`;
        }
        else{
            function* splitters(arr, n) {
                for (let i = 0; i < arr.length; i += n) {
                    yield arr.slice(i, i + n);
                }
            }
            body = [...splitters(body, 2)]

            for(val=0; val<body.length; val++){
                copy = body[val]
                if(copy[val]< copy[val+1]){
                    copy.sort((a,b)=>{
                        return b-a
                    })

                }
                else {
                    copy.sort((a,b)=>{
                        return a-b
                    })
                }  
                
                
            }
            
        }
        body = body.join()
        
        return body;
            
    }


}

module.exports = numSwap
