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
      (dir==1&&(cardX<width - 0.075*width))
      ||(dir==-1&&cardX<width)
    ){
      position(card.container, {x: -dir*cardX, y:getCardY()});
      position(nextCard.container, {x:dir*(width - cardX), y:getCardY()});

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
      position(card.container, {x: getCardX(), y:getCardY()});
      resize();
      currentPage =card.pageNum;
      removeArrows();
      if(card.numCards > 1) createArrows();
    }
  }, transitInterval);
}

function movePagesUp(){
  cardY += cardDelta;
  if(cardY<height){
    position(card.container, {x:getCardX(),y:-cardY});
    position(nextCard.container, {x:getCardX(),y:height-cardY});

    // continue
    setTimeout(()=>{
      movePagesUp();
    }, transitInterval);
  }
  else {
    // end point reached
    transiting = false;
    position(nextCard.container,{x:getCardX(),y:getCardY()});

    // destroy prev card
    card.container.remove();
    card = nextCard;
    resize();
    currentPage =0;
    if(card.numCards > 1) createArrows();
  }
}
