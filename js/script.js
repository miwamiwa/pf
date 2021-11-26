window.onload = start;
window.onresize = resize;

let card;
let nextCard;
let cardY;
let cardX;
let body;
let currentPage =0;
let transiting = false;
let transitInterval = 10;
let cardDelta = 50;
let leftArrow;
let rightArrow;
let width;
let height;

const smallThreshold = 540;
const MenuMinWidth = 55;

let version; // wide/small
let isMobile=false;

function start(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile=true;
  }

  updateWandH();
  body = document.body;
  loadStartPage();
  createMenu();
  getLanguage();
  resize();
  triggerCollapseAudio();

  body.ontouchstart=touchStart;
  body.ontouchend=touchEnd;
}


function updateWandH(){

  width = window.visualViewport.width;
  height = window.visualViewport.height;

  let v = version;
  if(width<smallThreshold) version = "small"
  else version = "wide";

  // version changed!
  if(v!=version){

    // if wide
    if(version=="wide"){
      expandedMenuW = 35;

      if(audioElement!=undefined&&audioState=="collapsed")
        expandAudio();
    }

    // if small
    else {
      expandedMenuW = 65;
      if(audioElement!=undefined&&audioState=="expanded")
        collapseAudio();
    }
    console.log(version);
  }
}

let resizetimeout;

function resize(){

  clearTimeout(resizetimeout);

  resizetimeout=setTimeout(actuallyResize, 100);
}

function actuallyResize(){

    updateWandH();

    position(card.container,{x: getCardX(),y:getCardY()});
    setSize(card.container, {w: getCardW(),h:getCardH()});
    // arrows
    positionArrows();

    updateTouchThresholds();

    if(menuState=="expanded") collapseMenu();

    if(menuState=="collapsed") adaptMenu(0);

}

function getCardX(){
  if(version=="wide"){
    return 63;
  }
  else if(isMobile) return 0;
  else return 3;


}

function getCardY(){
  if(version=="wide") return 8
  else if(isMobile) return 0;
  else return 12;
}

function getCardW(){
  if(version=="wide"){
    //let w = Math.max( 0.05*width, MenuMinWidth);
    //return 0.9 *
    return width-60;
  }
  else return width;
}

function getCardH(){
  //if(version=="wide") return 0.95*height;
  //else return height;
  return height;
}


function loadStartPage(){
  currentPage =0;

  // check url for a page to laod
  let url = window.location.href;
  let openpage = url.indexOf("?page");
  if(openpage!=-1){
    let name = url.substring(openpage+6,url.length);
    card = new Card(pages[name], "center",0);
  }
  else {
    card = new Card(pages.start, "center",0);
  }

  if(card.numCards>1) createArrows();

  setupAudio();


}
