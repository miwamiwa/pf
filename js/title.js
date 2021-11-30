
// styleTitle()
//
// called in scrollevent, set position and size of page title in coverbox

function styleTitle(fsize,lheight,fsize2,spacing){

  // set font size :

  coverTitleDiv.style.fontSize=fsize;
  coverSubtitle[0].style.fontSize=fsize2;

  // set line height :

  coverTitleDiv.style.lineHeight=lheight;
  coverSubtitle[0].style.lineHeight=fsize2;

  // set position :

  coverWhiteSpan.style.left=`calc(${fsize} + 15px)`;
  coverSubtitle[0].style.top=`${14*titleExpandedAmount}vh`;

  // set letter spacing :

  if(spacing!=undefined){
    coverTitleDiv.style.letterSpacing=spacing+"px";
    coverSubtitle[0].style.letterSpacing=(spacing*.5)+"px";
  }

  // set title element left-offset :

  let w = coverBlackSpan.getBoundingClientRect().width + coverWhiteSpan.getBoundingClientRect().width;
  let offset = titleExpandedAmount * ( window.innerWidth - w )/2;
  coverTitleParent.style.left=offset+"px";

  // set title element top-offset :

  if(smallmode){
    coverTitleParent.style.top=(60*titleExpandedAmount)+"vh";
    coverSubtitle[0].style.top=(14*titleExpandedAmount)+"vh";
  }
  else {
    coverTitleParent.style.top=(20*titleExpandedAmount)+"vh";
    coverSubtitle[0].style.top=(26*titleExpandedAmount)+"vh";
  }
}
