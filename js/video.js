function setBGVid(path){
  let videlement = document.getElementById("coverVideo");

  // if there is no video element 
  if(videlement==undefined||(videlement!=undefined&&videlement.classList.contains("imAnImg"))){
    createVideo(path);
  }
  else{
    let e = document.getElementById("sourceelement");
    e.src=path;
    videlement.load();

    videlement.addEventListener('loadeddata', function() {
     videlement.play();
    }, false);
  }
}

function createVideo(path){
  document.getElementById("vidcontainer").innerHTML=`<video id="coverVideo" height="100%" width="100%" autoplay muted loop >
  <source id="sourceelement" src="${path}" type="video/mp4">
  </video>`;
}

function setBGImg(path){
  document.getElementById("vidcontainer").innerHTML=`<img id="coverVideo" class="imAnImg" src="${path}" height="100%" width="100%"></img>`;
}
