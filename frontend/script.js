var cancel = document.getElementById("cancel");
var send = document.getElementById('send');
var realName = document.getElementById('name');
var email = document.getElementById('email');
var tel = document.getElementById('tel');
var mssg = document.getElementById('mssg');
var telNumber = Number(tel.value)

cancel.addEventListener("click", function(){
    realName.value = '';
    email.value = '';
    tel.value = '';
    mssg.value = '';


})
send.addEventListener("click", function(){
    if(realName.value === ""){
        realName.value = "Input Field must be filled"
        alert('All input Fields must be filled')
    }
    else if(email.value === ""){
        email.value = "Input Field must be filled"
        alert('All input Fields must be filled')
    }
    else if(tel.value === ""){
        tel.value = "Input Field must be filled"
        alert('All input Fields must be filled')
        
    }
    else if(mssg.value === ""){
        mssg.value = "Input Field must be filled"
        alert('All input Fields must be filled')
    }
    else if(typeof(telNumber) !== "number"){
        alert(`Input Field must be Number`)
        
        
    }
    else if(realName.value.length > 100 || email.value.length > 100 || tel.value.length > 100 || mssg.value.length > 100 ){
        alert(`message field cannot have more than 100 characters`)
    }
    else{
        alert(`welcome ${realName.value}`)
        realName.value = '';
        email.value = '';
        tel.value = '';
        mssg.value = '';
    }
    

})
