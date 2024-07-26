let password = document.getElementById("password");
let notice = document.getElementById("notice");

function Strength() {
    if(password.value.length === 0){
        notice.style.visibility = "hidden";
        password.style.border = "2px solid white";
    }
    if(password.value.length > 0 && password.value.length < 4){
        notice.style.visibility = "visible";
        notice.innerHTML = "Password is weak";
        notice.style.color = "red";
        password.style.border = "2px solid red";
    }
    if(password.value.length >= 4 && password.value.length < 8){
        notice.style.visibility = "visible";
        notice.innerHTML = "Password is medium";
        notice.style.color = "yellow";
        password.style.border = "2px solid yellow";
    }
    if(password.value.length >=8){
        notice.style.visibility = "visible";
        notice.innerHTML = "Password is strong";
        notice.style.color = "green";
        password.style.border = "2px solid green";
    }
}