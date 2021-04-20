// expandProject()
//
// expand a selected project using projectDescritions data

function expandProject(index,noupdate){



  // put together "popup" element
  let p = projectDescriptions[index];
  selectedProject = p.title.replace(" ","_");
  // update url
  if(noupdate==undefined)
    updateCurrentURL();

    clearInterval(ssInterval);
  // clear and un-hide popup area
  popupsection.innerHTML = "";
  popupsection.hidden = false;

  // setup cover image element
  let coverimg = "";

  // if there is a cover image
  if(p.coverImage!=undefined){

    // if there is no image gallery, display just the image
    if(p.imageGallery==undefined)
      coverimg=`<div class='popupimgcontainer'>
      <img class="popupimg" src="images/${p.coverImage}"></img>
      </div>`;

    // if there is an image gallery, make a slide showwww
    else {
      coverimg=makeSlideShow(p.coverImage,false,p.imageGallery);
    }
  }

  // if there is no cover image but there is a video
  else if(p.coverVideo!=undefined){

    // if there is no image gallery, display just the video
    if(p.imageGallery==undefined)
      coverimg=p.coverVideo;

    // if there is an image gallery, make a slide showwww
    else {
      coverimg=makeSlideShow(false,p.coverVideo,p.imageGallery);
    }
  }


  // get tags string
  let tags = getTagData(index);

  // get date string
  let date = getDate(p.date);

  // get links string (for footer)
  let links = "";
  if(p.externalLinks!=undefined)
  for(let i=0; i<p.externalLinks.length; i++){
    links += `<a class="popuplink" href='${p.externalLinks[i].link}'>${p.externalLinks[i].title}</a><br>`;
  }

  // setup overview text (popup body)
  let overviewtxt="";

  // if entry contains a 'featureDescription' property, display that:
  if(p.featureDescription!=undefined){
    let f = p.featureDescription;

    // create info box (above article body)
    let contrib = "<span class='fdinfotitle'>Contribution:</span> "+listElementsInAString(f.contributionDetails);
    let collaborators = "<span class='fdinfotitle'>This was a solo project.</span>";
    if(f.collaborators.length>0){
      collaborators = "<span class='fdinfotitle'>Collaborators:</span>";
      collaborators += listElementsInAString(f.collaborators);
    }
    let tools = "<span class='fdinfotitle'>Tools used:</span> "+listElementsInAString(f.tools);

    // add images in article
    let bod = f.body;
    imagesInArticle = [];
    while(bod.indexOf("%#i")>=0){
      let i = bod.indexOf("%#i");
      let j=parseInt( bod.substring(i+3,i+4) );
      imagesInArticle.push(j);
      bod = bod.substring(0,i+3) + bod.substring(i+4,bod.length);
      bod = bod.replace("%#i",`<br><br><img src="images/${p.imageGallery[j]}" class="fdImg"></img>`)
    }

    // create image gallery element with remaining images (end of article)
    let gallerytxt="";
    if(p.imageGallery!=undefined){

      gallerytxt=`<br><br>
      <div class="imageGalleryDescription">Images:</div>
      <div class="imageGalleryContainer">`;

      for(let i=0; i<p.imageGallery.length; i++){
        if(imagesInArticle.includes(i)==false){
          let sourceImage = "images/"+p.imageGallery[i];

          gallerytxt += `
          <div onclick="galleryImageClicked(0,${index},${i})" style="background-image:url('images/${p.imageGallery[i]}');background-position:center;width:100px;height:100px;display:inline-block;" ></div>
          `;
        }
      }

      gallerytxt +="</div>";
    }

    // add audio preview elements
    while(bod.indexOf("%#a")>=0){
      let i = bod.indexOf("%#a");
      let j=parseInt( bod.substring(i+3,i+4) );
      bod = bod.substring(0,i+3) + bod.substring(i+4,bod.length);
      bod = bod.replace("%#a",`<div class="fdAudioEl">${p.audioGallery[j]}</div>`)
    }

    // add line breaks
    while(bod.indexOf("%#")>=0){
      bod = bod.replace("%#",`<br>`)
    }


    overviewtxt=`
    <div class='fdBox'>

    <div class='fdInfoBox'>
      <div class='fdContribution fdinfosection'>${contrib}</div>

      <div class='fdInfoBoxRight fdinfosection'>
        <div class='fdTools'>${tools}</div> <br>
        <div class='fdContext'>
          <span class='fdinfotitle'>Context:</span>
          ${f.context}
          </div>
          </div>

      <div class='fdCollaborators fdinfosection'>${collaborators}</div>
    </div>

    <div class='fdBody'>${bod}</div>
    ${gallerytxt}
    </div>
    `;
  }

  // if this element has no 'featureDescription' property, use
  // 'fullDescription' for the body text.
  else overviewtxt=p.fullDescription;


  // get categories text (goes next to title)
  let cats = "";
  if(p.featuredIn!=undefined) cats = listElementsInAString(p.featuredIn,", ");
  cats = cats.replace(", ","");

  // add html to page:
  popupsection.innerHTML=`
  <div class="popuptitle" onclick="reachPopup()"> ${p.title}
    <span class="popupsubtitle">${cats}</span>
    <div class="exitproject" onclick="exitpopup()"> x </div>
  </div>



  ${coverimg}

  <div class="popupTopPadding">
    <div class="datebox"> ${date} </div>
    <div class="tags"> ${tags} </div>
  </div>

  <div class="popupbody">
    <div class='popupbodyitalic'></div>
    ${overviewtxt}


    <div class="popupexternallinks">
      <div class='popupbodyitalic'>external links:</div>
      ${links}
    </div>
  </div>

  `;

  updateBodyPadding();

  if(noupdate==undefined)
  // collapse featured project list
  showLess();
  // scroll to element
  popupshown=true;
  updateLanguage();
  reachPopup();
}

let slideShowElements = [];
let slideshowpos =0;
let ssInterval;
let ssel1 = undefined;
let ssel2 = undefined;
let sscounter =0;



function makeSlideShow(coverimg,covervideo,gallery){

  slideShowElements = [];
  ssel1 = undefined;
  ssel2 = undefined;
  sscounter =0;
  slideshowpos =0;

  let el1,el2;
  if(coverimg==false){
    slideShowElements.push(covervideo);
    el1=covervideo;
  }
  else {
    el1 =`<img class="popupimg" src="images/${coverimg}"></img>`;
    slideShowElements.push(el1);
  }

  for(let i=0; i<gallery.length; i++){
    let el;
    if(gallery[i].charAt(0)=='<'){
      el = gallery[i];
    }
    else {
      el = `<img class="popupimg" src="images/${gallery[i]}"></img>`;
    }

    slideShowElements.push(el);
  }

  el2 = slideShowElements[1];

  let result=`<div class='popupimgcontainer' onmousedown="pauseSlideShow()" onmouseup="continueSlideShow()"
      ontouchstart="pauseSlideShow()" ontouchend="continueSlideShow()">
  <div class="slideshowel" id="slideshowel1" style="z-index:1;">${el1}</div>
  <div class="slideshowel" id="slideshowel2" style="z-index:0;">${el2}</div>
  </div>`;

  ssInterval = setInterval(updateSlideShow, 60);
  return result;
}


function pauseSlideShow(){
    ssPaused = true;
    console.log("ss paused")
}

function continueSlideShow(){
    ssPaused = false;
    console.log("ss unpaused")
}

let ssPaused = false;
let ssIncrements = 10;
let showDuration=60;
let el1x =0;
let el2x =ssIncrements;
let transitionDuration=ssIncrements;
let sstotalduration = showDuration+transitionDuration;

function updateSlideShow(){

  if((ssVidPlaying||ssPaused) && sscounter%sstotalduration<showDuration)
    sscounter =0;
//  sstotalduration = showDuration+transitionDuration;
  if(ssel1==undefined) ssel1 = document.getElementById("slideshowel1");
  if(ssel2==undefined) ssel2 = document.getElementById("slideshowel2");

  if(ssel1!=undefined&&ssel2!=undefined){

    let t = sscounter%sstotalduration;
    let w = ssel1.getBoundingClientRect().width;

    ssel1.style.left= ( w*el1x/ssIncrements )+"px";
    ssel2.style.left= ( w*el2x/ssIncrements )+"px";
    if(t>=showDuration){
      let t2 = t-showDuration;

      el1x --;
      el2x --;

      if(el1x==-ssIncrements){
        el1x *=-1;

        let newindex=(slideshowpos+2)%slideShowElements.length;

        ssel1.innerHTML=slideShowElements[newindex];
        setupVimeoVid(ssel1);

        slideshowpos++;
      }
      if(el2x==-ssIncrements){
        el2x *=-1;
        let newindex=(slideshowpos+2)%slideShowElements.length;
        ssel2.innerHTML=slideShowElements[newindex];
        setupVimeoVid(ssel2);
        slideshowpos++;
      }
    }

    sscounter++;
  }
}


let ssVidPlaying=false;

// setupVimeoVid()
//
// this syntax using vimeo js api is needed to detect when a video is being played
function setupVimeoVid(el){
  ssVidPlaying=false;
  let iframe = el.querySelector('iframe');

  if(iframe!=undefined){
    let player = new Vimeo.Player(iframe);

    player.on('play', ()=> ssVidPlaying=true );
    player.on('bufferstart', ()=> ssVidPlaying=true );
    player.on('pause', ()=> ssVidPlaying=false );
  }
}
