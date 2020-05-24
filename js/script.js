window.onload = start;

let entries = [];
let tagList = [];
let selectedTag = "all";
let sortBy = "date";
let sortedEntries = [];
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

let wheelState = false;
let lastWheelState = false;
let wheelTimer;
let loadImages = false;
let loop;

function mouseWheel(event){
  console.log("wheel")
  wheelState=true;
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(function(){ wheelState = false; }, 100);
}



function runLoop(){

  if( wheelState || (!wheelState&&lastWheelState) || loadImages ){

    displayImages();
  //  console.log("\n")
    loadImages = false;
  }
  lastWheelState=wheelState;
}

let maxDist = 0.8*window.innerHeight;

function displayImages(){
  for(let i=0; i<entries.length; i++){
  ////  console.log(doc.wall.scrollTop)
  if(sortedEntries.includes(i)){
    let dist = entries[i].wallElement.offsetTop - doc.wall.scrollTop;
    if(  dist > -maxDist && dist < maxDist){
    //  console.log("yeayh", i);

      if(!entries[i].coverImageDisplayed){

        if(entries[i].info.coverImage!=undefined){
          console.log("display")
          let container = entries[i].wallElement.getElementsByClassName("coverImageContainer");
          entries[i].coverImageDisplayed = true;
        //  console.log("append image",entries[i].info.coverImage)
          container[0].innerHTML = "<img src='images/"+entries[i].info.coverImage+"' class='coverImage w3-animate-opacity'>"

          container[0].setAttribute("class","loadedImageContainer");
        }
        else if(entries[i].info.coverVideo!=undefined){

          let container = entries[i].wallElement.getElementsByClassName("coverImageContainer");
          entries[i].coverImageDisplayed = true;
          container[0].innerHTML = "<div class='w3-animate-opacity'>"+entries[i].info.coverVideo+"</div>";

          container[0].setAttribute("class","loadedImageContainer");
        }

        if(entries[i].info.soundcloudLink!=undefined){

          let container = entries[i].wallElement.getElementsByClassName("soundcloudContainer");
          entries[i].coverImageDisplayed = true;
          let description="";
          if(entries[i].info.soundcloudDescription!=undefined) description = "<br><div class='soundcloudDescription'>"+entries[i].info.soundcloudDescription+"</div>";
          container[0].innerHTML = "<div class='w3-animate-opacity'>"+description+entries[i].info.soundcloudLink+"</div>";

          container[0].setAttribute("class","loadedSoundcloudContainer");
        }

      }
    }
  }

  }
}

function start(){

  let promise = new Promise(function(resolve, reject) {
    loadEntries();
    resolve();
  });

  promise.then(
    result => {

      doc.results = document.getElementById("results");
      doc.wall = document.getElementById("wall");
      doc.tagList = document.getElementById("tagpicker");
      doc.menuText = document.getElementById("menuText");
      doc.galleryView = document.getElementById("galleryView");
      doc.imageViewer = document.getElementById("galleryImageViewer");
      doc.galleryCounter = document.getElementById("galleryImageCounter");
      doc.nameButton = document.getElementById("nameButton");
      doc.dateButton = document.getElementById("dateButton");
      createTagList();
      loadPage();

    },
    error => alert(error) // doesn't run
  );

  loop = setInterval(runLoop,50);
}


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

function loadEntries(){

  for(let i=0; i<projectDescriptions.length; i++){
    entries.push(new Entry(projectDescriptions[i]));
  }
}



function createTagList(){

  tagList.push({div:0, tag:"all"});

  for(let i=0; i<entries.length; i++){

    for(let j=0; j<entries[i].info.tags.length; j++){

      let found = tagList.some(el => el.tag === entries[i].info.tags[j]);
      if(!found) tagList.push({div:0, tag:entries[i].info.tags[j]});
    }
  }

  for(let i=0; i<tagList.length; i++){

    tagList[i].div = makeDiv({class:"tagListElement", id:"tag"+i, content: tagList[i].tag, clickEvent:"tagClicked('"+tagList[i].tag+"')" });
    doc.tagList.appendChild( tagList[i].div );
  }
}




function loadPage(){

  emptyPage();
  setupMenuText();
  sortedEntries = sortElements();

    for(let i=0; i<sortedEntries.length; i++){
        entries[ sortedEntries[i] ].addEntry();
    }

    displayImages();

    showSelectedTag();
}

function setupMenuText(){

  //let menuText="All projects:";
//  if(selectedTag!="all") menuText = "Projects tagged with: "+selectedTag;
  let menuText = "Jump to:";
  doc.menuText.innerHTML = menuText;
}





function emptyPage(){

  doc.wall.innerHTML = "";
  doc.results.innerHTML = "";
  for(let i=0; i<entries.length; i++){
    entries[i].coverImageDisplayed = false;
  }

}



function tagClicked(input){
  //console.log("tag lcicked")
  doc.wall.scrollTop=0;
  selectedTag=input;
  loadPage();
}

function menuElementClicked(name){

  loadImages = true;
  for(let i=0; i<entries.length; i++){
    if(entries[i].info.title==name){
    doc.wall.scrollTop= entries[i].wallElement.offsetTop-window.innerHeight/20; // ?? gotta adjust this if wall formatting changes brodog
    }
  }
}

let gallerySelection = {entry:0,index:0};

function galleryImageClicked(e,entry,index){

gallerySelection.entry = entry;
gallerySelection.index= index;

  e = e || window.event;
      var target = e.target || e.srcElement,
          text = target.textContent || target.innerText;

  //console.log(e.target)

  let styleString = e.target.getAttribute("style");
  let thisurl = styleString.substring(styleString.indexOf("url('")+5, styleString.indexOf("');"));

  doc.galleryView.style.display="flex";

  updateGalleryImageCounter();
  updateImageViewer(thisurl);
//  e.target.setAttribute("style", `background-image:url('${thisurl}');background-position:center;width:90%;height:90%;display:inline-block;`);
}

function updateGalleryImageCounter(){
  let l=entries[gallerySelection.entry].info.imageGallery.length;
  let i=gallerySelection.index+1;
  doc.galleryCounter.innerHTML = i+" / "+l;
}

function closeGalleryView(){
  doc.galleryView.style.display="none";
}

function nextImage(){

//  console.log(gallerySelection.entry,entries[gallerySelection.entry])
  if( gallerySelection.index+1 < entries[gallerySelection.entry].info.imageGallery.length ){
    gallerySelection.index++;
    updateGalleryImageCounter()
    updateImageViewer( "images/"+entries[gallerySelection.entry].info.imageGallery[gallerySelection.index]);
  }

}

function previousImage(){

  if( gallerySelection.index-1 >=0 ){
    gallerySelection.index--;
    updateGalleryImageCounter()
    updateImageViewer( "images/"+entries[gallerySelection.entry].info.imageGallery[gallerySelection.index]);
  }
}

function updateImageViewer(imageUrl){
  doc.imageViewer.innerHTML= "<img src='"+imageUrl+"' style='max-height:75%;max-width:85%;display:block; margin-left:auto; margin-right:auto;'>";
}


function makeDiv(makeup){

  let div= document.createElement('div');
  if(makeup.class!=undefined) div.setAttribute('class', makeup.class);
  if(makeup.id!=undefined) div.id=makeup.id;
  if(makeup.content!=undefined) div.innerHTML = makeup.content;
  if(makeup.clickEvent!=undefined) div.setAttribute('onclick', makeup.clickEvent);
  return div;
}

function sortByDate(){
  sortBy="date";
  loadPage();
}

function sortByName(){
  sortBy="name";
  loadPage();
}
