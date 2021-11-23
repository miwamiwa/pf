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

function start(){
  body = document.body;
  loadStartPage();
  createMenu();
  getLanguage();
  resize();
}

function resize(){

  position(card.container,{x: getCardX(),y:CardYPos*window.innerHeight});
  setSize(card.container, {w: getCardW(),h:0.95*window.innerHeight});
  // arrows
  positionArrows();
}

function getCardX(){
  let w = Math.max( 0.05*window.innerWidth, 60);
  return w + 0.025 * (window.innerWidth - w)
}

function getCardW(){
  let w = Math.max( 0.05*window.innerWidth, 60);
  console.log("brap brap "+(0.95 * (window.innerWidth-w)))
  return 0.95 * (window.innerWidth-w);
}
function positionArrows(){
  let arrowPos = {
    x: Math.min(window.innerWidth - 166,window.innerWidth*0.77),
    y:window.innerHeight -0.045*window.innerHeight - 0.018*window.innerWidth -31
  };
  if(leftArrow!=undefined) position(leftArrow, arrowPos);
  if(rightArrow!=undefined){
    arrowPos.x += 80;
    position(rightArrow, arrowPos);
  }
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


function transitionToPage(page){
  if(transiting) return;

  let newcard = new Card(pages[page], "below",0);
  transiting = true;
  nextCard = newcard;
  cardY =0;
  removeArrows();

  setTimeout(()=>{
    movePagesUp();
  }, transitInterval);
}

function removeArrows(){
  if(leftArrow!=undefined) leftArrow.remove();
  if(rightArrow!=undefined) rightArrow.remove();
}

function createArrows(){

  leftArrow = createDiv("<-");
  rightArrow = createDiv("->");
  leftArrow.classList.add("arrow");
  if(card.pageNum==0)
  leftArrow.classList.add("disabled");
  if(card.pageNum==card.numCards-1)
  rightArrow.classList.add("disabled");
  rightArrow.classList.add("arrow");
  document.body.appendChild(leftArrow);
  document.body.appendChild(rightArrow);

  positionArrows();

  leftArrow.onclick=()=>{
    if(!leftArrow.classList.contains("disabled")){
      goLeft();
      leftArrow.classList.add("disabled");
      if(!rightArrow.classList.contains("disabled"))
      rightArrow.classList.add("disabled");
    }
  }

  rightArrow.onclick=()=>{
    if(!rightArrow.classList.contains("disabled")){
      goRight();

      rightArrow.classList.add("disabled");
      if(!leftArrow.classList.contains("disabled"))
      leftArrow.classList.add("disabled");
    }
  }
}

function goLeft(){
  let nextnum = constrain(card.pageNum -1,0,card.numCards);
  transitionToCard(nextnum,-1);
}

function goRight(){
  let nextnum = constrain(card.pageNum +1, 0, card.numCards);
  transitionToCard(nextnum,1);
}

function transitionToCard(cardnum,dir){
  if(transiting) return;

  let pos = "left";
  if(dir==-1) pos="right";

  //console.log(card.pageName,card,pages[card.pageName],pages, cardnum)
  let newcard = new Card(pages[card.pageName],pos, cardnum);
  nextCard = newcard;
  transiting = true;
  cardX =0;

  movePagesHorizontally(dir);
}

function movePagesHorizontally(dir){
  setTimeout(()=>{
    cardX += cardDelta;
    if(
      (dir==1&&(cardX<window.innerWidth - 0.075*window.innerWidth))
      ||(dir==-1&&cardX<window.innerWidth)
    ){
      position(card.container, {x: -dir*cardX, y:window.innerHeight*0.025});
      position(nextCard.container, {x:dir*(window.innerWidth - cardX), y:window.innerHeight*0.025});

      // continue
      setTimeout(()=>{
        movePagesHorizontally(dir);
      }, transitInterval);
    }
    // end point reached
    else {
      transiting = false;

      // destroy prev card
      card.container.remove();
      card = nextCard;
      //position(card.container, {x: getCardX(), y:window.innerHeight*0.025});
      resize();
      currentPage =card.pageNum;
      removeArrows();
      if(card.numCards > 1) createArrows();
    }
  }, transitInterval);
}

function movePagesUp(){
  cardY += cardDelta;
  if(cardY<window.innerHeight){
    position(card.container, {x:getCardX(),y:-cardY});
    position(nextCard.container, {x:getCardX(),y:window.innerHeight-cardY});

    // continue
    setTimeout(()=>{
      movePagesUp();
    }, transitInterval);
  }
  else {
    // end point reached
    transiting = false;
    //position(nextCard.container,{x:getCardX(),y:0.025*window.innerHeight});
    resize();
    // destroy prev card
    card.container.remove();
    card = nextCard;

    currentPage =0;
    if(card.numCards > 1) createArrows();
  }
}
