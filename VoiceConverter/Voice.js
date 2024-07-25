let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)))
}

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.value];
})

document.getElementById("start").addEventListener("click", () => {
    speech.text = document.getElementById("text").value;
    window.speechSynthesis.speak(speech);
})