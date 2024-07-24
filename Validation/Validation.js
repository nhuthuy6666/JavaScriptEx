var nameerr = document.getElementById("name-err");
var phoneerr = document.getElementById("phone-err");
var emailerr = document.getElementById("email-err");
var messageerr = document.getElementById("message-err");
var formerr = document.getElementById("form-err");

function validateName(){
    var name = document.getElementById("name").value;
    if(name.length === 0){
        nameerr.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s{1}[A-Za-z]+)+$/)){
        nameerr.innerHTML = "Write full name";
        return false;
    }
    nameerr.innerHTML = '<i class="fa-solid fa-circle-check valid"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    if(phone.length === 0){
        phoneerr.innerHTML = "Phone No is required";
        return false
    }
    if(phone.length !== 10){
        phoneerr.innerHTML = "Phone No should be 10 digits";
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneerr.innerHTML = "Only digits please";
        return false
    }
    phoneerr.innerHTML = '<i class="fa-solid fa-circle-check valid"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("email").value;
    if(email.length === 0){
        emailerr.innerHTML = "Email ID is required";
        return false
    }
    if(!email.match(/^[A-Za-z]+[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerr.innerHTML = "Email invalid";
        return false
    }
    emailerr.innerHTML = '<i class="fa-solid fa-circle-check valid"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length
    if(left > 0){
        messageerr.innerHTML = left + "more characters required";
        return false
    }
    messageerr.innerHTML = '<i class="fa-solid fa-circle-check valid"></i>';
    return true;
}

function validateform(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        formerr.style.display = "block";
        formerr.innerHTML = "Please fix error";
        setTimeout(function () {formerr.style.display = "none";}, 3000);
        return false;
    }
}