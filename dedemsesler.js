var sounds = [
  "basliyoruz.mp3",
  "ben kemal geliyorum.mp3",
  "6filo.mp3",
  "enkisavideo.mp3",
  "kimsepadisahdegil.mp3",
  "terlemegokcek.mp3"
];

var audios = new Audio();
audios.autoplay = true;

var audio = new Audio('masa.mp3');
audio.oncanplay = function() {
  if (document.getElementById("oymuhurtikla").checked) this.play();
};

// Sayfa yüklendiğinde count değerini güncelle
window.onload = function() {
  var count = localStorage.getItem("count") || 0;
  document.getElementById("count").innerHTML = count + "&nbsp;";
};

var checkboxClicked = false;

function basliyoruzCheck(el) {
  if (!checkboxClicked) {
    checkboxClicked = true;
    if (el.checked) {
      audio.load();
      audios.src = sounds[Math.floor(Math.random() * sounds.length)];
      audios.load();
      audios.play();
      var count = localStorage.getItem("count") || 0;
      count++;
      localStorage.setItem("count", count);
    } else {
      audios.pause();
    }
    el.disabled = true; // Checkbox'u devre dışı bırak
    var count = localStorage.getItem("count") || 0;
    document.getElementById("count").innerHTML = count + "&nbsp;";
    console.log("Çalınan ses dosyası: ", audios.src);

    // Sayfayı ses dosyası tamamlandığında yenile
    audios.addEventListener("ended", function() {
      window.location.reload();
    });
  } else {
    el.checked = false;
  }
}
