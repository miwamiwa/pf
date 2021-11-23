window.onload = start;


function start(){
  // fetch language settings from local storage, and
  // hide page elements accordingly
  getLanguage();
  setLanguage();
}
