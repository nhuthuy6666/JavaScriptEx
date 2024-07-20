const passwordbox = document.getElementById("Passwordinput");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuwxyz";
const number = "1234567890";
const symbol = "@#$%^&*()_+=-<>?/{}[]";

const allchars = uppercase + lowercase + number + symbol;

function CreatePassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * symbol.length)];
    }

    passwordbox.value = password;
}

function CopyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}