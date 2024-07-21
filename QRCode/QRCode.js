let qrinput = document.getElementById("qrinput");
let qrimage = document.getElementById("qrimage");
let qrbox = document.getElementById("qrbox");

function GetQR(){
    if(qrinput.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
    }
    else{
        qrinput.classList.add('err');
        setTimeout(() => {
            qrinput.classList.remove('err');
        }, 1000);
    }
}