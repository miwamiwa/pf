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

function start(){

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

function resize(){

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
    let w = Math.max( 0.05*width, MenuMinWidth);
    return w + 0.025 * (width - w);
  }
  else return 0;


}

function getCardY(){
  if(version=="wide") return CardYPos*height;
  else return 0;
}

function getCardW(){
  if(version=="wide"){
    let w = Math.max( 0.05*width, MenuMinWidth);
    return 0.95 * (width-w);
  }
  else return width;
}

function getCardH(){
  if(version=="wide") return 0.95*height;
  else return height;
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
