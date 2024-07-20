const notesbtn = document.querySelector(".notesbtn");
const notes = document.querySelector(".notes");
let note = document.querySelectorAll(".note");

function ShowNotes(){
    notes.innerHTML = localStorage.getItem("notes");
}

ShowNotes();

function UpdateStorage(){
    localStorage.setItem("notes", notes.innerHTML);
}

notesbtn.addEventListener("click", () => {
    let inputnote = document.createElement("p");
    let inputimg = document.createElement("img");
    inputnote.className = "note";
    inputnote.setAttribute("contenteditable", "true");
    inputimg.src = "images/delete.png";
    inputnote.appendChild(inputimg);
    notes.appendChild(inputnote);
})

notes.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        UpdateStorage();
    }
    else if(e.target.tagName === "P"){
        note = document.querySelectorAll(".note");
        note.forEach(nt => {
            nt.onkeyup = function(){
                UpdateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event === "Enter"){
        document.execCommand("insertLineBreak");
        document.preventDefault();
    }
})