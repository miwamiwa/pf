function uncollapseEl(index){
  entries[index].uncollapse();
  console.log("YO")
}



let arrowchar = '⇨';
function collapseEl(index){
    entries[index].collapse();
    lastSelection=-1;
}

function followlink(index,i){
  console.log("yo",index,i)
  entries[index].evt = document.createEvent("MouseEvents");
  //the tenth parameter of initMouseEvent sets ctrl key
  entries[index].evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);

  let a = document.getElementById('linkey'+i);
  a.href = entries[index].info.externalLinks[i].link;
  a.dispatchEvent(entries[index].evt);
}

const descriptionTruncLength = 100;
let lastSelection=-1;

class Entry{

constructor(input){

  Entry.instances = (Entry.instances||0)+1;
  this.i =Entry.instances-1;
  this.info=input;
  //this.added = false;
  this.added = false;
}

addEntry(){
  if(!this.added){
    this.wallElement= makeDiv({ class:"collapsedWallElement w3-animate-opacity", id:"wallEntry"+this.i, content:"" });
    doc.wall.appendChild(this.wallElement);
    this.added = true;
  }
  this.addMenuElement();
  this.addCollapsedWallElement();
//  this.addWallElement();
}

addMenuElement(){

  this.menuElement= makeDiv({ class:"menuElement w3-animate-opacity", id:"menuEntry"+this.i, content:"- "+this.info.title, clickEvent:"menuElementClicked('"+this.info.title+"')" });
  doc.results.appendChild(this.menuElement);
}

addCollapsedWallElement(){

  let tags = this.getTags(false);
  let date = this.getDate();
  let iconImg = "";

  let img = this.info.coverImage;
  if(this.info.iconImage!=undefined) img = this.info.iconImage;

  if(this.info.coverImage!=undefined||this.info.coverVideo!=undefined)//{
    iconImg = "<div class='iconImageContainer'>"+"<img src='images/"+img+"' class='iconImage w3-animate-opacity'>"+"</div>";

  let links = this.getLinks2();
  let description = this.info.fullDescription;
  description = description.substring(0,descriptionTruncLength) + "... <span class='expandInstruction'>(expand)</span>";
  description = description.replace("<br>","")
  let content = `${iconImg}
  <div onclick='uncollapseEl(${this.i})' class='collapsedRightSide clickableCollapsed'>${this.info.title}
  <br><span class='collapsedTags clickableCollapsed' id='taglist${this.i}'>${tags}</span>
  <br>
  <svg width="500" height="1">
  <path id="path${this.i}" d="M 0 0 L 500 0" stroke="#8887" stroke-width="1" fill="#0000" />
  </svg>
   <div class='collapsedDescription clickableCollapsed'>
  ${description}</div>
  <br>${links}</div>
  `;
  this.wallElement.innerHTML = content;

  let listEl = document.getElementById('taglist'+this.i);
  let listRect = listEl.getBoundingClientRect();
  let pathEl = document.getElementById('path'+this.i);

  let w = Math.min( listRect.width + 45, 450 );
  pathEl.setAttributeNS(null,"d","M 5 0 L "+w+" 0")

}

uncollapse(){
  //console.log("UNCOLLAPSE "+this.info.title);
  this.wallElement.setAttribute("class","wallElement w3-animate-opacity");
  this.addWallElement();
  this.wallElement.scrollIntoView();

  if(lastSelection!=-1) entries[lastSelection].collapse();
  lastSelection = this.i;
}

collapse(){
  //console.log("UNCOLLAPSE "+this.info.title);

  this.wallElement.setAttribute("class","collapsedWallElement w3-animate-opacity");
  this.addCollapsedWallElement();
}

getTags(clickable){
  let result = "Tags: ";
  let classcontent = "clickable wallElementTag";
  let onclickcontent='tagClicked("${this.info.tags[i]}")';
  if(!clickable){
    classcontent = "wallElementTag";
    onclickcontent ="";
  }
  for(let i=0; i<this.info.tags.length; i++){
      result += `<span class='${classcontent}' onclick='${onclickcontent}'>${this.info.tags[i]}</span>`;
      if(i<this.info.tags.length-1) result+=", ";
      else result +=". ";
  }

  return result;
}

getDate(){
  let month="";
  switch(this.info.date[1]){
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
  return this.info.date[0] +" "+month+" "+this.info.date[2];
}

getLinks(){
  let result="";
  if(this.info.externalLinks!=undefined){

    result =  "<div class='externalLinksBox'> <div class='externalLinksDescription'>External Links:</div>";
    for(let i=0; i<this.info.externalLinks.length; i++){
      result+= "<div class='externalLinkEntry'>"+arrowchar+" "
      +"<a  target='_blank' id='linkey"+i+"' class='externalLinkText' href='"+this.info.externalLinks[i].link+"'>"
      +this.info.externalLinks[i].title
      +"</a></div>";
    }
  }
  return result;
}




getLinks2(){
  let result="";
  if(this.info.externalLinks!=undefined){

    result =  "<div class='externalLinksBox2'> ";
    for(let i=0; i<Math.min(this.info.externalLinks.length,2); i++){
      result+= "<div class='externalLinkEntry2'>"+arrowchar+" "
      +"<a target='_blank' class='externalLinkText2' href='"
      +this.info.externalLinks[i].link
      +"'>"
      +this.info.externalLinks[i].title
      +"</a></div>";
    }
  }
  return result;
}

addWallElement(){

  let tags = this.getTags(true);
  let date = this.getDate();

  let coverImg = "";
  if(this.info.coverImage!=undefined||this.info.coverVideo!=undefined){
    coverImg = "<div class='coverImageContainer'></div>";
  //  this.coverImageDisplayed = false;
  }

  let imgGallery="";

  if(this.info.imageGallery!=undefined){

    imgGallery=`<div class="imageGalleryDescription">Images:</div><div class="imageGalleryContainer">`;

    for(let i=0; i<this.info.imageGallery.length; i++){

      let sourceImage = "images/"+this.info.imageGallery[i];

      imgGallery += `
      <div onclick="galleryImageClicked(0,${this.i},${i})" style="background-image:url('images/${this.info.imageGallery[i]}');background-position:center;width:100px;height:100px;display:inline-block;" ></div>
      `;
    }

    imgGallery +="</div>";
  }

  let soundcloudElement = "";

  if(this.info.soundcloudLink!=undefined){

    soundcloudElement = "<div class='soundcloudContainer'></div>";
  }

  if(this.info.coverImage!=undefined){
    //console.log("display")
  //  let container = entries[i].wallElement.getElementsByClassName("coverImageContainer");
  //  entries[i].coverImageDisplayed = true;
  //  console.log("append image",entries[i].info.coverImage)
    coverImg = "<img src='images/"+this.info.coverImage+"' class='coverImage w3-animate-opacity'>"

  //  container[0].setAttribute("class","loadedImageContainer");
  }
  else if(this.info.coverVideo!=undefined){

  //  let container = entries[i].wallElement.getElementsByClassName("coverImageContainer");
  //  entries[i].coverImageDisplayed = true;

    coverImg = "<div class='coverVideo w3-animate-opacity'>"+this.info.coverVideo+"</div>";

  //  container[0].setAttribute("class","loadedImageContainer");
  }

  let externalLinks = this.getLinks();

  let content = `
  <div class="wallElementTitle clickableCollapsed" onclick='collapseEl(${this.i})'> ${this.info.title} <span class='expandInstruction'>(collapse)</span><span class="wallElementDateBox"> ${date} </span> </div>

  <div class="wallElementTagList"> ${tags} </div>
  ${coverImg}
  <div class="wallElementDescription"> ${this.info.fullDescription} </div>
  ${soundcloudElement}
  ${imgGallery}
  ${externalLinks}
  `;
  this.wallElement.innerHTML = content;


//  this.wallElement.setAttribute('onclick','collapseEl('+this.i+')');
//  doc.wall.appendChild(this.wallElement);
}
}
