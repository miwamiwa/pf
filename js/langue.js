// getLanguageSettings()
//
// get language from local storage, if none is set use default.

function getLanguageSettings(){
  let lang= localStorage.getItem(languageParam);

  if(lang!=undefined&&lang!=null){
    if(lang=="en") isFr=false;
    else if(lang=="fr") isFr=true;
  }
  else isFr=true;
}


function updateLanguage(){
  let enitems = document.getElementsByClassName("en");
  let fritems = document.getElementsByClassName("fr");


  for(let i=0; i<enitems.length;i++){
    if(!isFr) enitems[i].classList.remove("hidden");
    else enitems[i].classList.add("hidden");
  }
  for(let i=0; i<fritems.length;i++){
    if(isFr) fritems[i].classList.remove("hidden");
    else fritems[i].classList.add("hidden");
  }

  if(isFr)
    localStorage.setItem(languageParam,"fr");
  else localStorage.setItem(languageParam,"en");
}
