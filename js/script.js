window.onload = start;


const MobileCoverSectionHeight = "84vh";
const WidthThresholdForPaddingChange = 800;
const WidthThresholdForSmallMode = 600;

// base value for scaling title height (unit: vh)
const TitleSize_Small = "4";
const TitleSize_Wide = "8";
const SubtitleSize_Small = "2";
const SubtitleSize_Wide = "3";

const SlideShowHeight_Default = "50vh";

let titleExpandedAmount=1;

let featureboxsize =22;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let navcanvas,navctx,navtarget,navx=0,navvel=16;
let entries = [];
let tagList = [];
let selectedTag = "all";
let sortBy = "name";
let sortedEntries = [];
let selectedProject;
let compressednavwidth="75%";
let expandednavwidth="75%";
let doc = {
  results:0,
  wall:0,
  tagList:0,
  menuText:0,
  galleryView:0,
  imageViewer:0,
  galleryCounter:0,
  dateButton:0,
  nameButton:0
}
let imagesInArticle = [];
let navBar;
let banderollesection;
let subjectsbox;
let bodycontentsbox;
let featureSelection="all";
let popupsection;
let showmoresection;
let showlesssection;
let coverbox;
let wheelState = false;
let lastWheelState = false;
let wheelTimer;
let loadImages = false;
let loop;
let popupoffsetted = false;
let starturl;
let subjects = [featureSelection];
let boxStatus=[]; // for project box opacity animation
// video parallax effect intensity
let parallaxfactor =3;
let gallerySelection = {entry:0,index:0};
let lastH;
let tbh; // "Title Box Height". the "coverbox" is the
// entire cover section (video and title)
let hunit;
let resizeRate=300;
let coverBlackSpan;
let amtThingsShown = 4;
/*
window.onhashchange = function() {
console.log("hash change")
}
*/

let smallmode = false;
let bsize;// banderolle section height
let coverTitleDiv;//=document.getElementsByClassName("coverTitle1")[0];
let coverWhiteSpan;//=document.getElementById("logopt2");
let coverTitleParent;
let coverSubtitle;
let navLogoElement;
let navbody;
let navbheight; // nav button height in px
let navHeight;
let resized = true; // to prevent extra calls of checkresize()
let viewport;
let popupSpaceBelowTitle;
const languageParam = "Swslv";
let viewportW;
let viewpp;







// start()
//
// called when page loads.
// sets up pointers, creates necessary page elements.

function start(){

  getLanguageSettings();

  viewport=document.getElementById("viewport");
  viewportW=viewport.getBoundingClientRect().width;
  viewpp = document.getElementById("viewportparent");

  window.onresize =resize;
  if(isMobile) window.onorientationchange=resize;


  checkSmallMode();
  lastH=window.innerHeight;

  starturl=window.location.href;
  hunit = 0.1*window.innerHeight;
  navbheight = 2*hunit+8;

  doc.galleryView = document.getElementById("galleryView");
  doc.imageViewer = document.getElementById("galleryImageViewer");
  navBar=document.getElementById("navSection");
  banderollesection=document.getElementById("banderolleSection");

  if(banderollesection!=undefined)
    bsize=banderollesection.getBoundingClientRect().height;

  // create top page elements
  createCoverBox();
  populateNav();

  // bind scroll event
  window.onscroll=scrollevent;

  popupsection=document.getElementById("popupSection");
  if(popupsection!=undefined)
  popupsection.hidden=true;

  if(pageIs=="home"||pageIs=="works"){
    bodycontentsbox=document.getElementById("bodyContentBox");

    showmoresection=document.getElementById("showMoreSection");
    showlesssection=document.getElementById("showLessSection");
    showlesssection.hidden=true;

    // if this is home page, classify projects by featured subjects,
    // then add subjects buttons to the ui.
    populateBody();
  }

  else if(pageIs=="resume"){
    popupsection=document.getElementById("popupSection");
  }

  // check what to append to the page depending on
  // url commands.
  if(pageIs=="home"||pageIs=="works")
  checkURL();

  // place nav bar to correct height
  scrollevent();
  resize();

  if(document.body.scrollTop !=0) hidescrollnav();

  updateLanguage();

  if(pageIs!="home") scrollovercover();

  scrollevent();
}




// scrollevent()
//
// called when page is scrolled.
// fixes nav bar and popup title bar positions
// if needed. Also the video parallax happens here.


function scrollevent(){

  let scroll = document.body.scrollTop;
  let titlesize = TitleSize_Wide;
  let subtitlesize = SubtitleSize_Wide;
  if(smallmode){
    titlesize = TitleSize_Small;
    subtitlesize = SubtitleSize_Small;
  }

  // euh.. something to do with titleExpandedAmount
  let shrinkrange = 4*hunit;
  // scroll amount after which title starts to shrink
  let shrinkheight= 2*hunit;
  // scroll amount after which title disappears
  let shrinkover= 3*hunit;


  // set title size when title is shrinking :

  if(scroll>shrinkheight){

    // titleExpandedAmount=1 at top of shrink range, 0 at bottom
    titleExpandedAmount=( 1- (scroll-shrinkheight) / (shrinkrange) );
    let adjustedSize = titlesize * 0.1*hunit;

    let titleFontSize= navbheight + titleExpandedAmount*(adjustedSize-navbheight);
    let subtitleFontSize = navbheight + titleExpandedAmount*((subtitlesize * 0.1*hunit)-navbheight);
    let lineHeight = titleFontSize - 19 * (1-titleExpandedAmount);
    let characterSpacing = 2 - 10  * (1-titleExpandedAmount);

    styleTitle(
      titleFontSize + "px",
      lineHeight + "px",
      subtitleFontSize + "px",
      characterSpacing
    );
  }

  // set title size when page fully scrolled up :

  else {
    titleExpandedAmount=1;
    styleTitle(
      titlesize+"vh",
      titlesize+"vh",
      subtitlesize+"vh",
      2
    );
  }

  // show nav logo when shrink range is exceeded :

  if(scroll>shrinkover){
    navLogoElement.style.top=0;
    navLogoElement.style.display="block"
    navbody.style.width=compressednavwidth;
  }

  // slide-in nav logo when in shrinking range :

  else if(scroll>shrinkover-navHeight){
    navLogoElement.style.top=(scroll - shrinkover);
    navLogoElement.style.display="block";
    navbody.style.width=compressednavwidth;
  }

  // hide nav logo when below shrinking range :

  else{
    navLogoElement.style.display="none";
    navbody.style.width=expandednavwidth;
  }

  // position nav bar when we scrolled into its fixed position

  if(scroll>tbh - navHeight){

    coverTitleParent.style.display="none";
    navBar.style.position="fixed";
    navBar.style.top="0px";

    // if there is a banderolle section, fix banderolle position
    if(pageIs=="home") banderollesection.style.marginTop=navHeight+"px";
    else banderollesection.style.margin = 0;

    if(popupshown&&scroll>tbh+bsize - navHeight){
      let p=document.getElementsByClassName("popuptitle");
      p[0].style.position="fixed";
      p[0].style.top=navHeight+"px";
      popupoffsetted=true;

      let slideshowEl = document.getElementsByClassName("popupimgcontainer")[0];

      slideshowEl.style.marginTop=navHeight+"px";
      slideshowEl.style.paddingTop=popupSpaceBelowTitle+"px";
      slideshowEl.style.height = `calc(${SlideShowHeight_Default} + 20px)`;
    }
    else if(popupshown) resetPopupSectionOffsets();

  }

  // position nav bar when it is in adaptive range :

  else {
    navbody.style.width=expandednavwidth;
    coverTitleParent.style.display="block";
    navBar.style.position="relative";
    if(pageIs=="home") banderollesection.style.marginTop="0px";
  //  else document.getElementById("bodySection").style.marginTop="0px";
    if(popupshown) resetPopupSectionOffsets();


  }

  if(scroll==0&&scrollNavButton.style.display=="none")
    fadeOutNav();
  else if(scroll>0&&revealedNav.style.display!="block")
    hidescrollnav();

    //console.log(scroll, revealedNav.style.display)
/*
  if(banderollesection!=undefined)
  document.getElementsByClassName("bandImg")[0]
    .style.objectPosition=`0% ${ (100-60*document.body.scrollTop/window.innerHeight) }%`;
    */
}


//resetpopupsectionoffsets()
//
// reset position of the popup section inside function scrollevent()
function resetPopupSectionOffsets(){
  let p=document.getElementsByClassName("popuptitle");
  p[0].style.position="relative";
  p[0].style.top="0px";
  popupoffsetted = false;

  let slideshowEl = document.getElementsByClassName("popupimgcontainer")[0];
  slideshowEl.style.height = SlideShowHeight_Default;
  slideshowEl.style.marginTop=popupSpaceBelowTitle+"px";
  slideshowEl.style.paddingTop=(popupSpaceBelowTitle-20)+"px";
}


let scrollNavButton;
let revealedNav;

function scrollNavAction(){

  scrollNavButton.style.display="none";
  revealedNav.style.display="block";
  revealedNav.style.opacity="0";

  setTimeout( fadeInNav, 100 );
  setTimeout( scrollovercover, 20 );
}

function showscrollnav(){
  revealedNav.style.display="none";
  scrollNavButton.style.display="flex";
}

function hidescrollnav(){
  console.log("elo")
  revealedNav.style.display="block";
  revealedNav.style.opacity =0;
  scrollNavButton.style.display="none";
  fadeInNav();
}

function scrollovercover(){

  document.body.scrollTop += 0.5*hunit;

let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

                   //console.log(document.body.scrollTop, limit)
  if(document.body.scrollTop<tbh && document.body.scrollTop < limit-window.innerHeight) setTimeout(scrollovercover, 20);
}

function fadeInNav(){

  let num = parseFloat(revealedNav.style.opacity) + 0.1;
  revealedNav.style.opacity = num;

  if(num<1) setTimeout( fadeInNav, 100 );
}

function fadeOutNav(){

  let num = parseFloat(revealedNav.style.opacity) - 0.1;
  revealedNav.style.opacity = num;

  if(num>0) setTimeout( fadeOutNav, 40 );
  else{
    showscrollnav();
  }
}



function reachPage(){
  window.location.href="index.html"
}

let isFr = false;
function toggleLanguage(){
  isFr = !isFr;
  console.log(isFr)
  updateLanguage();

}



function navupdate(){
  //console.log("ey")
  navctx.fillStyle="#61a5ff33"
  navctx.fillRect(0,0,navcanvas.width,navcanvas.height);
  if(navtarget!=undefined){
    if(navx+navvel<navtarget) navx+=navvel;
    else if(navx-navvel>navtarget) navx-=navvel;
    else navx=navtarget;
    navctx.fillStyle="#f888";
    navctx.fillRect(navx,0,40,2);
  }
}
function navfx2(){
  navtarget=undefined;
}
function navfx(index){
  let el = document.getElementById("n"+index);
  let box = el.getBoundingClientRect();
  navtarget = box.left;
}





/* checkurl()
on page load, check current url for a category or project selection
then apply desired settings
*/
function checkURL(){

  let url = starturl;

  let categoryIndex = url.indexOf("?category=");
  let projectIndex = url.indexOf("?selected=");

  if(categoryIndex!=-1){
    let cat = url.substring(categoryIndex+10, url.length);
    if(projectIndex!=-1){
      cat = url.substring(categoryIndex+10,projectIndex);
    }

    //console.log("category selection:")
    //console.log(cat);

    cat=cat.replace("_"," ");
    let i=subjects.indexOf(cat);
    if(i!=-1) selectSubject(i);
  }
  if(projectIndex!=-1){
    let proj = url.substring(projectIndex+10,url.length);
    proj=proj.replace("_"," ");

    while(proj.indexOf("_")>=0)
    proj=proj.replace("_"," ");
    //console.log("project selection:");
    //console.log(proj);
    let index=-1;
    for(let i=0; i<projectDescriptions.length; i++){
      let p = projectDescriptions[i];
      if(p.title==proj) index=i;
    }

    if(index!=-1){
      expandProject(index);
      reachPopup();
    }

  }
}

// populateprojectslist()
//
// so far not used LOL
// but this would be used to sort all projects by date,
// then append them to page.
// intended for the larger projects list on resume page.

function populateProjectsList(){

  let projectsSortedByDate = [0];
  for(let i=1; i<projectDescriptions.length; i++){
    let p = projectDescriptions[i];
    let placed = false;
    for(let j=0; j<projectsSortedByDate.length; j++){
      let p2 = projectDescriptions[projectsSortedByDate[j]];
      if(!placed){
        if( p.date[2]<p2.date[2] ) placed=true;
        else if ( p.date[2]==p2.date[2] &&p.date[1]<p2.date[1] )
        placed=true;
        else if(
          p.date[2]==p2.date[2]
          &&p.date[1]==p2.date[1]
          &&p.date[0]<p2.date[0]
        ) placed=true;

        if(placed) projectsSortedByDate.splice(j,0,i);

      }
    }
    if(!placed) projectsSortedByDate.push(i);
  }

  projectsSortedByDate=projectsSortedByDate.reverse();

  for(let i=0; i<projectsSortedByDate.length; i++){
    let p = projectDescriptions[projectsSortedByDate[i]];

    let div = document.createElement("div");
    div.classList.add("resumeListElement");
    let date = getDate(p.date);
    div.innerHTML = `- ${p.title}. ${date}.`;
    document.getElementById("bodySection").appendChild(div);
  }
}

// createcoverbox()
//
// create box containing page title,
// and also append the video element to the page.

function createCoverBox(){

  coverbox=document.getElementById("coverSection");
  if(coverbox==undefined) coverbox=document.getElementById("coverSectionSmall");

  // fix cover page size if mobile (max vh is actually less than 100 lol wtf)
  if(isMobile) coverbox.style.height=MobileCoverSectionHeight;



  // page title element
  coverbox.innerHTML=`
  <div id="coverTitleBox">
  <div class="coverTitle1"><span id="titletxt1" class="coverlogo logoS">SAMUEL PARÉ-CHOUINARD</span><span id="logopt2"></span></div>
  <div id="titletxt2" class="coverTitle2">portfolio</div>
  </div>`;

  // video element
  createVideo("images/Sequence_01_1.mp4");

  // create some pointers
  coverTitleDiv=document.getElementsByClassName("coverTitle1")[0];
  coverBlackSpan = document.getElementsByClassName("coverlogo")[0];
  coverWhiteSpan=document.getElementById("logopt2");
  coverTitleParent=document.getElementById("coverTitleBox");
  coverSubtitle = document.getElementsByClassName("coverTitle2");
  updateTBH();
}

function updateTBH(){
  //if(pageIs=="home") return 9*hunit;
  //else return 8*hunit;
  return tbh = document.getElementById("coverVideo").getBoundingClientRect().height;
}




// populateBody()
//
// create a list of subjects using project descriptions data.
// called in start().

function populateBody(){
  console.log("populate body")
  // populate subjects list
  selectSubject(0);
  for(let i=0; i<projectDescriptions.length; i++){
    let p = projectDescriptions[i];
    if(p.featuredIn!=undefined)
    // populate subjects list
    for(let j=0; j<p.featuredIn.length; j++){
      if(!subjects.includes(p.featuredIn[j]))
      subjects.push(p.featuredIn[j])
    }
  }
  // create ui for subject selection
  //updateSubjectsBox();
}


// updateSubjectsBox()
//
// create ui buttons for button selection.
// called in populateBody()

function updateSubjectsBox(){
  subjectsbox.innerHTML="";
  for(let i=0; i<subjects.length; i++){

    // en box
    let tempbox = document.createElement("span");
    tempbox.classList.add("subjectbox");
    tempbox.classList.add("en");
    subjectsbox.appendChild(tempbox);
    tempbox.innerHTML=subjects[i].toUpperCase();
    tempbox.setAttribute("onclick",`selectSubject(${i})`);

    // fr box
    let tempbox2 = document.createElement("span");
    tempbox2.classList.add("subjectbox");
    tempbox2.classList.add("fr");
    subjectsbox.appendChild(tempbox2);
    tempbox2.innerHTML=traductionSubjectBox(subjects[i]).toUpperCase();
    tempbox2.setAttribute("onclick",`selectSubject(${i})`);

    // display selection
    if(subjects[i]==featureSelection){
      tempbox.classList.add("selectedSubject")
      tempbox2.classList.add("selectedSubject")
    }

    if(isFr) tempbox.classList.add("hidden");
    else tempbox2.classList.add("hidden");
  }
}

// traductionsubjectbox()
//
// traduit les grandes categories

function traductionSubjectBox(input){
  input=input.toLowerCase();
  if(input=="game design") return "Conception de jeu";
  if(input=="game sound") return "Conception sonore";
  if(input=="programming") return "Programmation";
}

// showLess()
//
// displays only featured projects from selected subject (feature selection)
// called when ui button is pressed

function showLess(){
  let index=subjects.indexOf(featureSelection);
  selectSubject(index,true);
}

// showMore()
//
//  displays more projects from selected subject (feature selection)
// called when ui button is pressed.

function showMore(){
  bodycontentsbox.innerHTML="";
  let featuredprojectcount =0;
  let taggedprojectcount =0;
  amtThingsShown +=4;
  for(let i=0; i<projectDescriptions.length; i++){
    if(i<amtThingsShown){
      let p = projectDescriptions[i];

      addProjectBox(p,i,false);
      featuredprojectcount++;
    }

  }

  // update show/hide button
  if(amtThingsShown>=projectDescriptions.length){
    showmoresection.hidden=true;
    showlesssection.hidden=false;
  }

  // update page scroll
  bodycontentsbox.scrollIntoView();
  //document.body.scrollTop -= 40;
}

// triggerShowBoxMeta()
//
// trigger text fade-in on a project box
// called on box's mouseenter event

function triggerShowBoxMeta(index){
  //console.log("show!")
  boxStatus[index]="show";
  showBoxMeta(index);
}

// triggerHideBoxMeta()
//
// trigger text fade-out on a project box
// called on box's mouseleave event

function triggerHideBoxMeta(index){
  //console.log("hide")
  boxStatus[index]="hide";
  hideBoxMeta(index);
}

// showBoxMeta()
//
// update box opacity so as to display it.
// repeats until cancelled or fully displayed.
// starts in triggerShowBoxMeta().

function showBoxMeta(index){

  if(boxStatus[index]=="show"){
    let box = document.getElementById("box"+index);
    let num = parseFloat(box.style.opacity) + 0.1;
    box.style.opacity = num;

    if(box.style.opacity<1)
    setTimeout(showBoxMeta, 40, index);
  }
}

// hideBoxMeta()
//
// increment box opacity so as to hide it.
// repeats until cancelled or fully hidden.
// triggered in triggerHideBoxMeta()

function hideBoxMeta(index){

  if(boxStatus[index]=="hide"){
    let box = document.getElementById("box"+index);
    let num = parseFloat(box.style.opacity) - 0.1;
    box.style.opacity = num;

    if(box.style.opacity>0)
    setTimeout(hideBoxMeta, 40, index);
  }
}


// addProjectBox()
//
// add project box to html with the correct size,
// image, hidden meta element, and mouse hover & click events.

function addProjectBox(p,index,isbigbox){

  if(p.skip==undefined||(p.skip!=undefined&&p.skip==false)){
    let tempbox = document.createElement("div");
    tempbox.classList.add("featurebox");
    bodycontentsbox.appendChild(tempbox);

    // add image
    let img = document.createElement("img");
    if(p.coverImage!=undefined) img.src="images/"+p.coverImage;
    else if (p.imageGallery!=undefined) img.src="images/"+p.imageGallery[0]
    else img.src="images/"+p.iconImage;
    img.style.objectFit="cover";
    img.style.borderRadius="2px";
    img.classList.add("pboximg");

    // img container
    let tempbox2 = document.createElement("div");
    tempbox2.classList.add("pboximg");
    tempbox2.appendChild(img);
    tempbox.appendChild(tempbox2);

    // "overlay" is now the description text below the box
    boxoverlay = document.createElement("div");
    boxoverlay.classList.add("boxoverlay");

    let truncatedtxt =  "<div class='tagz f4'>"+(getTagData(index)) + "</div>";
    truncatedtxt += "<br>";

    if(p.shortDescription!=undefined) truncatedtxt += "<span>"+p.shortDescription+ "</span>";
    else if(p.fullDescription.length>100)
    truncatedtxt += p.fullDescription.substring(0,100)+"...";
    else truncatedtxt+=p.fullDescription;

    boxoverlay.innerHTML = `
    <div class='boxoverlayTitle'>${p.title}</div>
    <div class='boxoverlayBody'>${truncatedtxt}</div>
    `;

    boxoverlay.id="box"+index;

    //boxoverlay.setAttribute("onmouseenter",`triggerShowBoxMeta(${index})`);
    //boxoverlay.setAttribute("onmouseleave",`triggerHideBoxMeta(${index})`);
    tempbox.setAttribute("onclick",`expandProject(${index})`);
    tempbox.appendChild(boxoverlay);
  }

}


function checkResize(){/*
  if(resized&&lastH!=window.innerHeight){
    lastH=window.innerHeight;
    let size=hunit*featureboxsize/10;
    let boxes=document.getElementsByClassName("pboximg");
    for(let i=0; i<boxes.length; i++){
      boxes[i].width=size;
      boxes[i].height=size;
    }
  }
  */
  resized=false;
}

// updateCurrentURL()
//
// update url in the address bar.
// called when a project is selected or un selected,
// or when a feature subject is selected.

function updateCurrentURL(){

  let currenturl=starturl;
  //console.log(currenturl);
  let url = currenturl.substring(0,currenturl.indexOf(".html")+5);
  if(currenturl.indexOf(".html")==-1){
    let qmark =currenturl.indexOf("?");
    if(qmark!=-1)
    url = currenturl.substring(0,qmark);
    else url = currenturl;
  }
  let category=featureSelection.replace(" ","_");

  url+="?category="+category;
  let selection="";
  if(selectedProject!=undefined)
  selection="?selected="+selectedProject.replace(" ","_");

  url+=selection;

  //console.log(url)
  window.history.pushState("","last page",url);

}

// getTagData()
//
// given a project index, return all its tags in one string.

function getTagData(index){
  let p = projectDescriptions[index];
  let tags= "";
  for(let i=0; i<p.tags.length; i++){
    let ending = ", "
    if(i==p.tags.length-1) ending=".";

    tags +=p.tags[i]+ending;
  }
  return tags;
}

// listElementsInAString()
//
// convert a given array to string form separated with "<br>-"
// a separator can be provided but isn't required

function listElementsInAString(arr,sep){

  let result="";
  let separator = "<br>- ";
  if(sep!=undefined) separator = sep;

  for(let i=0 ;i<arr.length; i++){
    result += separator+arr[i];
  }
  return result;
}



/*
reachpopup()
scroll to the "popup" section on the page
*/

function reachPopup(){

  popupsection.scrollIntoView();

  if(popupoffsetted)
    document.body.scrollTop -= 2*navHeight+popupSpaceBelowTitle;
  else document.body.scrollTop -= navHeight;

  scrollevent();
}



/*
function GET DATE
returns date in string form given a 3-part date array
*/
let popupshown=false;
function getDate(data){
  let month="";
  if(!isFr){
    switch(data[1]){
      case 1: month="January"; break;
      case 2: month="February"; break;
      case 3: month="March"; break;
      case 4: month="April"; break;
      case 5: month="May"; break;
      case 6: month="June"; break;
      case 7: month="July"; break;
      case 8: month="August"; break;
      case 9: month="September"; break;
      case 10: month="October"; break;
      case 11: month="November"; break;
      case 12: month="December"; break;
    }
  }
  else {
    switch(data[1]){
      case 1: month="Janvier"; break;
      case 2: month="Février"; break;
      case 3: month="Mars"; break;
      case 4: month="Avril"; break;
      case 5: month="Mai"; break;
      case 6: month="Juin"; break;
      case 7: month="Juillet"; break;
      case 8: month="Août"; break;
      case 9: month="Septembre"; break;
      case 10: month="Octobre"; break;
      case 11: month="Novembre"; break;
      case 12: month="Décembre"; break;
    }
  }

  //return data[0] +" "+month+" "+data[2];
  return month+" "+data[2];
}

// exitpopup()
//
// collapse popup section and remove project from url

function exitpopup(){
  popupsection.hidden=true;
  popupshown=false;
  selectedProject=undefined;
  clearInterval(ssInterval);
  updateCurrentURL();
  if(pageIs=="home"||pageIs=="works")
  document.getElementById("subjectsContainer").scrollIntoView();
  //console.log(document.getElementById("bodySection").getBoundingClientRect())
  //console.log(document.body.scrollTop)
  //document.getElementById("bodyContentBox").scrollIntoView();
}

// selectSubject()
//
// update url and project boxes at bottom of home page
// according to user's subject selection.
// should be called on load and when user clicks a subject box (button).
// NEEDS FIX: called 3 times on load. feels like overkill.

function selectSubject(index){
  console.log("select subject!")
  featureSelection = subjects[index];
  amtThingsShown = 4;
  //updateSubjectsBox();
  bodycontentsbox.innerHTML="";
  let featuredprojectcount =0;
  let taggedprojectcount =0;
  for(let i=0; i<projectDescriptions.length; i++){
    if(featuredprojectcount<amtThingsShown){
      let p = projectDescriptions[i];

      addProjectBox(p,i,true);
      featuredprojectcount++;
    }


    taggedprojectcount ++;
  }

  if(featuredprojectcount<taggedprojectcount) showmoresection.hidden=false;
  else showmoresection.hidden=true;
  showlesssection.hidden=true;

  updateCurrentURL();
}

// showSelectedTag()
//
// called in old loadPage() function.
// not in use.

function showSelectedTag(){

  for(let i=0; i<tagList.length; i++){
    if(tagList[i].div.classList.contains("selectedText")) tagList[i].div.classList.remove("selectedText");
    if(tagList[i].div.innerHTML==selectedTag) tagList[i].div.classList.add("selectedText");
  }
  if(sortBy=="date"){
    if(doc.nameButton.classList.contains("selectedText")) doc.nameButton.classList.remove("selectedText");
    doc.dateButton.classList.add("selectedText");
  }
  else if(sortBy=="name"){
    if(doc.dateButton.classList.contains("selectedText")) doc.dateButton.classList.remove("selectedText");
    doc.nameButton.classList.add("selectedText");
  }
}

// loadEntries()
//
// not in use.

function loadEntries(){

  for(let i=0; i<projectDescriptions.length; i++){
    entries.push(new Entry(projectDescriptions[i]));
  }
}


/*
function createTagList(){



for(let i=0; i<entries.length; i++){

for(let j=0; j<entries[i].info.tags.length; j++){
if(entries[i].info.tags[j]!="Programming"
&&entries[i].info.tags[j]!="Sound Design"
&&entries[i].info.tags[j]!="Game Design"){
let found = tagList.some(el => el.tag === entries[i].info.tags[j]);
if(!found) tagList.push({div:0, tag:entries[i].info.tags[j], iscategory:false});
}
}
}

tagList.unshift({div:0, tag:"Programming", iscategory:true},{div:0, tag:"Sound Design", iscategory:true}, {div:0, tag:"Game Design", iscategory:true});
tagList.unshift({div:0, tag:"all", iscategory:false});

for(let i=0; i<tagList.length; i++){
if(!tagList[i].iscategory)
tagList[i].div = makeDiv({class:"tagListElement", id:"tag"+i, content: tagList[i].tag, clickEvent:"tagClicked('"+tagList[i].tag+"')" });
else
tagList[i].div = makeDiv({class:"tagListElement tagListElementCategory", id:"tag"+i, content: tagList[i].tag, clickEvent:"tagClicked('"+tagList[i].tag+"')" });
doc.tagList.appendChild( tagList[i].div );
}
}
*/


// loadPage()
//
// old start() function.
// not in use. see start().

function loadPage(){

  emptyPage();
  getTagFromURL();
  setupMenuText();
  sortedEntries = sortElements();

  for(let i=0; i<sortedEntries.length; i++){
    entries[ sortedEntries[i] ].addEntry();
  }

  //  displayImages();

  showSelectedTag();
}

// getTagFromURL()
//
// not in use. see checkURL().

function getTagFromURL(){

  let url = window.location.href;

  let param = url.split("?");

  console.log(param);

  if(param.length==2&&param[1].length>4){
    let tag = param[1].substring(4,param[1].length).toLowerCase().replace("_"," ");

    console.log("tag is "+tag);

    for(let i=0;i<projectDescriptions.length; i++){
      for(let j=0; j<projectDescriptions[i].tags.length; j++){
        console.log("checking ",projectDescriptions[i].tags[j]);
        if(projectDescriptions[i].tags[j].toLowerCase()==tag){
          selectedTag = projectDescriptions[i].tags[j];
          console.log("matched")
        }

      }
    }
  }
}

// setURL()
//
// not in use. see updateCurrentURL().
// set window url to include a tag.

function setURL(input){

  let url = window.location.href;

  let params = url.split("?");
  let tag = "?tag="+input.replace(" ","_");

  window.location.href = params[0]+tag;
  //location.reload();
}

// setupMenuText()
//
// not in use. was for "menu" section on left side of screen but that's gone now.

function setupMenuText(){

  //let menuText="All projects:";
  //  if(selectedTag!="all") menuText = "Projects tagged with: "+selectedTag;
  let menuText = "Jump to:";
  doc.menuText.innerHTML = menuText;
}

// emptyPage()
//
// not in use. clear page elements before loading new.

function emptyPage(){

  doc.wall.innerHTML = "";
  doc.results.innerHTML = "";
  for(let i=0; i<entries.length; i++){
    entries[i].coverImageDisplayed = false;
  }
}

// tagClicked()
//
// tag list not in use.

function tagClicked(input){
  //console.log("tag lcicked")
  doc.wall.scrollTop=0;

  selectedTag=input;
  setURL(input);
}

// menuElementClicked()
//
// menu not in use.

function menuElementClicked(name){

  loadImages = true;
  for(let i=0; i<entries.length; i++){
    if(entries[i].info.title==name){
      doc.wall.scrollTop= entries[i].wallElement.offsetTop-window.innerHeight/20; // ?? gotta adjust this if wall formatting changes brodog
    }
  }
}

/* IMAGE GALLERY CODE */

// galleryImageClicked()
//
// displays image gallery element and selected image.

function galleryImageClicked(e,entry,index){

  gallerySelection.entry = entry;
  gallerySelection.index= index;

  e = e || window.event;
  var target = e.target || e.srcElement,
  text = target.textContent || target.innerText;

  //console.log(e.target)

  let styleString = e.target.getAttribute("style");
  let thisurl = "images/"+projectDescriptions[entry].imageGallery[index];

  doc.galleryView.style.display="flex";

  updateGalleryImageCounter();
  updateImageViewer(thisurl);
  //e.target.setAttribute("style", `background-image:url('${thisurl}');background-position:center;width:90%;height:90%;display:inline-block;`);
}

// updateGalleryImageCounter()
//
// update on screen display showing position within image gallery

function updateGalleryImageCounter(){
  let l=projectDescriptions[gallerySelection.entry].imageGallery.length;
  let i=gallerySelection.index+1;
  doc.galleryCounter.innerHTML = i+" / "+l;
}

// closeGalleryView()
//
// hide image gallery ui

function closeGalleryView(){
  doc.galleryView.style.display="none";
}

// nextImage()
//
// image gallery controls called on pressing 'right' button (>)

function nextImage(){

  if( gallerySelection.index+1 < projectDescriptions[gallerySelection.entry].imageGallery.length ){
    gallerySelection.index++;
    updateGalleryImageCounter()
    updateImageViewer( "images/"+projectDescriptions[gallerySelection.entry].imageGallery[gallerySelection.index]);
  }
}

// previousImage()
//
// image gallery controls called on pressing 'left' button (<)

function previousImage(){

  if( gallerySelection.index-1 >=0 ){
    gallerySelection.index--;
    updateGalleryImageCounter()
    updateImageViewer( "images/"+projectDescriptions[gallerySelection.entry].imageGallery[gallerySelection.index]);
  }
}

// updateImageViewer()
//
// update image element

function updateImageViewer(imageUrl){
  doc.imageViewer.innerHTML= "<img src='"+imageUrl+"' style='max-height:75%;max-width:85%;display:block; margin-left:auto; margin-right:auto;'>";
}

// makeDiv()
//
// not in use.

function makeDiv(makeup){

  let div= document.createElement('div');
  if(makeup.class!=undefined) div.setAttribute('class', makeup.class);
  if(makeup.id!=undefined) div.id=makeup.id;
  if(makeup.content!=undefined) div.innerHTML = makeup.content;
  if(makeup.clickEvent!=undefined) div.setAttribute('onclick', makeup.clickEvent);
  return div;
}

// sortByDate()
//
// not in use.

function sortByDate(){
  sortBy="date";
  localStorage.setItem('samsitesortingoption', 'date');
  location.reload();
}

// sortByName()
//
// not in use.

function sortByName(){
  sortBy="name";
  localStorage.setItem('samsitesortingoption', 'name');
  location.reload();
}
