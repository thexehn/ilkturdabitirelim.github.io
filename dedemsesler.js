var sounds = [
  "basliyoruz.mp3",
  "ben kemal geliyorum.mp3",
  "6filo.mp3",
  "enkisavideo.mp3",
  "kimsepadisahdegil.mp3"
];

var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
var audios = new Audio(soundFile);
audios.autoplay = true;


var audio = new Audio('masa.mp3');
audio.oncanplay = function() {
if (document.getElementById("oymuhurtikla").checked) this.play()
}
function basliyoruzCheck(el) {    
  if (el.checked) {
    audio.load();
    audios.load();
    audios.play();
    console.log(soundFile);
  }

  
}
