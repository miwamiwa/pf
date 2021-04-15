/*

{
title:"",
fullDescription:"",
coverImage:"filename.png", // OR coverVideo:"<iframe>",
tags:["tag1","tag2"],
date:[j,m,a],

//optional:
imageGallery:["filename.png","filename2.png"],
soundcloudDescription:"title above soundcloud element",
soundcloudLink: "<iframe>",
externalLinks:[
 {
 title:"link1",
 link:"url1"
 },
 {
 title:"link2",
 link:"url2"
 }
]
},


*/


/*

to add
cart 345 stuff??
ant pong???
tangible media stuff??

*/

let projectDescriptions = [

  /* ENTRY 0 */
  {
    title:"c'est ta toune",
    fullDescription:"hommage to da gb camera",
    coverImage:"toune.png",
    tags:["Javascript","Programming"],
    iconImage:"tatouneicon.png",
    //featuredIn:["Programming"],
    date:[1,4,2019],
    externalLinks:[
      {
        title:"Play",
        link:"https://miwamiwa.github.io/cart263-2019/projects/project3/"
      }
    ]
  },

  /* ENTRY 1 */
  /* SAM'S JS13K 2020 GAME */
  {
    title:"js13k 2020 game",
    fullDescription:"Game made for js13k2020. Sound design features browser-based sound generation.",
    iconImage:"13kicon.png",
    featuredIn:["Programming"],
    featureDescription:{

        body:`
        %#Game made for js13k2020, an html5 game design competition in which there
        is a package size limit imposed of 13kb. In this edition of the competition,
        the theme was "404". In this game the player has to find and restore the
        remains of a broken website. My entry featured procedurally generated levels,
        bosses, a few weapon upgrades, a custom 2d animation system that uses
        canvas path drawing and a soundtrack made entirely of generated sounds.

        %#%# %#a0 %#

        %#%#The levels are decorated with the code from the game itself! I did
        manage to fit everything into a 12.99k zip package, but in the end I had to cut out
        some parts, which impaired the performance quite a bit. Still I am glad to have finished it on time,
        and to have a 13.1k version that works just fine!
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
  fullDescription:"Prototype for an audio-only game about chasing ghosts. ",
  coverImage:"ghostLarge.png",
  featuredIn:["Game Sound","Game Design"],
  featureDescription:
  {
      body:`%#This is a prototype for an audio-only game for android which I put
      together last year. It's a screenless game where events are communicated
      through sounds and triggered using the mobile's sensors. The player walks
      around their home searching for ghosts and zapping them with their
      portable ghost busting device!

      %#%#I programmed this with Unity and produced the sounds with Ableton and Cubase.

      `,
      contributionDetails:[
        "Sensor-based interaction design",
      "Audio-only game design",
      "Unity/C# programming for Android",
      "Sound effects",
      "Ambiance track",
      "Voice over / narration",
      "Sound integration in Unity"
    ],
      collaborators:[],
      tools:["Unity", "Ableton", "Cubase", "Android"],
      context:"CART 410 Research-Creation in the Computation Arts"

  },
  iconImage:"GHOST.png",
  tags:["Game Design","Audio Game","Unity","Mobile","Game Sound","Programming"],
  date:[1,12,2020],
  externalLinks:[
    {
      title:"Download (itch.io page)",
      link:"https://sampc.itch.io/ghost-game-demo"
    },
    {
      title:"Demo",
      link:"https://vimeo.com/486280011"
    }
  ]
},

/* ENTRY 3 */
/* GILGAMESH VIGNETTE GAMES */
{
  title:"Gilgamesh vignettes",
  fullDescription:"Scenes from the epic of Gilgamesh told in vignette game form. ",
  coverImage:"gilgaIMG.png",
  featuredIn:["Game Design", "Game Sound"],
  featureDescription:{

      body:`
      %#Scenes from the epic of Gilgamesh told in vignette game form.

      %#%#These are two short works constitute exercises in story telling
      through game, visual and sound design.

      %#%#In the first vignette, the player takes the role of a god invoked by the
      city councillors of Uruk to guide Gilgamesh in his travels. With simply click-and-drag
      motions, they swipe mountains aside, draw a road in the ground, and wash
      up Gilgamesh upon his arrival. The graphic elements (sketched by me and reworked by Melissa Lim)
      and sonic elements hopefully reinforce the tactile feel of each action,
      emphasizing the characters' belief in the gods' agency on the nature that surrounds them.

      %#%#In the second vignette, the player is Gilgamesh struggling with his impossible
      goal of crossing an ocean no man has ever crossed before, on a broken boat,
      using nothing but poles for propulsion, and eventually, out of sheer desparation,
      using his shirt as a sail. In the original story, Gilgamesh is stopped by multiple
      charaters along the way who question his motives. I chose to make a more introspective
      scene, where Gilgamesh has with himself the conversation which he has with his
      detractors in the original story: he is mourning his dear friend, and must
      carry on with this impossible journey in order to fight off his own death. The
      empty ocean expanse, the frantic button-pressing required to move forward,
      and the contrasting character of the navigator calmly providing the user with
      instructions combine to depict Gilgamesh's mindset in this passage: anguished
      yet heroically moving forward.

      %#%#Regarding sound design, in both vignettes I explored the use of granulation
      to create different sound textures. The soundtrack of the first vignette is meant
      to set the clock back a few thousand years, while in the second vignette the
      music is more affective, creeping in during the action with an uplifting
      yet melancholic sound that confirms the emotion in the scene.
      `,
      contributionDetails:["Unity/C# programming", "Game design","Sketches, art", "Music and sound effects"],
      collaborators:["Melissa Lim (first vignette)"],
      tools:["Unity/C#"],
      context:"CART 415 Game Design Studio"

  },
  iconImage:"gilgaIcon.png",
  tags:["Game Design","Programming","Game Sound","Unity","Music"],
  date:[15,11,2020],
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


/* ENTRY 4 */
  //******************** 560 DODGER ******************************
  {
    title:"560 Dodger",
    fullDescription:"This was my entry for Tweet Tweet jam 4 hosted on itch.io, where the goal is to make a javascript game with 560  or less characters of code. "
    +"<br><br>I made an obstacle dodging game using the p5.js library. Levels are generated with noise seeds so can be restarted and randomized as well."
    +"<br>I eventually reworked the code, tuning the mechanics and adding a collectible item while staying within the character limit."
    +"<br><br>I tought it was an interesting challenge. It forced me to take a serious look at my own javascript coding habits. Not easy making something both interesting and playable in this context, so the design challenge was quite nice as well."
    +"<br><br>Controls: use W,S to move up and down. Press R to start a new random level."
    +"<br>Green bars provide a temporary size reduction. Refresh to load a new level, press R to restart the same level. ",
    coverImage:"560dodger2.png",

    featuredIn:["Programming"],
    featureDescription:{

        body:`
        %#This is an obstacle dodging game with 550 characters of code, made with
        p5.js. It features procedurally generated levels which can be replayed or
        randomized again, collision detection, a power-up item and a score
        counter.

        %#%#This was my entry for Tweet Tweet jam 4 hosted on itch.io, which is a
        week-long jam where the goal is to make a javascript game with 560 or
        less characters of code.
        `,
        contributionDetails:["Programming in javascript"],
        collaborators:[],
        tools:["Javascript", "p5.js"],
        context:"Tweet Tweet Jam 4, summer of 2020"

    },

    iconImage:"560icon.png",
    tags:["Javascript","Programming","Game Design"],
    date:[5,5,2020],
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
      } //https://itch.io/jam/tweettweetjam-4
/*
      {
        title:"Tweet tweet jam #4 homepage",
        link:"https://itch.io/jam/tweettweetjam-4"
      }
*/
    ]
  },


/* ENTRY 5 */
/* LAUNDROMADNESS! */
{
  title:"Laundromadness!",
  fullDescription:"It's a big world out there. <br>In this game you play as a kid who has all sorts of adventures while trying to do his laundry. <br><br>Follow the story and discover the wild side of the local laundromat! Made with Bitsy.",
  tags:["Game Design","Bitsy"],

  featuredIn:["Game Design"],
  featureDescription:{

      body:`
      %#This was an exercise in making a game with Bitsy, a simple editor for making
      narrative games. The idea was to have the player enter a seemingly ordinary
      hub (the laundromat) with an ordinary task, then lead them to staged encounters
      in previously hidden corners of the hub. Each encounter complicates the player's
      situation in some unexpected manner, and also pulls them away from their
      initial (very ordinary) quest, into a fantasy world with gradually less rules.

      %#%#Synopsis:
      %#The player is tasked by their mom to do their own laundry. A shady figure in
      the laundromat steals their change before they even find a free washer. Peaking
      in between the machines for lost change, they meet a pair of mice that ask for
      the laundromat owner's cheese sandwich in exchange for a coin they found. The
      player's bad deed is rewarded with equally bad payment: 25 cents and "advice"
      pointing to a specific dryer. Upon entering the dryer the player becomes tiny,
      and runs into a furious and giant owner who punishes them by tasking
      them to sweep a tiny broom. The player meets a dust-loving bug who eventually leads
      them to more bugs (roaches!) who are super nice, give away all the necessary
      loose change, and even invite the player to their raves. The player becomes
      big again by entering the owner's magic socks, and can finally start their
      laundry cycle.
      `,
      contributionDetails:["Game Design with Bitsy"],
      collaborators:[],
      tools:["Bitsy"],
      context:"CART 215 Introduction to Game Design"

  },

  date:[1,12,2019],
  coverImage:"laundromadness_preview.png",
  iconImage:"laundroicon.png",
  externalLinks:[
    {
      title:"Play game",
      link:"https://sampc.itch.io/laundromadness"
    }
  ]
},


/* ENTRY 6 */
/* BAD BOTS GMTK */

{
  title: 'Bad Bots',
  fullDescription: 'Game prototype made solo in 48 hours for GTMK game jam in July 2020. The theme was "out of control".'
  +"<br><br>Bad bots is a story about environmental collapse. <Br>In the future, trees are so rare that you can't breathe without being right next to one. Robots tend to the remains of the natural world.. but they've gone out of control! They're literally gobbling the trees!! Smack sense into them with your stick, and re-forest your way to the checkpoints to clear each level."
  +"<br><br>Definitely wasn't the most polished submission out there, but it was my first 48h endeavour so I'm quite happy I managed to pack in enough mechanics and assets for people to test. I ended up getting quite a few comments on my submission which was really interesting and a nice reward. ",
  tags:['Game Design',"Programming",'Sound Design','Unity','Blender',"Music"],
  date:[12,07,2020],

  featuredIn:["Programming","Game Design"],
  featureDescription:{

      body:`
      %#Bad Bots is a game prototype with a socio-environmental message. The player
      discovers a future in which nature has thinned out to a minimum and cannot
      sustain itself without constant care from robots. Somehow, the robots are
      getting out of control and their action is destroying the forests! The player's
      goal is to bust up these bad bots before the situation gets any more disastreous.

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

  iconImage:"badbotsicon.png",
  coverImage:'badbot.png',
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

/* ENTRY 7 */

//******************** APE NAPS ******************************
  {
  title:"Ape Naps",
  fullDescription:"Ape Naps is my submission for Js 13k Games 2019, where one makes a javascript game that zips down to 13kb, all files and libraries included. The theme was 'Back'."
  +"<br><br>In this game, you (mama ape) bring your kids back home, on your back, to some Bach. I wanted to make something silly and most peaceful. You run into other animals but you can't harm them. You only bump each other out of the way. Comments showed that part caused more grief to playtesters than anything! It was valuable feedback at the time."
  +"<br><br>This was a first time attempting to make a full game on my own! And a first time doing many things in javascript without any libraries, like canvas drawing and generating sound. Features my own image compression scheme."
  +"<br><br>Controls: left=a, right=d, space=jump, w=wiggle (drop a passenger)",
  coverVideo:`<iframe src="https://player.vimeo.com/video/432701435" class="popupimg" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  imageGallery:["apenaps.png"],
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
  tags:["Javascript","Programming","Game Design","Game Sound"],
  date:[13,9,2019],
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



// entry 8

  //******************** LIQUID PERCEPTIONS ******************************
  {
  title:"Liquid Perceptions",
  fullDescription:"Liquid Perceptions is a research-creation project by Olivia McGilchrist, Seyed M. Tabatabaei, Julia Salles and Dougy Hérard at the Milieux Institute at Concordia Univeristy, for which I provided some sound design work. "
  +"<br><br>In this dual VR and non-VR experience, two players compete by catching as many fish as they can on a touch screen while a third player, wearing the VR set, witnesses directly the ecological damage of the first two players' fishing, as they swim across the increasingly dangerous underwater environment that lies beneath."
  +"<br>I created sound effects and edited provided musical material to create different soundtracks for the underwater environment (for the VR user's headphones) and overwater (speakers heard by everyone).<br> I programmed the soundtrack in Max MSP (communicating with the Unity project using OSC), to route the soundtracks easily and to allow for some sound design experimentation. The final result featured use of granulation to handle large amounts of sound emitting objects, and some basic motion mapping.",

  featuredIn:["Game Sound"],

  featureDescription:{

      body:`%#In this dual VR and non-VR experience, two players compete by catching
      as many fish as they can on a touch screen while a third player, wearing the
      VR set, witnesses directly the ecological damage of the first two players'
      fishing, as they swim across the increasingly dangerous underwater environment
      that lies beneath.
      %#%#I created sound effects and edited provided musical material to create different
      soundtracks for the underwater environment (for the VR user's headphones) and
      overwater (speakers heard by everyone).
      %#%#I programmed the soundtrack in Max MSP (communicating with the Unity project
      using OSC), to route the soundtracks easily and to allow for some sound
      design experimentation. The final result featured use of granulation to
      handle large amounts of sound emitting objects, and some basic motion mapping.

      %#%#The game was presented in a live demonstration in December 2019. `,
      contributionDetails:["Sound editing","Sound effects production","Sound integration"],
      collaborators:["Olivia McGilchrist","Seyed M. Tabatabaei","Julia Salles","Dougy Hérard"],
      tools:["Unity/C#","Max/MSP","Cubase"],
      context:"Research-creation project at Milieux Institute"

  },

  iconImage:'lpicon.png',

  coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  tags:["Game Sound","Max MSP", "Unity"],
  date:[20,12,2019],

  },

// entry 9


  //******************** FASTENED FURIOUS ******************************
  {
  title:"Fastened Furious",
  fullDescription:`Fastened Furious was created for the Ubisoft 2019 Game Lab Competition, where the theme was “spectacle.” The game is a race between two teams of two players tethered together, overcoming wacky obstacles and racing to the finish line. Our game was nominated for the Jury's Special Award. (summary and images by Nicole Lin)
<br><br>I picked and produced sound effects, composed BGM tracks, set up the project in Wwise and scripted audio triggers in C#. The soundtrack featured midi instruments that would interchange during gameplay, using tools included in Wwise and some C# scripting on the Unity side.
<br><br>Collaborators: Dougy Herard, Zied Jebali, Hiu Tung Lam, Ricardo Liganor, Melissa Lim, Nicole Lin, Scott Smith`,
  iconImage:'fficon.png',
  featuredIn:["Game Sound"],
  featureDescription:{

      body:`%#Fastened Furious was created for the Ubisoft 2019 Game Lab Competition,
      where the theme was “spectacle.” The game is a race between two teams of
      two players tethered together, overcoming wacky obstacles and racing to the
      finish line. Our game was nominated for the Jury's Special Award.


      %#%#I picked and produced sound effects, composed BGM tracks, set up the project
      in Wwise and scripted audio triggers in C#. %#%# %#a0 %#The soundtrack featured midi
      instruments that would interchange during gameplay, using tools included
      in Wwise and some C# scripting on the Unity side.`,
      contributionDetails:["Sound effects","Music","Implementation in Wwise","Trigger implementation in Unity","Midi soundtrack design"],
      collaborators:["Dougy Herard","Zied Jebali","Hiu Tung Lam", "Ricardo Liganor", "Melissa Lim", "Nicole Lin", "Scott Smith"],
      tools:["Unity/C#","Wwise","Ableton","Cubase"],
      context:"Ubisoft Gamelab 2019"

  },
  coverVideo:`<iframe src="https://player.vimeo.com/video/395510779" class="popupimg" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <div class="videoCredits f3">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  tags:["Game Sound","Wwise", "Unity", "C#","Music"],
  date:[1,4,2019],
  soundcloudDescription:"BGM tracks from Fastened Furious:",
  soundcloudLink: `<iframe width="80%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,
  audioGallery:[
    `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,

  ],
  imageGallery:["FF_title.jpg","FF_03.jpg","FF_05.jpg"],
  externalLinks:[
    {
      title:"Playthrough video",
      link:"https://vimeo.com/432698850"
    }
  ]
  },



  {
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



{
title:"Animation Nodes Music Loop",

fullDescription:"Short video made for CART 362 3D Digital Production class. Experimenting with animation nodes to make an audio-driven abstract scene.",
coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/pC_m4TD3dg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, // OR coverVideo:"<iframe>",
iconImage:"animnodeicon.png",
tags:["Blender","Animation Nodes"],
date:[15,4,2020],

},
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
]
