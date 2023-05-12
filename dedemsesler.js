var sounds = [
  "basliyoruz.mp3",
  "ben kemal geliyorum.mp3",
  "6filo.mp3",
  "enkisavideo.mp3",
  "kimsepadisahdegil.mp3"
];

var audios = new Audio();
audios.autoplay = true;

var audio = new Audio('masa.mp3');
audio.oncanplay = function() {
  if (document.getElementById("oymuhurtikla").checked) this.play()
}

var count;

window.onload = function() {
  count = localStorage.getItem("count") || 0;
  document.getElementById("count").innerHTML = count + "&nbsp;";
}

function basliyoruzCheck(el) {    
  if (el.checked) {
    audio.load();
    audios.src = sounds[Math.floor(Math.random()*sounds.length)];
    audios.load();
    audios.play();
    count++;
    
    el.addEventListener('change', function() {
      if (!this.checked) {
        audios.pause();
      }
    });
    
  } else {
    audios.pause();
  }
  localStorage.setItem("count", count);
  document.getElementById("count").innerHTML = count + "&nbsp;";
}

function refreshPage() {
  window.location.reload();
}
