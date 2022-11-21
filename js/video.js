// Add js here.
/*jslint browser:true */


var media = document.querySelector('videoplayer');
media.loop = false;



document.getElementById('play').addEventListener("click",clickFunction);

function clickFunction(){
  media.play();
}


document.getElementById('pause').addEventListener("click",pauseFunction);

function pauseFunction(){
  media.pause();
}




document.getElementById('slower').addEventListener("click",slowFunction);

function slowFunction(){
  if(media.defaultPlaybackRate == 0.5){
     console.log("Video is at slowest speed!");
  }
  if(media.defaultPlaybackRate == 1.0){
    media.defaultPlaybackRate = 0.5;
  }
  if(media.defaultPlaybackRate == 2.0){
    media.defaultPlaybackRate = 1.0;
  }
}



document.getElementById('faster').addEventListener("click",fasterFunction);

function fasterFunction(){
  if(media.defaultPlaybackRate == 0.5){
    media.defaultPlaybackRate = 1.0;
  }
  if(media.defaultPlaybackRate == 1.0){
    media.defaultPlaybackRate = 2.0;
  }
  if(media.defaultPlaybackRate == 2.0){
    console.log("Video is at fastest speed!");
  }
}


document.getElementById('skip').addEventListener("click",skipFunction);

function skipFunction(){
  media.currentTime = media.currentTime + 15;
  if(media.currentTime > media.duration){
    media.currentTime = 0;
  }
}



const mute_btn = document.getElementById("mute");

mute_btn.addEventListener("click", muteFunction);

function muteFunction(){
  if(mute_btn.innerText === "Mute"){
      mute_btn.innerText = "unmute";
      mute_btn.muted = false;
  }
  if(mute_btn.innerText === "unmute"){
      mute_btn.innerText= "Mute";
      mute_btn.muted = true;
  }

}
