class Entry{

constructor(input){

  Entry.instances = (Entry.instances||0)+1;
  this.i =Entry.instances-1;
  this.info=input;

}

addEntry(){
  this.addMenuElement();
  this.addWallElement();
}

addMenuElement(){

  this.menuElement= makeDiv({ class:"menuElement w3-animate-opacity", id:"menuEntry"+this.i, content:"- "+this.info.title, clickEvent:"menuElementClicked('"+this.info.title+"')" });
  doc.results.appendChild(this.menuElement);
}

addWallElement(){

  let tags = "Tags: ";

  for(let i=0; i<this.info.tags.length; i++){
      tags += `<span class='wallElementTag' onclick='tagClicked("${this.info.tags[i]}")'>${this.info.tags[i]}</span>`;
      if(i<this.info.tags.length-1) tags+=", ";
      else tags +=". ";
  }

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
  let date = this.info.date[0] +" "+month+" "+this.info.date[2];

  let coverImg = "";
  if(this.info.coverImage!=undefined||this.info.coverVideo!=undefined){
    coverImg = "<div class='coverImageContainer'></div>";
    this.coverImageDisplayed = false;
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

  let externalLinks = "";
  if(this.info.externalLinks!=undefined){

    externalLinks =  "<div class='externalLinksBox'> <div class='externalLinksDescription'>External Links:</div>";
    for(let i=0; i<this.info.externalLinks.length; i++){
      externalLinks+= "<div class='externalLinkEntry'>- "
      +"<a class='externalLinkText' href='"
      +this.info.externalLinks[i].link
      +"'>"
      +this.info.externalLinks[i].title
      +"</a></div>";
    }
  }

  let content = `
  <div class="wallElementTitle"> ${this.info.title} </div>
  <div class="wallElementDateBox"> ${date} </div>
  <div class="wallElementTagList"> ${tags} </div>
  ${coverImg}
  <div class="wallElementDescription"> ${this.info.fullDescription} </div>
  ${soundcloudElement}
  ${imgGallery}
  ${externalLinks}
  `;
  this.wallElement= makeDiv({ class:"wallElement w3-animate-opacity", id:"wallEntry"+this.i, content:content });
  doc.wall.appendChild(this.wallElement);
}
}
