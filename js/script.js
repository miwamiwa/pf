window.onload = start;
window.onresize =resize;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let navcanvas,navctx,navtarget,navx=0,navvel=16;
let entries = [];
let tagList = [];
let selectedTag = "all";
let sortBy = "name";
let sortedEntries = [];
let selectedProject;
let compressednavwidth="90%";
let expandednavwidth="100%";
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
let navsection;
let banderollesection;
let subjectsbox;
let bodycontentsbox;
let featureSelection="Programming";
let popupsection;
let showmoresection;
let showlesssection;
let titlebox;
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
let tbh;
let hunit;
let resizeRate=300;
/*
window.onhashchange = function() {
console.log("hash change")
}
*/

let smallmode = false;
let bsize;

function resize(){
  if(window.innerWidth<=600){
    smallmode=true;
  }
  else smallmode=false;

  tbh = titlebox.getBoundingClientRect().height;
  hunit = 0.1*window.innerHeight;
  scrollevent();
}


// start()
//
// called when page loads.
// sets up pointers, creates necessary page elements.

function start(){

  lastH=window.innerHeight;
  console.log("is mobile: "+isMobile)
  setInterval(checkResize,resizeRate);
  if(isMobile){
    window.onorientationchange=resize;
  }
  /*
  let vid = document.getElementById("coverVideo");
  vid.playbackRate = 0.9;
  */

  // save url on page start. prevents defaulting to wrong page on setup
  starturl=window.location.href;
  hunit = 0.1*window.innerHeight;
  // create some pointers
  doc.galleryView = document.getElementById("galleryView");
  doc.imageViewer = document.getElementById("galleryImageViewer");
  navsection=document.getElementById("navSection");
  banderollesection=document.getElementById("banderolleSection");
  if(banderollesection!=undefined)
  bsize=banderollesection.getBoundingClientRect().height;

  subjectsbox=document.getElementById("subjectsBox");
  titlebox=document.getElementById("coverSection");
  if(titlebox==undefined) titlebox=document.getElementById("coverSectionSmall");
  tbh = titlebox.getBoundingClientRect().height;


  // create top page elements
  createCoverBox();
  populateNav();

  // bind scroll event
  window.onscroll=scrollevent;

  if(pageIs=="home"){
    bodycontentsbox=document.getElementById("bodyContentBox");
    popupsection=document.getElementById("popupSection");
    popupsection.hidden=true;
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
  if(pageIs=="home")
    checkURL();

    // place nav bar to correct height
  scrollevent();
  resize();
}

// scrollevent()
//
// called when page is scrolled.
// fixes nav bar and popup title bar positions
// if needed. Also the video parallax happens here.


function scrollevent(){

  let titleel=document.getElementsByClassName("coverTitle1")[0];
  let titleel2=document.getElementById("logopt2");
  let level2height=(0.08*window.innerHeight);

  if(document.body.scrollTop>tbh-.5*hunit){
    titleel.style.fontSize="20px";
    titleel.style.lineHeight="20px";
    titleel2.style.fontSize="20px";
    titleel2.style.lineHeight="20px";
  }
  else if(document.body.scrollTop>tbh-hunit){
    let scrollfact=( 1-
      (document.body.scrollTop-(tbh-hunit))
      /(0.05*window.innerHeight)
    );

    let fsize = 20+0.08 * window.innerHeight * scrollfact;
    let lsize = -10+2 * scrollfact;
    titleel.style.letterSpacing=lsize+"px";
    titleel.style.fontSize=fsize+"px";
    titleel.style.lineHeight=fsize+"px";

    titleel2.style.letterSpacing=lsize+"px";
    titleel2.style.fontSize=fsize+"px";
    titleel2.style.lineHeight=fsize+"px";
    //titleel2.style.left= fsize+"px";
  }

  else {
    titleel.style.fontSize="8vh";
    titleel.style.lineHeight="8vh";
    titleel.style.letterSpacing="2px";
    titleel2.style.fontSize="8vh";
    titleel2.style.lineHeight="8vh";
    titleel2.style.letterSpacing="2px";
  }

  // VIDEO PARALLAX
  document.getElementById("coverVideo").style.top =
  (-200+document.body.scrollTop/parallaxfactor) +"px";

  if(document.body.scrollTop>tbh-20){

    let t = document.getElementsByClassName("coverTitle2")[0];
    t.style.display="none";

    document.getElementById("navHeader")
      .style.top=(document.body.scrollTop - tbh)
    document.getElementById("navHeader")
        .style.display="block"

      document.getElementById("navBody").style.width=compressednavwidth;
  }


  else{
    document.getElementsByClassName("coverTitle2")[0].style.display="block";
    document.getElementById("navHeader")
      .style.display="none";
    document.getElementById("navBody").style.width=expandednavwidth;
  }
  // fix nav bar position on all pages
  if(document.body.scrollTop>tbh){
    document.getElementById("navHeader")
      .style.top=0;
      document.getElementById("navHeader")
          .style.display="block"

        document.getElementById("navBody").style.width=compressednavwidth;

    document.getElementById("coverTitleBox").style.display="none";
    navsection.style.position="fixed";
    navsection.style.top="0px";

    // if there is a banderolle section, fix banderolle position
    if(pageIs=="home")
      banderollesection.style.marginTop=level2height+"px";
    else {
      document.getElementById("bodySection").style.marginTop=level2height+"px";
    }
    // fix popup title and body positions
    if(popupshown&&document.body.scrollTop>tbh+200){
      let p=document.getElementsByClassName("popuptitle");
      p[0].style.position="fixed";
      p[0].style.top=level2height+"px";
      popupoffsetted=true;
      popupsection.style.marginTop=(level2height+20)+"px";
    }
    else if(popupshown) resetPopupSectionOffsets();

  }
  // if we've scrolled up and out of fix range, re-fix everything
  else {
    document.getElementById("navBody").style.width=expandednavwidth;
    document.getElementById("coverTitleBox").style.display="block";
    navsection.style.position="relative";
    if(pageIs=="home") banderollesection.style.marginTop="0px";
    else document.getElementById("bodySection").style.marginTop="0px";
    if(popupshown) resetPopupSectionOffsets();


  }
}


//resetpopupsectionoffsets()
//
// reset position of the popup section inside function scrollevent()
function resetPopupSectionOffsets(){
  let p=document.getElementsByClassName("popuptitle");
  p[0].style.position="relative";
  p[0].style.top="0px";
  popupoffsetted = false;
  popupsection.style.marginTop="0px";
}


// populatenav()
//
// add nav bar elements to the page

function populateNav(){
  navsection.innerHTML = `
  <canvas id="navcanvas"></canvas>

  <div id="navHeader">
  <div class="navlogo logoS">S</div> </div>
  <!-- nav buttons -->
  <div id="navBody" onmouseleave="navfx2()">
  <a id="n0" class="navButton" onmouseenter="navfx(0)" href="index.html">HOME</a>
  <a id="n1" class="navButton" onmouseenter="navfx(1)" href="about.html">ABOUT</a>

  <a id="n2" class="navButton" onmouseenter="navfx(2)" href="resume.html">CV</a>
  <a id="n3" class="navButton" onmouseenter="navfx(3)" href="contact.html">CONTACT</a>
  </div>`;


  navcanvas = document.getElementById("navcanvas");
  navcanvas.width=window.innerWidth;
  navcanvas.height=2;
  navctx=navcanvas.getContext("2d");

  setInterval(navupdate,50);
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

  // page title element
  titlebox.innerHTML=`
  <div id="coverTitleBox">
  <div class="coverTitle1"><span class="coverlogo logoS">S</span><span id="logopt2">AMUEL PARÉ-CHOUINARD</span></div>
  <div class="coverTitle2">MULTIDISCIPLINARY DIGITAL ARTIST</div>
  </div>`;

  // video element
  document.getElementById("vidcontainer").innerHTML=`<video id="coverVideo" height="100%" width="100%" autoplay muted loop >
  <source src="images/Sequence_01_1.mp4" type="video/mp4">
  </video>`;
}



// populateBody()
//
// create a list of subjects using project descriptions data.
// called in start().

function populateBody(){
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
  updateSubjectsBox();
}


// updateSubjectsBox()
//
// create ui buttons for button selection.
// called in populateBody()

function updateSubjectsBox(){
  subjectsbox.innerHTML="";
  for(let i=0; i<subjects.length; i++){
    let tempbox = document.createElement("span");
    tempbox.classList.add("subjectbox");
    if(subjects[i]==featureSelection) tempbox.classList.add("selectedSubject")
    subjectsbox.appendChild(tempbox);
    tempbox.innerHTML=subjects[i].toUpperCase();
    tempbox.setAttribute("onclick",`selectSubject(${i})`);
  }
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
  for(let i=0; i<projectDescriptions.length; i++){
    let p = projectDescriptions[i];
    if(p.tags.includes(featureSelection)) {
      // add box to page
      addProjectBox(p,i,false);
    }
  }

  // update show/hide button
  showmoresection.hidden=true;
  showlesssection.hidden=false;
  // update page scroll
  bodycontentsbox.scrollIntoView();
  document.body.scrollTop -= 40;
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
  let tempbox = document.createElement("div");
  tempbox.classList.add("featurebox");
  bodycontentsbox.appendChild(tempbox);

  let img = document.createElement("img");
  if(p.coverImage!=undefined) img.src="images/"+p.coverImage;
  else if (p.imageGallery!=undefined) img.src="images/"+p.imageGallery[0]
  else img.src="images/"+p.iconImage;
  img.style.objectFit="cover";

  if(isbigbox){
    let size = 0.3*window.innerHeight;
    img.width=size;
    img.height=size;

  }
  else {
    let size = 0.3*window.innerHeight;
    img.width=size;
    img.height=size;
    tempbox.classList.add("featureboxSmall");
  }
  img.style.borderRadius="2px";

  img.classList.add("pboximg")
  tempbox.appendChild(img);

  boxoverlay = document.createElement("div");
  boxoverlay.classList.add("boxoverlay");
  boxoverlay.style.width="30vh";
  boxoverlay.style.height="30vh";
  boxoverlay.style.opacity =0;


  let truncatedtxt = getTagData(index);
  truncatedtxt += "<br>";

  if(p.shortDescription!=undefined) truncatedtxt += p.shortDescription;
  else if(p.fullDescription.length>100)
  truncatedtxt += p.fullDescription.substring(0,100)+"...";
  else truncatedtxt+=p.fullDescription;

  boxoverlay.innerHTML = `
  <div class='boxoverlayTitle'>${p.title}</div>
  <div class='boxoverlayBody'>${truncatedtxt}</div>
  `;

  boxoverlay.id="box"+index;

  boxoverlay.setAttribute("onmouseenter",`triggerShowBoxMeta(${index})`);
  boxoverlay.setAttribute("onmouseleave",`triggerHideBoxMeta(${index})`);
  boxoverlay.setAttribute("onclick",`expandProject(${index})`);
  tempbox.appendChild(boxoverlay);
}


function checkResize(){
  if(lastH!=window.innerHeight){
    lastH=window.innerHeight;
    let size=(0.3*window.innerHeight);
    let boxes=document.getElementsByClassName("pboximg");
    for(let i=0; i<boxes.length; i++){
      boxes[i].width=size;
      boxes[i].height=size;
    }
  }
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
  let tags= "Tags: ";
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
  document.body.scrollTop -= 100;
  else document.body.scrollTop -= 40;

  scrollevent();
}



/*
function GET DATE
returns date in string form given a 3-part date array
*/
let popupshown=false;
function getDate(data){
  let month="";
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
  return data[0] +" "+month+" "+data[2];
}

// exitpopup()
//
// collapse popup section and remove project from url

function exitpopup(){
  popupsection.hidden=true;
  popupshown=false;
  selectedProject=undefined;
  updateCurrentURL();
  if(pageIs=="home")
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
  updateSubjectsBox();
  bodycontentsbox.innerHTML="";
  let featuredprojectcount =0;
  let taggedprojectcount =0;
  for(let i=0; i<projectDescriptions.length; i++){
    let p = projectDescriptions[i];
    if(p.tags.includes(featureSelection)) taggedprojectcount++;
    if(p.featuredIn!=undefined){
      if(p.featuredIn.includes(featureSelection)){
        // add box to page
        addProjectBox(p,i,true);
        featuredprojectcount++;
      }
    }
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
