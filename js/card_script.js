window.onload = start;


function start(){
  // fetch language settings from local storage, and
  // hide page elements accordingly
  getLanguage();
  setLanguage();

  // this would be useful lol (load video after setting language)
  appendVideo();
}

function appendVideo(){

}
