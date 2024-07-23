let password = document.getElementById("password");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if(password.type === "password"){
        password.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
    else{
        password.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}