let notificationbox = document.querySelector(".notificationbox");


function ShowNoti(msg){
    let noti = document.createElement("div");
    noti.classList.add("noti");
    noti.innerHTML = msg;
    notificationbox.appendChild(noti);

    if(msg.includes('error')){
        noti.classList.add("error");
    }
    if(msg.includes('Invalid')){
        noti.classList.add("invalid");
    }

    setTimeout(() => {
        noti.remove();
    }, 6000);
}