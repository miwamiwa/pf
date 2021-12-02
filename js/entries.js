let projectDescriptions = [

  //****** Template *******
  /*
  {
  // titre
  title:"titre",

  // sous-titre (no longer a sorting feature)
  featuredIn:["Game Sound"],

  // date
  date:[20,12,2019],

  // background
  bgImg: "lp/02.png", // ou bien bgVid:"vid.mp4",

  // (sous-titre du thumbnail, en couleur)
  tags:["Game Sound","Max MSP", "Unity"],

  // spécifier une image pour le thumbnail (optionel)
  iconImage:"GHOST.png",

  // thumbnail text v1 (automatically truncated)
  fullDescription:"This text will be displayed on the thumbnail."
  +" Woop woop!",

  // thumbnail text v2 (not truncated)
  shortDescription:"This text will be displayed on the thumbnail."
  +" Woop woop!",

  // article
  featureDescription:{

  // article body text
  body:`This is the body text.
  %#This is a line break.
  %#
  %#a0 This is a soundcloud embed from the audio gallery list.
  %#
  %#i0 This is an image from the image gallery list.
  %#

  <span class="en"></span>
  <span class="fr"></span>`,

  // article top/info section
  // (outdated)
  // contributionDetails:["Something I did in the project","Something else","Keep it short"],
  // collaborators:["Untel (programmation)","Unautre Tel (design)"],
  // tools:["Unity/C#","Max/MSP","Cubase"],
  // context:"On a fait ca ou, pourquoi?"
},

// list of image to be displayed
imageGallery:[
"lp/02.png",
"lp/01.png"
],

// list of audio elements to embed in page
audioGallery:[
`<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/772101751&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
],

// list of links at the end of the document
externalLinks:[{
link:"https://tag.hexagram.ca/projects/liquid-perceptions/",
title:"project web page"
}],

// a video embed to place in frame 1 of the slide show
coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
// otherwise include an image (strangely not optional)
coverImage:"NHE/NHE_02.png",



},

*/




// # 0



//****** NosHistoiresExquises *******
{
  // titre
  title:"Nos Histoires Exquises",

  // sous-titre (no longer a sorting feature)
  featuredIn:["Projection Intéractive"],

  // background
  bgImg: "NHE/NHE_02.png",
  bgVid:"noshistoires.mp4",

  // thumbnail text
  shortDescription:`Projection
  intéractive créée en collaboration avec Jules Galbraith, Dana
  Ryashi et Rose-Marie Dion.`,

  // article
  featureDescription:{

    // article body text
    body:`
    <span class="en"></span>
    <span class="fr"></span>

    Nos Histoires Exquises est une projection intéractive
    créée en collaboration avec Jules Galbraith (vidéo), Dana
    Ryashi (design, programmation web) et Rose-Marie Dion (design graphique).

    %#%#
    Pour ma part j'ai contributé la conception technique,
    les outils front-end, la programmation du back-end
    (node.js, mongodb, google cloud), l'animation du texte (unity/c#)
    et le mapping (Photon).

    %#%#
    L'oeuvre a été présentée en aout 2021 sur la façade de l'Hotel Zéro1,
    grâce à une collaboration entre Vyv, la SAT, Alice Jarry et le
    festival cinéma Urbain.

    %#%#
    %#i0

    %#%#
    Les participants pouvaient contribuer une phrase de leur
    choix en direct en accédant à l'interface web, grâce à leur
    téléphone ou bien en utilisant le poste disponible à cet effet.
    `,

    // article top/info section
    // contributionDetails:["Interaction design","System design","Text Animation","Programming"],
    // collaborators:["Jules Galbraith","Dana Ryashi","Rose-Marie Dion"],
    // tools:["Unity/C#","Photon (vyv)","html/javascript","node.js"],
    // context:"Festival cinema urbain, cours de CART 460"
  },

  // list of image to be displayed
  imageGallery:[
    "NHE/NHE_01.png",
    "NHE/NHE_03.png",
    "NHE/04.png"
  ],


  // a video embed to place in frame 1 of the slide show
  //coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  //<div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  coverImage:"NHE/NHE_02.png",

  // relevant tags for the project
  tags:["Projection intéractive","Unity", "node.js"],

  externalLinks:[],

  // date
  date:[01,08,2021],

},




// # 1





//****** Planetsz *******
{
  // titre
  title:"Planètes",

  // sous-titre (no longer a sorting feature)
  featuredIn:["HTML5 game prototype"],

  // date
  date:[20,12,2019],


  // tags (thumbnail subtitle)
  tags:["jeu HTML5","Monde génératif","musique procédurale"],

  // thumbnail text
  shortDescription:"Jeu d'exploration situé dans un univers génératif infini, créé dans le cadre du concours js13k 2021.",
  //"Exploration game featuring an infinite universe made for js13k 2021",


  // background
  bgImg: "Planets/01.png",
  bgVid:"planets.mp4",


  // article
  featureDescription:{

    // article body text
    body:`
    Dans Space Explorer, je place le joueur dans un univers
    génératif infini qu'il peut explorer à sa guise.
    %#%#
    À chaque planète son look individuel, ses propres cours d'eau,
    ses arbres et ses petits fruits interstellaires, sa langue locale et un
    un petit extrait de musique générative unique.
    %#%#
    %#a0
    %#%#
    SpaceExplorer est un jeu que j'ai créé en aout 2021 pour le game
    jam js13k, où on a un mois pour produire un jeu html5 contenu
    dans un fichier zip de moins 13kb, tout library ou framework confondu.
    %#%#
    Pour y parvenir, j'ai codé le jeu au complet sans framework, de
    la "physique" à la génération de sons, l'encodage des sprites, etc.

    <br><br> Le prototype s'est classé 34e sur 223.

    `,

    // article top/info section
    contributionDetails:["html5 game programming","generative music","generative world design"],
    collaborators:[],
    tools:["javascript"],
    context:"js13k 2021 jam"
  },

  // list of image to be displayed
  imageGallery:["Planets/04.png","Planets/05.png","Planets/06.png","Planets/07.png","Planets/02.png"],

  // list of audio elements to embed in page
  audioGallery:[
    `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1169339392%3Fsecret_token%3Ds-21bj0ouihFp&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
  ],

  // list of links at the end of the document
  externalLinks:[{
    link:"https://miwamiwa.github.io/Spacegame/",
    title:"Jouer"
  },
  {
    link:"https://js13kgames.com/entries/spacew",
    title:"Page js13k"
  },
  {
    link:"https://github.com/miwamiwa/Spacegame",
    title:"Github"
  }],

  // a video embed to place in frame 1 of the slide show
  //  coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  //  <div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  // otherwise include an image (strangely not optional)
  coverImage:"Planets/01.png",



},




// # 2



//****** Maze n birb *******
{
  // titre
  title:"Maze n' Birb",

  // sous-titre (no longer a sorting feature)
  featuredIn:["Unity game prototype"],

  // date
  date:[1,05,2021],

  // background
  bgImg: "Maze/03.png",
  bgVid:"mazenbirb.mp4",

  // thumbnail subtitle
  tags:["Game design","programmation","Unity 3D"],

  // thumbnail text
  shortDescription:"Prototype de jeu créé pour le game jam What-A-Jam! sur itch.io",
  //"Game prototype made for What-a-Jam! game jam on itch.io.",

  // article
  featureDescription:{

    // article body text
    body:`Prototype de jeu pour le jam en ligne What-A-Jam en mai 2021.
    Les thèmes étaient "raccourci" et "pizza"...

    %#%# Dans ce jeu 3D, le joueur doit retrouver des statuettes
    perdues dans un labyrinthe. Il peut gravir les murs à n'importe
    quel moment, mais cela l'expose à l'oiseau de proie qui
    tentera de le ramener à la case départ.

    %#%#
    %#a0
    %#%#
    J'ai produit le prototype avec Unity en une semaine,
    incluant des modèles (+ un asset gratuit), les textures, et
    une trame sonore. Il s'est retrouvé en 7e place dans la catégorie
    Interprétation du thème, parmis les 55 jeux soumis.
    %#%#

    `,

    // article top/info section
    contributionDetails:["Game design","Programmation","Musique","Terrain"],
    collaborators:[],
    tools:["Unity/C#","Ableton (music)"],
    context:"What-a-Jam! game jam sur itch.io"
  },

  // list of image to be displayed
  imageGallery:[
    "Maze/04.png",
    "Maze/05.png",
    "Maze/01.png",
    "Maze/02.png"
  ],

  // list of audio elements to embed in page
  audioGallery:[
    `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1169369344%3Fsecret_token%3Ds-f6CnV3u4rEW&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
  ],

  // list of links at the end of the document
  externalLinks:[{
    link:"https://sampc.itch.io/maze-birb",
    title:"jouer"
  },
  {
    link:"https://itch.io/jam/what-a-jam-may-2021",
    title:"What-a-Jam! 2021"
  }],

  // a video embed to place in frame 1 of the slide show
  //coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  //<div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  // otherwise include an image (strangely not optional)
  coverImage:"Maze/03.png",



},




// # 3





// ********** LIQUID PERCEPTIONS **********

{
  // titre
  title:"Liquid Perceptions",
  // sous-titre
  featuredIn:["Conception sonore"],

  // arrière-plan
  bgImg: "lp/02.png",

  // texte du thumbnail
  shortDescription:`Liquid Perceptions est une installation VR à laquelle j'ai
  contribué un travail de conception sonore technique.`,

  // sous-titre bleu du thumbnail
  tags:["Conception sonore","Conception audio technique","Max/MSP"],
  date:[20,12,2019],


  //Le projet faisait partie
  //d'un travail de recherche-création mené par Olivia McGilchrist à l'université
  //Concordia. ,


  //"Liquid Perceptions is a research-creation project by Olivia McGilchrist, Seyed M. Tabatabaei, Julia Salles and Dougy Hérard at the Milieux Institute at Concordia Univeristy, for which I provided some sound design work. "
  //+"<br><br>In this dual VR and non-VR experience, two players compete by catching as many fish as they can on a touch screen while a third player, wearing the VR set, witnesses directly the ecological damage of the first two players' fishing, as they swim across the increasingly dangerous underwater environment that lies beneath."
  //+"<br>I created sound effects and edited provided musical material to create different soundtracks for the underwater environment (for the VR user's headphones) and overwater (speakers heard by everyone).<br> I programmed the soundtrack in Max MSP (communicating with the Unity project using OSC), to route the soundtracks easily and to allow for some sound design experimentation. The final result featured use of granulation to handle large amounts of sound emitting objects, and some basic /////motion mapping.",



  featureDescription:{

    body:`

    Liquid Perceptions est une installation multimédia à laquelle j'ai
    contribué un travail de conception sonore technique.

    %#%#

    Deux participants s'adonnent à une compétition de pêche dans un jeu
    de style d'arcade affiché sur un écran TV, tandis qu'une 3e personne,
    grâce au casque VR qui lui fait office de scanphandre,
    sera témoin de l'impact des activités des
    autres joueurs sur l'écosystème marin.

    %#%#

    Me joignant au projet près d'une semaine avant sa conclusion,
    j'ai produit les effets sonores, edité la musique produite par
    l'artiste sonore, et implémenté le tout dans un patch Max/MSP de ma
    création, communiquant au projet Unity avec OSC. Le travail comportait
    notamment une bande sonore adaptive aux game-states, ainsi que
     deux sorties audios indépendantes, pour les deux sorties vidéo,
     chacune avec sa propre trame sonore.

    %#%#

    Le jeu a été présenté en live en Décembre 2019.`,

      contributionDetails:["Sound editing","Sound effects production","Sound integration"],
      collaborators:["Olivia McGilchrist","Seyed M. Tabatabaei","Julia Salles","Dougy Hérard"],
      tools:["Unity/C#","Max/MSP","Cubase"],
      context:"Research-creation project at Milieux Institute"

    },

    //iconImage:'lpicon.png',

    imageGallery:[
      "lp/02.png",
      "lp/01.png",
      "lp/03.png",
      "lp/04.png",
      "lp/05.png"
    ],

    externalLinks:[{
      link:"https://tag.hexagram.ca/projects/liquid-perceptions/",
      title:"project web page"
    }],

    coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",


  },




  // # 4





  // ******* FASTENED FURIOUS *******


  {
    // titre
    title:"Fastened Furious",
    // subtitle
    featuredIn:["Conception sonore"],
    // date
    date:[1,4,2019],

    // arriere plan
    bgVid:"ff.mp4",

    // thumbnail
    shortDescription: `Fastened Furious est un jeu créé dans le cadre du concours universitaire Gamelab auquel j'ai contribué un travail de conception sonore.`,

    //`Fastened Furious was created for the Ubisoft 2019 Game Lab Competition, where the theme was “spectacle.” The game is a race between two teams of two players tethered together, overcoming wacky obstacles and racing to the finish line. Our game was nominated for the Jury's Special Award. (summary and images by Nicole Lin)
    //<br><br>I picked and produced sound effects, composed BGM tracks, set up the project in Wwise and scripted audio triggers in C#. The soundtrack featured midi instruments that would interchange during gameplay, using tools included in Wwise and some C# scripting on the Unity side.
    //<br><br>Collaborators: Dougy Herard, Zied Jebali, Hiu Tung Lam, Ricardo Liganor, Melissa Lim, Nicole Lin, Scott Smith`,

    // sous-titre thumbnail
    tags:["Conception sonore","Wwise", "Musique"],

    // image thumbnail (optionel)
    iconImage:'fficon.png',

    featureDescription:{

      body:`
      En 2019 j'ai participé en tant que concepteur sonore au
      projet Fastened Furious, créé avec Dougy Hérard, Zied Jebali,
      Hiu Tung Lam, Ricardo Liganor, Melissa Lim, Nicole Lin et
      Scott Smith dans le cadre du concours universitaire Gamelab
      organisé par Ubisoft.

      %#%#

      J'ai produit les effets sonores, créé la musique et j'ai fait
      l'implémentation des sons avec Wwise et Unity.

      %#%#

      Dans le jeu, deux équipes de deux joueurs liés entre eux
      s'affrontent dans une course à obstacle sur le thème de l'espace.

      %#%#

      La bande sonore, implémentée avec Wwise mais aussi grâce à un
      script c#, était jouée à partir d'instruments MIDI dont le son
      pouvait être changé lors du gameplay.

      %#%# %#a1

      %#%# %#a2

      %#%# %#i3

      %#%#

      C'était un projet bien amusant, avec une équipe bien cool.
      %#... et puis notre jeu figurait parmis les mentions spéciales du jury!

      `,
      //contributionDetails:["Sound effects","Music","Implementation in Wwise","Trigger implementation in Unity","Midi soundtrack design"],
      //collaborators:["Dougy Herard","Zied Jebali","Hiu Tung Lam", "Ricardo Liganor", "Melissa Lim", "Nicole Lin", "Scott Smith"],
      //tools:["Unity/C#","Wwise","Ableton","Cubase"],
      //context:"Ubisoft Gamelab 2019"

    },
    coverVideo:`<iframe src="https://player.vimeo.com/video/395510779" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",

    // euh?????
    soundcloudDescription:"BGM tracks from Fastened Furious:",
    // euh??
    soundcloudLink: `<iframe width="80%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,

    audioGallery:[
      `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,

      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/772101751&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,

      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/772101742%3Fsecret_token%3Ds-ccvfe&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,

      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/772100596%3Fsecret_token%3Ds-a9vcH&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,

      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/772100584%3Fsecret_token%3Ds-eJ50M&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,
    ],
    imageGallery:["FF_title.jpg","FF_03.jpg","FF_05.jpg","glab2019.png"],
    externalLinks:[
      {
        title:"Vidéo de gameplay",
        link:"https://vimeo.com/432698850"
      }
    ]
  },




    /*
    featureDescription:{

    body:``,
    contributionDetails:["",""],
    collaborators:[],
    tools:[""],
    context:""

  },
  */
  /* ENTRY 2 */
  /* GHOST GAME */
  {
    title:"Ghost Game",
    bgVid:"gg.mp4",
    //fullDescription:"Prototype for an audio-only game about chasing ghosts. ",
    shortDescription:"Ghost Game est un prototype de jeu Audio, à jouer sur mobile.",
    iconImage:"GHOST.png",
    tags:["Audio Game","Unity","Android"],
    date:[1,12,2020],
    coverImage:"ghostgame/02.png",
    featuredIn:["Game design"],
    featureDescription:
    {
      body:`

      GhostGame est un prototype de jeu audio, soit un jeu vidéo-sans-vidéo,
      à jouer sur mobile.

      %#%#

      C'est une petite séance de chasse aux fantômes, à jouer chez soi avec
      les oreilles grandes ouvertes.

      %#%# Grâce à des moments de narration,
      des indices sonores spécialement conçus,
      ainsi que l'usage des capteurs de l'appareil Android,
      soit l'accéléromètre, le gyroscope et les capteurs de l'écran,
      le téléphone devient un objet qui servira à débusquer les spectres
      qui rodent chez vous afin de les éliminer une fois pour toute!

      %#%#


      L'objectif est à la fois d'interpeller
      l'imagination du joueur, et de créer des liens amusants entre son
      entourage et le monde du jeu. À suivre!




      %#%#%#Ambiance track:

      %# %#a0 %#%#
      Extract from the game audio:

      %# %#a1 %#




      `,
      //contributionDetails:[
      //  "Sensor-based interaction design"
      //],
      //collaborators:[],
      //tools:["Unity", "Ableton", "Cubase", "Android"],
      //context:"CART 410 Research-Creation in the Computation Arts"

    },
    imageGallery:[
      "ghostgame/01.png",
      "ghostLarge.png"
    ],
    audioGallery:[
      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030778947%3Fsecret_token%3Ds-nGrBcOBJBqh&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,
      `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030781707%3Fsecret_token%3Ds-Tzxjkw2saLq&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
    ],

    externalLinks:[
      {
        title:"Télécharger (itch.io)",
        link:"https://sampc.itch.io/ghost-game-demo"
      },
      {
        title:"Démo",
        link:"https://vimeo.com/486280011"
      }
    ]
  },

  /* ENTRY 3 */
  /* GILGAMESH VIGNETTE GAMES */
  {
    title:"L'épopée de Gilgamesh",
    bgVid:"gilga.mp4",
    //fullDescription:"Scenes from the epic of Gilgamesh told in vignette game form. ",
    shortDescription:`Scènes de l'épopée de Gilgamesh racontées sous forme de jeu-vignette, créés en solo et avec Melissa Lim.`,
    //shortDescriptions:`<span class='en'>Scenes from the epic of Gilgamesh told in vignette game form.</span>
    //<span class='fr'>Deux extraits de l'épopée de Gilgamesh sous forme de jeux-vignette</span>`,
    tags:["Game design","Conception graphique","Conception sonore"],
    date:[15,11,2020],

    coverImage:"gilgamesh/06.png",
    featuredIn:["Game design"],//, "Game Sound"],
    featureDescription:{

      body:`


      Deux scènes de l'épopée de Gilgamesh racontées sous forme de jeu-vignette.

      %#%#

      Dans le premier jeu, conçu avec Melissa Lim, on aide Gilgamesh à frayer
      son chemin dans des terres inconnues avec quelques gestes simples de 
      click-and-drag. Dans le deuxième, on suit le héros sur son radeau, dans les
      moments les plus éprouvants de la traversé d'une mer sans fin.

      %#%#




      <span class="en">
      %#
      Two passages from the epic of Gilgamesh told in the form of miniature (or
        "vignette") form.

        %#%#The first vignette recalls the passage in which the city councillors of
        Uruk pray to the Gods to help Gilgamesh in his great travels.  By accomplishing
        simple click-and-drag tasks, the player
        answers their prayers by moving mountains, drawing the path the hero
        must follow, and finally washing his feet when he arrives!

        %#%#In the second vignette, the player is Gilgamesh stranded on waters unknown
        to any living man, attempting to propel his damaged boat by using poles
        and eventually even his shirt.

        %#%# It's a more reflective scene where the hero
        recounts the reasons for his desparate mission to his travel companion. Despite
        the player's efforts to bring Gilgamesh closer to the highly desired shore,
        the latter seems impossible to reach, its arrival suspended by the thoughts
        racing through the hero's head.

        %#%#The graphic and game design of the first vignette was done in collaboration
        with Melissa Lim, otherwise I programmed both games with Unity/C#, and produced
        the sounds, music and sketches. I coded a granulator effect in Unity
        to give a more organic feel to the user input sounds of the first vignette
        and the water ambiance of the second.

        %#%# Music for the first vignette:

        %#%# %#a0 %#

        %# Music for the second vignette:

        %#%# %#a1 %#

        </span>



        <span class="fr">
        %#Deux passages de l'épopée de Gilgamesh racontés sous forme de jeux miniature (ou
          "jeu-vignette").

          %#%# La première vignette évoque le passage où les conseillers d'Uruk prient les
          Dieux afin d'aider Gilgamesh dans son voyage. En effectuants quelques gestes
          simples (cliquer-glisser), le joueur
          répond à leurs prières en déplaçant des montagnes, en traçant le chemin
          que le héros doit suivre, et enfin en lui lavant les pieds à son arrivée!

          %#%# Dans la deuxième vignette, le joueur incarne Gilgamesh perdu dans des
          eaux inconnues de tout homme vivant, tentant de propulser son bateau
          endommagé à l'aide de perches et même sa chemise.

          %#%# Il s'agit d'une scène plus introspective où le héros
          raconte les raisons de sa mission désespérée à son compagnon de voyage. Malgré
          les efforts du joueur pour aider Gilgamesh à se rapprocher du rivage tant
          désiré, celui ci ne semble pas arriver, comme suspendu par le flot des
          pensées du héros.

          %#%# La conception graphique et du jeu de la première vignette a été faite
          en collaboration avec
          Melissa Lim. Sinon, j'ai programmé les deux jeux avec Unity/C# et produit
          les sons, la musique et les croquis. J'ai codé un effet de granulation dans Unity
          pour donner un aspect plus organique aux sons d'entrée de l'utilisateur de la première vignette
          et à l'ambiance aquatique de la deuxième.

          %#%# Musique pour la première vignette:

          %#%# %#a0 %#

          %# Musique pour la deuxième:

          %#%# %#a1 %#

          </span>
          `,
          contributionDetails:["Unity/C# programming", "Game design","Sketches, art", "Music and sound effects"],
          collaborators:["Melissa Lim"],
          tools:["Unity/C#"],
          context:"CART 415 Game Design Studio"

        },
        //iconImage:"gilgaIcon.png",
        audioGallery:[`<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030473253%3Fsecret_token%3Ds-esKk0NgDdRE&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`,
        `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030470604%3Fsecret_token%3Ds-lQJRRydZ0dO&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`],
        imageGallery:["gilgamesh/04.png","gilgamesh/08.png", "gilgamesh/09.png"],

        externalLinks:[

          {
            title:"Play First Vignette",
            link:"https://melissalim.itch.io/the-councillors-blessings",
          },
          {
            title:"Play Second Vignette",
            link:"https://miwamiwa.github.io/cart415/gilgahtml2/",
          }
        ]
      },



      //******************** 560 DODGER ******************************
      {
        title:"Dodger",
        shortDescription:`Jeu de course à obstacle aux niveaux procéduraux,
        avec moins de 560 caractères de code (deux tweets!)`,

        bgVid:"dodger.mp4",

        iconImage:"560icon.png",
        tags:["Jeu HTML5","p5.js","Tweet-tweet Jam"],
        date:[5,5,2020],

        //shortDescription:`An obstacle dodging game with < 560 characters of code made with p5js.`,
        //fullDescription:``,
        coverImage:"560dodger2.png",

        featuredIn:["Programmation"],
        featureDescription:{

          body:`
          <span class="en">
          I stumbled upon a jam called Tweet Tweet jam on itch.io and decided to try
          it out. The goal was to make a game or interactive/animated scene with only
          560 characters of code, using pretty much anything you want. 560 characters
          is the maximum number of characters you can have in two Tweets.

          I made an obstacle dodging game with p5.js, sort of like Helicopter or
          Flappy Birds. Simple? Not really! Using shorter variable names and
          my usual minification tool just wasn't good enough and so I was forced to
          iterate a few times on the game design, but also the code structure, review
          what I knew about compacting javascript notation, and learn how to squeeze
          the most out of the automated minification. Wew!

          I ended up finding the challenge quite interesting, and made a few different
          versions all under 560 characters, and each one with a bit more features than
          the last. In the final version, you can play, reset and randomize the levels,
          there is a score counter, and a collectable item that provides a temporary
          bonus.
          </span>


          <span class="fr">

          Je suis tombé sur un game-jam intitulé Tweet-Tweet-jam sur itch.io et
          j'ai décidé de l'essayer.
          Le but était de créer un jeu ou une scène interactive/animée avec seulement
          560 caractères de code, en utilisant à peu près n'importe quoi comme
          framework. 560 charactères, c'est la nombre maximum de caractères que l'on
          peut compter dans deux Tweets.

          J'ai créé un jeu  ou il faut esquiver des obstacles avec p5.js,
          un peu comme Helicopter ou
          Flappy Birds. Simple ? Pas vraiment ! L'utilisation de noms de variables plus courts et
          mon outil de minification habituel n'était pas suffisant et j'ai donc été obligé
          d'itérer plusieurs fois sur le design du jeu, mais aussi sur la structure du code, de revoir
          ce que je savais sur le compactage de la notation javascript, et apprendre comment tirer
          le plus possible de la minification automatique. Hum!

          J'ai fini par trouver le défi assez intéressant,
          et j'ai fait quelques versions différentes, chacune comportant moins de 560 caractères,
          et chacune avec un peu plus de fonctionnalités que la
          la précédente. Dans la version finale, vous pouvez jouer, réinitialiser et randomiser les niveaux,
          il y a un compteur de score, et un objet à collectionner qui fournit un bonus temporaire.
          </span>
          `,
          contributionDetails:["Programming in javascript"],
          collaborators:[],
          tools:["Javascript", "p5.js"],
          context:"Tweet Tweet Jam 4, summer of 2020"

        },

        imageGallery:["560/01.png"],

        externalLinks:[

          {
            title:"Play latest version",
            link:"https://miwamiwa.github.io/560Dodger/"
          },
          {
            title:"Jam submission page",
            link:"https://sampc.itch.io/560dodger"
          },
          {
            title:"Github",
            link:"https://github.com/miwamiwa/560Dodger"
          }, //https://itch.io/jam/tweettweetjam-4

          {
            title:"Tweet tweet jam #4 homepage",
            link:"https://itch.io/jam/tweettweetjam-4"
          }

        ]
      },


      {
        title:"Laundromadness!",

        shortDescription:`Grande aventure à la buanderie, un jeu créé avec
        Bitsy.`,

        // arrière-plan
        bgImg:"laundro/06.png",

        //fullDescription:"It's a big world out there. <br>In this game you play as a kid who has all sorts of adventures while trying to do his laundry. <br><br>Follow the story and discover the wild side of the local laundromat! Made with Bitsy.",
        tags:["Bitsy","Game design"],

        featuredIn:["Game design"],
        featureDescription:{

          body:`

          <span class="en">

          %# This is a short narrative game I made with Bitsy during a game design
          course in 2019. The user follows the story of a kid having all sorts of
          adventures while trying to wash his clothes at the local laundromat.

          %#%# Almost immediately after entering the building, the player finds their
          change disappeared from their pocket. Things get increasingly strange
          and complicated when the only help they can find comes from greedy mice and
          scary bugs! The player will have to learn to make the right friends in
          this unsuspected new world.

          %#%# The game is a linear narrative that the user walks through at their own
          pace, with a few short game-like scenes conveying key moments in the story.

          </span>


          <span class="fr">

          %# Laundromadness est un court jeu narratif que j'ai réalisé avec Bitsy
          lors d'un cours de conception de jeux en 2019. L'utilisateur suit
          l'histoire d'un enfant qui vit toutes sortes d'aventures en voulant
          faire son lavage à la buanderie.

          %#%# Presque immédiatement après être entré dans le bâtiment,
          le joueur s'aperçoit qu'il a perdu ses sous. Les choses deviennent de plus en plus étranges
          et compliquées lorsque la seule aide qu'il obtient provient d'une souris avares
          et d'effrayants insectes !
          Le joueur devra apprendre à choisir ses amis dans ce nouveau monde insoupçonné.

          %#%# Le jeu est un récit linéaire que l'utilisateur parcourt à son propre rythme,
          avec quelques courtes scènes de jeu pour illustrer les moments clés de l'histoire.

          </span>
          `,
          contributionDetails:["Game Design with Bitsy"],
          collaborators:[],
          tools:["Bitsy"],
          context:"CART 215 Introduction to Game Design"

        },

        date:[1,12,2019],
        coverImage:"laundro/05.png",
        imageGallery:["laundro/02.png", "laundro/07.png", "laundro/04.png", "laundro/06.png", "laundro/03.png"],
        iconImage:"laundroicon.png",
        externalLinks:[
          {
            title:"Play game",
            link:"https://sampc.itch.io/laundromadness"
          }
        ]
      },




      /* ENTRY 7 */

      //******************** APE NAPS ******************************
      {
        title:"Ape Naps",
        bgVid: "apenaps.mp4",

        tags:["Jeu HTML5","Programmation"],
        date:[13,9,2019],

        shortDescription:`Platformer créé pour le concours Js 13k Games 2019, où le défi est de rendre un fichier zip de 13kb.`,
        //fullDescription:"Ape Naps is my submission for Js 13k Games 2019, where one makes a javascript game that zips down to 13kb, all files and libraries included. The theme was 'Back'."
        //+"<br><br>In this game, you (mama ape) bring your kids back home, on your back, to some Bach. I wanted to make something silly and most peaceful. You run into other animals but you can't harm them. You only bump each other out of the way. Comments showed that part caused more grief to playtesters than anything! It was valuable feedback at the time."
        //+"<br><br>This was a first time attempting to make a full game on my own! And a first time doing many things in javascript without any libraries, like canvas drawing and generating sound. Features my own image compression scheme."
        //+"<br><br>Controls: left=a, right=d, space=jump, w=wiggle (drop a passenger)",
        coverVideo:`<iframe src="https://player.vimeo.com/video/432701435" class="popupimg" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        imageGallery:[
          "apenaps.png",
          "apenaps/01.png",
          //"apenaps/02.png",
          //"apenaps/05.png",
          "apenaps/04.png"
        ],
        iconImage:"apenapsicon.png",
        featuredIn:["Programming"],

        featureDescription:{

          body:`
          %#Ape Naps was my first submission to js13k games, a competition where one makes
          a game with a 13kb limit on the final .zip package. The player incarnates
          a mother ape who chases her babies to bring them back home, on her back, to
          some Bach (the theme to follow was "back"...).

          %#i0
          %#%#I wanted to fit in as many images and sounds as possible, so I put together
          a custom scheme to compress and display my sprites with native javascript. The
          soundtrack and sfx employ generated sounds, also using native javascript tools.
          Definitely an interesting programming challenge overall, and a nice learning
          experience since it was my first time coding an entire game project.
          `,
          contributionDetails:["HTML5 game programming", "Graphics engine", "Sound generation"],
          collaborators:[],
          tools:["Javascript"],
          context:"js13k games 2019"

        },

        externalLinks:[
          {
            title:"Play Ape Naps",
            link:"https://js13kgames.com/entries/ape-naps"
          },
          {
            title:"Github",
            link:"https://github.com/miwamiwa/13k2019"
          }
          /*,
          {
          title:"Js 13k Games Website",
          link:"https://js13kgames.com/"
        }
        */
      ]
    },









      /****** JS13K 2020 GAME ******/
      /*
      {
        title:"js13k 2020 game",
        bgVid:"js13k2020.mp4",
        fullDescription:"Game made for js13k2020. Sound design features browser-based sound generation.",
        shortDescription:"A 13kb javascript platformer / shooter game I made for js13k competition in 2020.",
        iconImage:"13kicon.png",
        featuredIn:["Programming"],
        featureDescription:{

          body:`<span class="en">
          %#
          In the summer of 2020 I decided to try the js13k 2020 competition again,
          where the goal is to build an offline javascript game that fits in a 13kb zip
          package, all libraries included. That year the theme was "404", and I
          wanted to make some sort of platformer with a character that shoots bad
          guys on his way to the prize (because why not??).

          %#%# So the idea would be to recover the pages of your website that have
          mysteriously gone 404, by literally getting in there with your blaster gun and
          smacking the virus at the source. I wanted to make the game feel like
          "entering a website" by using a navigation bar to move between levels. The
          place is dark and stormy, it's raining characters, and the platforms are
          covered with the game's code.

          %#%# I used a js tool I made over the summer to produce the models and animations,
          which are animated canvas paths (much like svg paths). I added in sfx and
          a short bit of music, with sounds generated using the native javascript
          audio buffer.

          %#%# %#a0 %#

          %#%# There are a few levels, two boss levels, and a small progression
          system. The final result actually just barely fit within the 13kb limit,
          and I struggled to make it fit in time without impairing the game performance
          significantly. Lesson learned in terms of planning! Nonetheless it was fun to make, a
          great coding challenge and the final 13.1kb result is not so shabby.
          </span>

          <span class="fr">

          %#Lors de l'été 2020, j'ai décidé de réessayer le concours js13k 2020,
          où le but est de construire un jeu javascript hors-ligne qui tient dans un zip de 13ko.,
          toutes bibliothèques incluses. Cette année là, le thème était "404", et je
          voulais faire une sorte de jeu plateformeur avec un personnage qui tire sur les méchants
          en se dirigeant vers le prix (pourquoi pas ??).

          %#%# L'idée est donc de récupérer les pages de votre site web qui ont
          mystérieusement disparues, en vous aventurant à l'intérieur avec votre pistolet pour blaster
          le virus à la source. J'avais voulu donner l'impression
          "d'entrer dans le site" en utilisant une barre de navigation pour passer d'un niveau à l'autre.

          L'endroit est sombre et orageux, il pleut des caractères, et les plateformes sont
          recouvertes du code source du jeu.

          %#%# J'ai utilisé un outil js que j'ai créé pendant l'été pour produire les modèles et les animations,
          qui sont des paths de canvas animés. J'ai ajouté des effets sonores et
          un petit morceau de musique, avec des sons générés par le buffer javascript natif.

          %#%# %#a0 %#

          %#%# Il y a quelques niveaux, deux niveaux de boss, et un petit système de progression.
          Le résultat final rentre à peine dans la limite de 13ko,
          et j'ai finalement eu du mal à amincir le code assez dans le temps accordé
          sans altérer la performance du jeu. Ce fut une leçon de planification! C'était
          tout de même amusant à faire, un bon défi de codage et le résultat final de 13.1kb
          n'est quand même pas si mal.

          </span>
          `,
          contributionDetails:["Made everything in a 30 day timespan",
          "Gameplay programming",
          "Randomized level layouts using seeded noise",
          "Custom animation framework",
          "Sound generation for soundtrack and sfx"],
          collaborators:[],
          tools:["native javascript"],
          context:"js13k html5 game competition"

        },
        audioGallery:[
          `<iframe width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030007044%3Fsecret_token%3Ds-5wElwc2UBtP&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false">
          </iframe>`],
          coverImage:"js13k2020/02.png",
          imageGallery:["js13k2020/06.png","js13k2020/05.png","js13k2020/01.png" ],
          tags:["Game Design","Programming","Javascript","Game Sound"],
          date:[13,9,2020],
          externalLinks:[
            {
              title:"Play",
              link:"https://miwamiwa.github.io/13k2020/"
            }
          ]
        },
*/



        /* ENTRY 6 */
        /* BAD BOTS GMTK */
/*
        {
          title: 'Bad Bots',
          bgVid:"badbots.mp4",
          fullDescription: 'Game prototype made solo in 48 hours for GTMK game jam in July 2020. The theme was "out of control".'
          +"<br><br>Bad bots is a story about environmental collapse. <Br>In the future, trees are so rare that you can't breathe without being right next to one. Robots tend to the remains of the natural world.. but they've gone out of control! They're literally gobbling the trees!! Smack sense into them with your stick, and re-forest your way to the checkpoints to clear each level."
          +"<br><br>Definitely wasn't the most polished submission out there, but it was my first 48h endeavour so I'm quite happy I managed to pack in enough mechanics and assets for people to test. I ended up getting quite a few comments on my submission which was really interesting and a nice reward. ",
          tags:['Game Design',"Programming",'Sound Design','Unity','Blender',"Music"],
          date:[12,07,2020],

          featuredIn:["Programming","Game Design"],
          featureDescription:{

            body:`

            <span class="en">


            </span>


            <span class="fr">

            </span>


            %#Bad Bots is a game prototype with a socio-environmental message. The player
            discovers a future in which nature has thinned out to a minimum and cannot
            sustain itself without constant care from robots. Somehow, the robots are
            getting out of control and their action is destroying the forests! The player's
            goal is to bust up these bad bots before the situation gets any more disastreous.
            %#%# %#a0 %#
            %#%#This is a Unity game I made solo for the 2020 GMTK game jam. Definitely a
            big endeavour for a 48h jam, the goal was to have enough elements in the game
            by the end of the jam for people to get a feel for the concept and narrative.
            Though it wasn't a very polished submission, it was finished enough to get
            quite a bit of feedback from other participants, which was a nice reward for the work done.
            `,
            contributionDetails:["Game Design", "Unity/C# programming", "Basic models in blender", "Music and sfx"],
            collaborators:[],
            tools:["Unity","Blender","Ableton"],
            context:"GMTK Game Jam, summer of 2020"

          },
          audioGallery:[
            `<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1030771900%3Fsecret_token%3Ds-X4o1BFNU0MF&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`
          ],
          imageGallery:["badbots/01.png",'badbot.png'],
          //iconImage:"badbotsicon.png",
          coverImage:"badbots/02.png",
          externalLinks:[
            {
              title:'Play Bad Bots',
              link:'https://sampc.itch.io/bad-bots-gmtk-2020-jam'
            },
            {
              title:'GMTK entry page',
              link:"https://itch.io/jam/gmtk-2020/rate/699374"
            },
            {
              title:"Gameplay video",
              link:'https://vimeo.com/440352020'
            },
            {
              title:'SFX video',
              link:'https://vimeo.com/440352144'
            }

          ]
        },
*/

/*
    {
      skip:true,
      title:"Doodle Risk",
      fullDescription:"A hobby project for the confinement period to be played with two roommates. A three-player game of Risk made with Processing that plays over a local network. Players customize their own tile appearance and can use the ocean as a common doodle space.",
      coverImage:"doodlerisk.png", // OR coverVideo:"<iframe>",
      tags:["Programming","Processing (java)","Networking"],
      date:[15,4,2020],
      iconImage:"riskicon.png",

      externalLinks:[
        {
          title:"Doodle Risk Github",
          link:"https://github.com/miwamiwa/risk"
        }
      ]
    },

*/
/*
    {
      title:"Animation Nodes Music Loop",

      fullDescription:"Short video made for CART 362 3D Digital Production class. Experimenting with animation nodes to make an audio-driven abstract scene.",
      coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/pC_m4TD3dg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, // OR coverVideo:"<iframe>",
      iconImage:"animnodeicon.png",
      tags:["Blender","Animation Nodes"],
      date:[15,4,2020],

    },
    */
    /*
    {
    title:'soundcloud page',
    fullDescription:'Selected musical examples',
    //coverImage:'',
    tags:['Music'],
    date:[12,12,2012],
    soundcloudLink:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1096301104&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/featured" title="featured" target="_blank" style="color: #cccccc; text-decoration: none;">featured</a></div>`

  },
  */
  /*
  {
    title:"Talking head",
    fullDescription:"Short video made for CART 362 3D Digital Production class. Audio from Jaden Smith Reads Mind Blowing Facts About The Universe.",
    coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/CuWQTk93K_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    iconImage:"faceanimicon.png",
    tags:["Blender"],
    date:[15,4,2020],

  },

  {
    title:"Parc-laf-scape",
    fullDescription:"After Effects project made for CART 212 Digital Media Studio class. ",
    coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/5frYCJ43ALQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    iconImage:"parclaficon.png",
    tags:["After Effects"],
    date:[20,2,2019],

  },
  */
]
