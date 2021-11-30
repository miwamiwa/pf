//resize()
//
// on window resized callback
function resize(){
  resized=true;
  checkSmallMode();
  if(isMobile) coverbox.style.height="86vh";
  updateTBH();
  hunit = 0.1*window.innerHeight;
  popupSpaceBelowTitle=0.4*hunit;
  viewportW=viewport.getBoundingClientRect().width;

  updateBodyPadding();

  navbheight = 0.2*hunit+8;
  scrollevent();
  styleTitle();
}


// checkSmallMode()
//
// if window width is < 600 px, then we are smol
function checkSmallMode(){
  if(window.innerWidth<=WidthThresholdForSmallMode) smallmode=true;
  else smallmode=false;
}

// updateBodyPadding()
//
// we want a tight margin in mobile mode,
// and wide margin if the screen is wide.

function updateBodyPadding(){
  if(popupshown&&isMobile&&viewportW<WidthThresholdForPaddingChange){
    document.getElementsByClassName("popupbody")[0].style.padding="4vw"
    document.getElementsByClassName("popupimgcontainer")[0].style.marginLeft="4vw"
  }
  else if(popupshown&&viewportW<WidthThresholdForPaddingChange){
    document.getElementsByClassName("popupbody")[0].style.padding="3vw"
    document.getElementsByClassName("popupimgcontainer")[0].style.marginLeft="3vw"
  }
  else if(popupshown){
    document.getElementsByClassName("popupbody")[0].style.padding="3vw"
    document.getElementsByClassName("popupimgcontainer")[0].style.marginLeft="0vw"
  }
}
