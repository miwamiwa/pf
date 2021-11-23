let language = "fr";
let languagevar = "samsportfoliosite_language"

function setLanguage(){
  if(language=="fr"){
    hideAll("en");
    showAll("fr");
  }
  else{
    hideAll("fr");
    showAll("en");
  }
}

function updateLanguage(newlang){
  language = newlang;
  localStorage.setItem(languagevar,newlang);
}

function getLanguage(){
  let data = localStorage.getItem(languagevar);
  if(data!=null) updateLanguage(data);
}

function hideAll(lang){
  let els = document.getElementsByClassName(lang);
  Array.prototype.forEach.call(els,el=>{
    el.hidden=true;
  });
}

function showAll(lang){
  let els = document.getElementsByClassName(lang);
  Array.prototype.forEach.call(els,el=>{
    el.hidden = false;
  });
}
