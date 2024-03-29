let showMenuOnStart = true;

let menuEl;
let menuMask;
let collapsedMenuW = 5;
let menuW = collapsedMenuW;
let expandedMenuW = 35;
let menuIncrement = 5;
let expandInterval = 40;
let openMenuButton;
let menuHovered = false;
let stopExpand = false;
let playingAudio = false;
let userVolume = 0.5;
let playButton;
let menuState = "collapsed";

const MenuMinHeight = 50;

function expandMenu(){
  menuState = "transit";

  setTimeout(()=>{
    openMenuButton.hidden = true;
    menuMask.hidden = false;
    if(menuW+menuIncrement<=expandedMenuW){
      let fact = constrain(menuW/expandedMenuW,0,1);

      menuW += menuIncrement;
      menuEl.style.width = `${menuW}vw`;
      menuEl.style.padding = `${flo(fact*5)}vw`;
      menuMask.style.opacity = fact;

      adaptMenu(fact);

      // continue
      if(!stopExpand) expandMenu();
      else stopExpand = false;
    }

    // fully expanded
    else {
      menuState = "expanded";
    }

  }, expandInterval);
}

function collapseMenu(){
  menuState = "transit";

  setTimeout(()=>{

    if(menuW-menuIncrement>=collapsedMenuW){
      let fact = constrain(menuW/expandedMenuW,0,1);

      menuW -= menuIncrement;
      menuEl.style.width = `${menuW}vw`;
      menuEl.style.padding = `${flo(fact*5)}vw`;
      menuMask.style.opacity = fact;

      adaptMenu(fact);
      collapseMenu();
    }
    else{
      // fully collapsed
      //console.log("collapsed")
      menuState = "collapsed";
      menuMask.hidden = true;
      menuEl.style.padding = 0;
      menuEl.style.width = "50px";
      openMenuButton.hidden = false;
      adaptMenu(0);
      card.reload();
    }

  }, expandInterval);
}


function adaptMenu(fact){
  if(version=="small"){
    menuEl.style.height=`calc( ${flo(fact*95)}vh + ${MenuMinHeight}px)`;
  }
  else menuEl.style.height="100vh";
}

// openPage()
//
//
function openPage(pagename){

  // replace url
  let url = window.location.href;
  let openpage = url.indexOf("?page");
  if(openpage==-1){
    url += "?page/"+pagename
  }
  else {
    url = url.substring(0,openpage) + "?page/"+pagename
  }
  window.history.pushState("","last page",url);

  // hide menu
  collapseMenu();

  // if we're trying to open a page that's open, stop this nonsense
  if(pagename==card.pageName) return;

  // create new card and start transition
  transitionToPage(pagename);
  stopPreviousAudio();

  // setup audio
  setupAudio();
}



function menuHoverEnter(){
  //console.log("enter")
    if(!menuHovered && menuState=="collapsed"){

      stopExpand = false;
      expandMenu();
    }

    menuHovered = true;
}

function menuUnhovered(){
  //console.log("leave")
  if(menuHovered && menuState=="expanded"){

    stopExpand = true;

    collapseMenu();
  }

  menuHovered = false;
}

function createMenu(){

  menuEl = createDiv();

  menuEl.onclick=()=>{
    if(audioState=="expanded") collapseAudio();
  }

  menuEl.classList.add("menu_container");
  document.body.appendChild(menuEl);
  menuEl.onmousedown = menuSelected;
  menuEl.onmouseenter = menuHoverEnter;
  menuEl.onmouseleave = menuUnhovered;

  menuMask = createDiv();
  menuMask.classList.add("menu_mask");
  document.body.appendChild(menuMask);
  menuMask.style.opacity=0;
  menuMask.onmousedown = collapseMenu;

  // title
  let title = createDiv(
    enText("Samuel Paré-Chouinard's portfolio")
    +frText("portfolio de Samuel Paré-Chouinard"));
  title.classList.add("menuTitle")
  menuEl.appendChild(title);
  title.onclick=()=>{
    openPage("start");
  };

  /*
  let homeButton = createDiv(
    enText("home")
    +frText("menu")
  );
  homeButton.onclick=()=>{
    openPage("start");
  };
  homeButton.classList.add("menuButton");
  homeButton.classList.add("menuSubtitle");
  menuEl.appendChild(homeButton);
  */

  let subtitle = createDiv("<br>"+
    enText("projects:")
    +frText("projets:")
  );
  subtitle.classList.add("menuSubtitle");
  menuEl.appendChild(subtitle);

  let listarea = createDiv();
  listarea.classList.add("listArea");
  menuEl.appendChild(listarea);

  for(let page in pages){
    if(page!="start"){
      let link = createDiv();
      link.classList.add("menuLink");
      link.onclick=()=>{
        openPage(page);
      };

      let linktxt = createDiv(page);
      linktxt.classList.add("linkText");
      link.appendChild(linktxt);

      let img = document.createElement("img");
      img.setAttribute("src",getPageUrl(pages[page].name)+"thumbnail.png");
      img.classList.add("linkImg");
      link.appendChild(img);


      listarea.appendChild(link);
    }

  }

  let extLinks = createDiv(`${frText("liens")+enText("links")}:<br><br>
    <a href="https://sampc.itch.io/">itch.io ${frText("(encore des jeux)")+enText("(more games!)")}</a>
    <br><a href="https://soundcloud.com/zpoon">soundcloud (${frText("musique)")+enText("(music)")}</a>`);
  extLinks.classList.add("extLinks");
  menuEl.appendChild(extLinks);

  openMenuButton = createDiv("_<br>_<br>_<br><br>");
  openMenuButton.classList.add("openMenuButton");
  menuEl.appendChild(openMenuButton);

  setLanguage();

  // for testing
  if(showMenuOnStart)
  expandMenu();
}



function enText(txt){
  return `<span class="en">${txt}</span>`;
}

function frText(txt){
  return `<span class="fr">${txt}</span>`;
}

function menuSelected(){
  if(menuW<=collapsedMenuW)
    expandMenu();
}




function constrain(i, min, max){
  return Math.max(Math.min(i,max),min);
}
