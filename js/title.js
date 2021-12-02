const CoverTitleHeight_largemode = 45;
const CoverTitleHeight_smallmode = 45;

const CoverSubtitleHeight_largemode = 22;
const CoverSubtitleHeight_smallmode = 21;

// styleTitle()
//
// called in scrollevent, set position and size of page title in coverbox

function styleTitle(fsize,lheight,fsize2,spacing){
  //fsize *=0.5;
  //lheight *=0.5;
  // set font size :

  coverTitleDiv.style.fontSize=fsize;
  coverSubtitle[0].style.fontSize=fsize2;

  // set line height :

  coverTitleDiv.style.lineHeight=lheight;
  coverSubtitle[0].style.lineHeight=fsize2;

  // set position :

  coverWhiteSpan.style.left=`calc(${fsize} + 15px)`;
  //coverSubtitle[0].style.top=`${14*titleExpandedAmount}vh`;

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
    coverTitleParent.style.top=(CoverTitleHeight_smallmode*titleExpandedAmount)+"vh";
    coverSubtitle[0].style.top=(CoverSubtitleHeight_smallmode*titleExpandedAmount)+"vh";
  }
  else {
    coverTitleParent.style.top=(CoverTitleHeight_largemode*titleExpandedAmount)+"vh";
    coverSubtitle[0].style.top=(CoverSubtitleHeight_largemode*titleExpandedAmount)+"vh";
  }
}
