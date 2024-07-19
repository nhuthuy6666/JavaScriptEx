const inputbox = document.getElementById("inputbox");
const listtask = document.getElementById("todolist");
function AddTask() {
    if(inputbox.value === ''){
        alert("You need to import a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listtask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    Savechanges();
}

listtask.addEventListener("click",function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        Savechanges();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Savechanges();
    }
}, false);

function Savechanges(){
    localStorage.setItem("data", listtask.innerHTML);
}

function ShowTask(){
    listtask.innerHTML = localStorage.getItem("data");
}

ShowTask();