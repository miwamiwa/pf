let audioPlayer;
let audioElement;
let cancelFadeout = false;
let nowPlaying;
let nowPlayingText;
let autoplayActive = false;
let audioIcon;
let audioHovered = false;

function stopPreviousAudio(){
  if(autoplayActive){

    if(playingAudio && pages[nextCard.pageName].audio!=undefined)
    audioPlayer.pause();
  }


  else if(audioElement!=undefined ){
    //audioElement.remove();
    fadeOut(audioPlayer);
    if(pages[nextCard.pageName].audio!=undefined){
      //updatePlayButton();

    }

  }

  if(!playingAudio){
    if(nowPlaying!=undefined){
      nowPlaying.remove();
      nowPlaying=undefined;
    }

  }
}

function fadeOut(audio){
  setTimeout(()=>{
    audio.volume = constrain(audio.volume - 0.05, 0, 1);
    if(audio.volume==0){
      audio.pause();
      playingAudio = false;
      updatePlayButton(loadingsound);
      if(nowPlaying!=undefined)
      nowPlaying.remove();
    }
    else if(!cancelFadeout) fadeOut(audio);
  }, 40);
}
let loadingsound;


function setupAudio(){

  //console.log("audio setup...")
  let pagename = card.pageName;
  if(nextCard!=undefined) pagename = nextCard.pageName;
  if(pages[pagename].audio!=undefined){

    // create audio player
    if(audioPlayer==undefined){
      audioPlayer = new Audio("audio/"+pages[pagename].audio);
      audioPlayer.loop = true;
      audioPlayer.volume = userVolume;
      loadingsound = pages[pagename].audio;
        //audioPlayer.addEventListener('canplaythrough', soundLoaded, false);


    }
    else {
      audioPlayer.setAttribute('src',"audio/"+pages[pagename].audio); //change the source
      loadingsound = pages[pagename].audio;
      //audioPlayer.removeEventListener('canplaythrough', soundLoaded);
      //  audioPlayer.addEventListener('canplaythrough', soundLoaded, false);
      audioPlayer.load();
      playButton.innerHTML = getPlayMessage(pages[pagename].audio);
      playButton.onclick=()=>{
        togglePlayPause(pages[pagename].audio);
      }
    }

    if(autoplayActive){
      //console.log("play!")
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      playingAudio = true;
      updatePlayButton(loadingsound);
    }

    // create audio player if it isn't there yet
    if(audioElement==undefined)
    createAudioPlayer(pages[pagename].audio);
  }

  // fade out when landing on a page with no audio?
  else if(audioPlayer!=undefined&&!autoplayActive){
    fadeOut(audioPlayer);
    playingAudio = false;

  }
}

function soundLoaded(){
  console.log("loaded!")
  if(autoplayActive){

    //audioPlayer.removeEventListener('canplaythrough', soundLoaded);
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    playingAudio = true;
    updatePlayButton(loadingsound);

  }

  //else audioPlayer.removeEventListener('canplaythrough', soundLoaded);

}


let closeaudio;

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

  let chkbox = createDiv(`<span class="autoplayTxt" onclick="toggleAutoPlay()">autoplay</span>
                  <input type="checkbox" id="audioCheckbox" name="autoplay" onclick="toggleAutoPlay()"> `);
  chkbox.classList.add("checkboxDiv");
  chkbox.setAttribute("ey","Play music on page load");

  document.body.appendChild(audioElement);

  audioIcon = createDiv("🔊");
  audioIcon.classList.add("audioIcon");
  audioIcon.hidden = true;
  audioElement.onmouseenter=()=>{
    if(audioState=="collapsed") expandAudio();
    audioHovered = true;
  }
  audioElement.onmouseleave=()=>{
    if(audioState=="expanded") collapseAudio();
    audioHovered = false;
  }
  audioElement.onclick=()=>{
    if(audioState=="collapsed") expandAudio();
  }

  audioElement.appendChild(audioIcon);

  audioElement.appendChild(playButton);
  audioElement.appendChild(volumeSlider);
  volumeSlider.appendChild(chkbox);
}



function toggleAutoPlay(){
  autoplayActive = !autoplayActive;
  console.log("toggled autoplay")

  if(autoplayActive) document.getElementById("audioCheckbox").checked = true;
  else document.getElementById("audioCheckbox").checked = false;
}

function updateSlider(val){
  userVolume = val/100;
  audioPlayer.volume = userVolume;
}

function togglePlayPause(name){
  playingAudio=!playingAudio;
  if(playingAudio){
    audioPlayer.volume = userVolume;
    cancelFadeout = true;
    audioPlayer.play();
  }
  else {
    // pause
    nowPlaying.remove();
    nowPlaying=undefined;
    cancelFadeout = false;
    fadeOut(audioPlayer);
  }
  updatePlayButton(name);
}

function updatePlayButton(name){
  if(playingAudio){
    // play
    playButton.innerHTML = "⏸ pause";


    if(nowPlaying==undefined){
      nowPlaying = createDiv(frText("a l'ecoute")+enText("now playing")+":<span id='nowplayingtext'></span>");
      nowPlaying.classList.add("alecoute")
    //  nowPlaying.id = "nowplaying"
      audioElement.appendChild(nowPlaying);
      nowPlayingText = document.getElementById("nowplayingtext");
      if(language=="fr") nowPlaying.getElementsByClassName("en")[0].hidden = true;
      else nowPlaying.getElementsByClassName("fr")[0].hidden=true;
    }

    nowPlayingText.innerHTML = name;
  }

  // if(!playingAudio)
  else {

    playButton.innerHTML = getPlayMessage(name);

  }
}


function getPlayMessage(name){
  return "▶️ " + name;
}














let audioState = "expanded";
let audioOffset =0;
let audioCollapsedOffset = 200;
let audioIncrement = 20;

function expandAudio(){
  audioState = "transit";
  audioExpandedMode();

  setTimeout(()=>{
    if(audioOffset-menuIncrement>=0){
      //let fact = constrain(audioOffset/audioCollapsedOffset,0,1);

      audioElement.style.right =  - audioOffset +"px";
      audioOffset -= audioIncrement;

      expandAudio();
    }

    // fully expanded
    else {
      audioElement.style.right = 0;
      audioState = "expanded";

      triggerCollapseAudio();

    }

  }, expandInterval);
}

function triggerCollapseAudio(){
  clearInterval(closeaudio);
  setTimeout(()=>{
    closeaudio =setInterval(()=>{
      if(!audioHovered) collapseAudio();
    }, 2000);
  }, 2000);
}

function collapseAudio(){
  audioState = "transit";

  setTimeout(()=>{
    if(audioOffset+menuIncrement<=audioCollapsedOffset){
      //let fact = constrain(audioOffset/audioCollapsedOffset,0,1);
      if(audioElement!=undefined)
      audioElement.style.right =  - audioOffset +"px";
      audioOffset += audioIncrement;
      collapseAudio();
    }

    // fully expanded
    else {
      if(audioElement!=undefined)
      audioElement.style.right =  - audioCollapsedOffset +"px";
      audioState = "collapsed";
      audioCollapsedMode();
    }

  }, expandInterval);
}


function audioCollapsedMode(){
  audioIcon.hidden = false;
}

function audioExpandedMode(){
  audioIcon.hidden = true;
}
