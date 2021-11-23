
function positionArrows(){
  let arrowPos = {
    x: Math.min(width - 166,width*0.77),
    y:height -0.045*height - 0.018*width -31
  };
  if(leftArrow!=undefined) position(leftArrow, arrowPos);
  if(rightArrow!=undefined){
    arrowPos.x += 80;
    position(rightArrow, arrowPos);
  }
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
