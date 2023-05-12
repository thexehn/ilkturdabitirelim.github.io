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

// Sayfa yüklendiğinde count değerini güncelle
window.onload = function() {
  var count = localStorage.getItem("count") || 0;
  document.getElementById("count").innerHTML = count + "&nbsp;";
};

function basliyoruzCheck(el) {    
  if (el.checked) {
    audio.load();
    audios.src = sounds[Math.floor(Math.random()*sounds.length)];
    audios.load();
    audios.play();
    var count = localStorage.getItem("count") || 0;
    count++;
    localStorage.setItem("count", count);
    el.addEventListener('change', function() {
      if (!this.checked) {
        audios.pause();
      }
    });
    
  } else {
    audios.pause();
  }
  var count = localStorage.getItem("count") || 0;
  document.getElementById("count").innerHTML = count + "&nbsp;";
  console.log("Çalınan ses dosyası: ", audios.src);
  
  // Sayfayı ses dosyası tamamlandığında yenile
  audios.addEventListener("ended", function() {
    window.location.reload();
  });
}


var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", oySifirla);

function oySifirla() {
  var count = localStorage.getItem("count") || 0;
  if (document.getElementById("oymuhurtikla").checked) {
    // Checkbox seçiliyse, sadece bir mesaj gösterin ve reset-button'un visibility'sini gizleyin
    document.getElementById("reset-button").style.visibility = "hidden";
  } else {
    // Checkbox seçili değilse, normal işlemi yapın ve reset-button'un visibility'sini gösterin
    localStorage.clear();
    document.getElementById("sifirlandi").innerHTML = "Oyunuz başarıyla sıfırlandı.";
    document.getElementById("reset-button").style.visibility = "visible";
    setTimeout(function() {
      window.location.reload();
    }, 3000); // 3 saniye gecikme
  }
  count = localStorage.getItem("count") || 0;
  document.getElementById("count").innerHTML = count + "&nbsp;";
}

// Sayfa yüklendiğinde reset-button'ın visibility'sini kontrol edin
window.onload = function() {
  var resetButton = document.getElementById("reset-button");
  if (document.getElementById("oymuhurtikla").checked) {
    resetButton.style.visibility = "hidden";
  } else {
    resetButton.style.visibility = "visible";
  }
};








