let lastMouseX =-1;
let lastMouseY =-1;
let swipeXThreshold = 300;
let swipeYThreshold = 400;

// called in resize()
function updateTouchThresholds(){
  swipeXThreshold = width * 0.45;
  swipeYThreshold = height * 0.35;
}

function touchStart(e){
  console.log("touch start");
  lastMouseX = e.touches[0].clientX;
  lastMouseY = e.touches[0].clientY;
}

function touchEnd(e){
  console.log("touch end");
  console.log(lastMouseX, lastMouseY, e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  if(lastMouseX-e.changedTouches[0].clientX>swipeXThreshold) swipeLeft();
  else if(e.changedTouches[0].clientX-lastMouseX>swipeXThreshold) swipeRight();
  if(lastMouseY-e.changedTouches[0].clientY>swipeYThreshold) swipeUp();
  else if(e.changedTouches[0].clientY-lastMouseY>swipeYThreshold) swipeDown();
}

function swipeLeft(){
  console.log("swiped left");
  goLeft();
}

function swipeRight(){
  console.log("swiped right");
  goRight();
}

function swipeUp(){
  console.log("swiped up");
}

function swipeDown(){
  console.log("swiped down");
}
