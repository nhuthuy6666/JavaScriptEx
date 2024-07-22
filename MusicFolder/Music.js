let progress = document.getElementById("progress");
let song = document.getElementById("song");
let pause = document.getElementById("pause");

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause () {
    if(pause.classList.contains("fa-pause")){
        song.pause();
        pause.classList.remove("fa-pause");
        pause.classList.add("fa-play");
    }
    else{
        song.play();
        pause.classList.remove("fa-play");
        pause.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    pause.classList.remove("fa-play");
    pause.classList.add("fa-pause");
}