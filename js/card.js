let cards;


class Card {
  constructor(page, pos, pagenum){
    this.pageName = page.name;
    this.numCards = page.pages;
    this.pageNum = pagenum;
    let container = getPage(page.name, pagenum);
    container.classList.add("card_container");
    body.appendChild(container);

    this.container = container;

    this.position=pos;
    if(pos=="below")
      position(container, {x:flo(0.075*window.innerWidth),y:window.innerHeight});
    if(pos=="left")
      position(container,{x:flo(0.075*window.innerWidth) - window.innerWidth,y:0.025*window.innerHeight});
    if(pos=="right")
    position(container,{x:flo(0.075*window.innerWidth) + window.innerWidth,y:window.innerHeight});

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
