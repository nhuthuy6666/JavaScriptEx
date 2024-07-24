let notice = document.getElementById("notice");

function CheckEmail(){
    let email = document.getElementById("email").value;
    if(!email.match(/^[A-Za-z]+[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || email.length === 0){
        return false;
    }
    return true;
}

function SendEmail(){
    if(CheckEmail() === true){
        notice.style.visibility = "visible";
    }
    if(CheckEmail() === false){
        notice.style.visibility = "hidden";
    }
}