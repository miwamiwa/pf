let audioPlayer;
let audioElement;
let cancelFadeout = false;

function stopPreviousAudio(){
  if(audioElement!=undefined){
    audioElement.remove();
    fadeOut(audioPlayer);
  }
}

function fadeOut(audio){
  setTimeout(()=>{
    audio.volume = constrain(audio.volume - 0.05, 0, 1);
    if(audio.volume==0){
      audio.pause();
    }
    else if(!cancelFadeout) fadeOut(audio);
  }, 40);
}

function createAudioPlayer(name){
  audioElement = createDiv();
  playingAudio = false;
  playButton = createDiv(getPlayMessage(name));
  playButton.onclick=()=>{
    togglePlayPause(name);
  }

  let volumeSlider = createDiv(`<span class="volumeIcon">🔊</span><input type="range" min="1" max="100" value="50" class="slider" onchange="updateSlider(this.value)" oninput="updateSlider(this.value)">`);

  playButton.classList.add("playButton");
  audioElement.classList.add("audioElement");
  volumeSlider.classList.add("sliderContainer");

  let chkbox = createDiv(`<span class="autoplayTxt">autoplay</span>
                  <input type="checkbox" id="audioCheckbox" name="autoplay"> `);
  chkbox.classList.add("checkboxDiv");
  chkbox.setAttribute("ey","Play music on page load");

  document.body.appendChild(audioElement);
  audioElement.appendChild(playButton);
  audioElement.appendChild(volumeSlider);
  volumeSlider.appendChild(chkbox);
}

function updateSlider(val){
  userVolume = val/100;
  audioPlayer.volume = userVolume;
}

function togglePlayPause(name){
  playingAudio=!playingAudio;

  if(playingAudio){
    // play
    playButton.innerHTML = "⏸ pause";
    audioPlayer.volume = userVolume;
    cancelFadeout = true;
    audioPlayer.play();
  }
  else {
    // pause
    cancelFadeout = false;
    playButton.innerHTML = getPlayMessage(name);
    fadeOut(audioPlayer);
  }
}

function getPlayMessage(name){
  return "▶️ " + name;
}
