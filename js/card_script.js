window.onload = start;


function start(){
  // fetch language settings from local storage, and
  // hide page elements accordingly
  getLanguage();
  setLanguage();

  // this would be useful lol (load video after setting language)
  appendVideo();

  if(document.getElementsByClassName("shortGrad").length==0){
    let el = document.createElement("img");
    el.src="../../css/grad.png"
    document.getElementsByClassName("backgroundContainer")[0].appendChild(el);
    el.setAttribute("class","gradient");
    el.setAttribute("width","100%");
    el.setAttribute("height","20%");
  }


}

function appendVideo(){

}
