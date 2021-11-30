// populatenav()
//
// add nav bar elements to the page

function populateNav(){
  navBar.innerHTML = `
  <canvas id="navcanvas"></canvas>
  <div id="scrollingnav" onclick="scrollNavAction()">
  v v v
  </div>
  <div id="revealednav">
  <div id="navHeader">
  <div class="navlogo logoS" onclick="reachPage('index.html')">S</div> </div>
  <!-- nav buttons -->
  <div id="navBody" onmouseleave="navfx2()">
  <a id="n0" class="navButton" onmouseenter="navfx(0)" href="works.html">
  <span class="en">WORKS</span><span class="fr">PROJETS</span>
  </a>

  <a id="n1" class="navButton" onmouseenter="navfx(1)" href="about.html">
  <span class="en">ABOUT</span><span class="fr">À PROPOS</span>
  </a>

  <span id="n4" class="navButton" onmouseenter="navfx(4)" onclick="toggleLanguage()">
  <span class="en">FR</span><span class="fr">EN</span></span>
  </div>
  </div>
  `;

  scrollNavButton = document.getElementById("scrollingnav");
  revealedNav = document.getElementById("revealednav");
  navcanvas = document.getElementById("navcanvas");
  navLogoElement = document.getElementById("navHeader");
  navbody = document.getElementById("navBody");
  navcanvas.width=window.innerWidth;
  navcanvas.height=2;
  navctx=navcanvas.getContext("2d");
  navHeight = navBar.getBoundingClientRect().height;

  setInterval(navupdate,50);
}
