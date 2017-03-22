window.addEventListener("load",function(){
  initPlayer();


  function initPlayer(){
    var elementPlayer = document.getElementById("player");
    var audio = document.createElement("audio");
    var sound      = document.createElement("audio");
    sound.id       = "audio-player";
    sound.controls = "controls";
    sound.src      = "test.mp3";
    sound.type     = "audio/mpeg";

    elementPlayer.appendChild(sound);
  }
});
