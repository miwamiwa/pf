let cards;
const CardXPos = 0.075;
const CardYPos = 0.025;

class Card {
  constructor(page, pos, pagenum){
    this.pageName = page.name;
    this.numCards = page.pages;
    this.pageNum = pagenum;
    let container = getPage(page.name, pagenum);
    container.classList.add("card_container");
    body.appendChild(container);

    this.container = container;


    // place off-screen
    this.position=pos;
    if(pos=="below")
      position(container, {x:getCardX(),y:height});
    if(pos=="left")
      position(container,{x:getCardX() - width,y:CardYPos*height});
    if(pos=="right")
    position(container,{x:getCardX() + width,y:height});

  }
}

function getPage(page, num){
  return makeIFrame(`pages/${page}/page${num}.html`);
}

function getPageUrl(page){
  return `pages/${page}/`;
}

function flo(input){
  return Math.floor(input);
}

function createDiv(txt){
  let d = document.createElement("div");
  if(txt!=undefined) d.innerHTML = txt;
  return d;
}

function makeIFrame(page){
  let el = document.createElement("iframe");
  el.setAttribute("src",page);
  el.setAttribute("scrolling","no");
  el.setAttribute("frameBorder",0);

  return el;
}

function setSize(el,data){
  el.style.width=`${data.w}px`;
  el.style.height=`${data.h}px`;
}

function position(el, data){
  el.style.left=`${data.x}px`;
  el.style.top=`${data.y}px`;
}
