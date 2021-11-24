
function positionArrows(){
  let arrowPos = {
    x: Math.min(width - 166, width*0.77),
    y: height -0.045*height - 0.018*width -20
  };

  if(version=="small") arrowPos.x = 0.65 * 0.9 * width + 55;

  // check if arrows exist because they don't appear
  // if there's only 1 page in the card
  if(leftArrow!=undefined) position(leftArrow, arrowPos);
  if(rightArrow!=undefined){

    if(version=="wide") arrowPos.x += 80;
    else arrowPos.x += 55;
    position(rightArrow, arrowPos);
  }
}

function createArrows(){

  leftArrow = createArrow("<-");
  rightArrow = createArrow("->");

  if(card.pageNum==0) disable(leftArrow);
  if(card.pageNum==card.numCards-1) disable(rightArrow);

  positionArrows();

  leftArrow.onclick=()=>{
    if(disable(leftArrow)){
      goLeft();
      disable(rightArrow);
    }
  }

  rightArrow.onclick=()=>{
    if(disable(rightArrow)){
      goRight();
      disable(leftArrow);
    }
  }
}


function createArrow(txt){
  let el = createDiv(txt);
  el.classList.add("arrow");
  document.body.appendChild(el);
  return el;
}

// disable()
//
// return true is the element wasn't already disabled
function disable(el){
  if(!el.classList.contains("disabled")){
    el.classList.add("disabled");
    return true;
  }
  return false;
}

function enable(el){
  if(el.classList.contains("disabled"))
  el.classList.remove("disabled");
}

function removeArrows(){
  if(leftArrow!=undefined) leftArrow.remove();
  if(rightArrow!=undefined) rightArrow.remove();
}

function goLeft(){
  let nextnum = constrain(card.pageNum -1,0,card.numCards);
  transitionToCard(nextnum,-1);
}

function goRight(){
  let nextnum = constrain(card.pageNum +1, 0, card.numCards);
  transitionToCard(nextnum,1);
}
