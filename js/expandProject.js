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

  // clear and un-hide popup area
  popupsection.innerHTML = "";
  popupsection.hidden = false;

  // setup cover image element
  let coverimg = "";
  if(p.coverImage!=undefined)
  coverimg=`<div class='popupimgcontainer'>
  <img class="popupimg" src="images/${p.coverImage}"></img>
  </div>`;
  else if(p.coverVideo!=undefined)
  coverimg=p.coverVideo;

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

  <div class="popupTopPadding">
    <div class="datebox"> ${date} </div>
    <div class="tags"> ${tags} </div>
  </div>

  ${coverimg}

  <div class="popupbody">
    <div class='popupbodyitalic'></div>
    ${overviewtxt}
  </div>

  <div class="popupexternallinks">
    <div class='popupbodyitalic'>external links:</div>
    ${links}
  </div>

  `;

  if(noupdate==undefined)
  // collapse featured project list
  showLess();
  // scroll to element
  popupshown=true;
  reachPopup();
}
