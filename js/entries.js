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
  {
    title:"c'est ta toune",
    fullDescription:"hommage to da gb camera",
    coverImage:"toune.png",
    tags:["Javascript"],
    iconImage:"tatouneicon.png",
    date:[1,4,2019],
    externalLinks:[
      {
        title:"Play",
        link:"https://miwamiwa.github.io/cart263-2019/projects/project3/"
      }
    ]
  },
  {
    title:"js13k 2020 game",
    fullDescription:"Game made for js13k2020",
    iconImage:"13kicon.png",
    coverImage:"samjs13kSMALL.png",
    tags:["Game Design","Javascript"],
    date:[13,9,2020],
    externalLinks:[
      {
        title:"Play",
        link:"https://miwamiwa.github.io/13k2020/"
      }
    ]
  },
{
  title:"Ghost Game",
  fullDescription:"Prototype for an audio-only game about chasing ghosts. ",
  coverImage:"ghostLarge.png",
  iconImage:"GHOST.png",
  tags:["Game Design","Audio Game","Unity","Mobile","Sound Design"],
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
{
  title:"Gilgamesh vignettes",
  fullDescription:"Scenes from the epic of Gilgamesh told in vignette game form. First one was made with Melissa Lim. ",
  coverImage:"gilgaIMG.png",
  iconImage:"gilgaIcon.png",
  tags:["Game Design","Sound Design","Unity","Music"],
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
    iconImage:"560icon.png",
    tags:["Javascript","Game Design"],
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

{
  title:"Laundromadness!",
  fullDescription:"It's a big world out there. <br>In this game you play as a kid who has all sorts of adventures while trying to do his laundry. <br><br>Follow the story and discover the wild side of the local laundromat! Made with Bitsy.",
  tags:["Game Design","Bitsy"],
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

{
  title: 'Bad Bots',
  fullDescription: 'Game prototype made solo in 48 hours for GTMK game jam in July 2020. The theme was "out of control".'
  +"<br><br>Bad bots is a story about environmental collapse. <Br>In the future, trees are so rare that you can't breathe without being right next to one. Robots tend to the remains of the natural world.. but they've gone out of control! They're literally gobbling the trees!! Smack sense into them with your stick, and re-forest your way to the checkpoints to clear each level."
  +"<br><br>Definitely wasn't the most polished submission out there, but it was my first 48h endeavour so I'm quite happy I managed to pack in enough mechanics and assets for people to test. I ended up getting quite a few comments on my submission which was really interesting and a nice reward. ",
  tags:['Game Design','Sound Design','Unity','Blender',"Music"],
  date:[12,07,2020],
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


//******************** APE NAPS ******************************
  {
  title:"Ape Naps",
  fullDescription:"Ape Naps is my submission for Js 13k Games 2019, where one makes a javascript game that zips down to 13kb, all files and libraries included. The theme was 'Back'."
  +"<br><br>In this game, you (mama ape) bring your kids back home, on your back, to some Bach. I wanted to make something silly and most peaceful. You run into other animals but you can't harm them. You only bump each other out of the way. Comments showed that part caused more grief to playtesters than anything! It was valuable feedback at the time."
  +"<br><br>This was a first time attempting to make a full game on my own! And a first time doing many things in javascript without any libraries, like canvas drawing and generating sound. Features my own image compression scheme."
  +"<br><br>Controls: left=a, right=d, space=jump, w=wiggle (drop a passenger)",
  coverVideo:`<iframe src="https://player.vimeo.com/video/432701435" class="vimeoVid" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  imageGallery:["apenaps.png"],
  iconImage:"apenapsicon.png",
  tags:["Javascript","Game Design","Sound Design"],
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





  //******************** LIQUID PERCEPTIONS ******************************
  {
  title:"Liquid Perceptions",
  fullDescription:"Liquid Perceptions is a research-creation project by Olivia McGilchrist, Seyed M. Tabatabaei, Julia Salles and Dougy Hérard at the Milieux Institute at Concordia Univeristy, for which I provided some sound design work. "
  +"<br><br>In this dual VR and non-VR experience, two players compete by catching as many fish as they can on a touch screen while a third player, wearing the VR set, witnesses directly the ecological damage of the first two players' fishing, as they swim across the increasingly dangerous underwater environment that lies beneath."
  +"<br>I created sound effects and edited provided musical material to create different soundtracks for the underwater environment (for the VR user's headphones) and overwater (speakers heard by everyone).<br> I programmed the soundtrack in Max MSP (communicating with the Unity project using OSC), to route the soundtracks easily and to allow for some sound design experimentation. The final result featured use of granulation to handle large amounts of sound emitting objects, and some basic motion mapping.",
  iconImage:'lpicon.png',
  coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" class="vimeoVid" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <div class="videoCredits">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  tags:["Sound Design","Max MSP", "Unity"],
  date:[20,12,2019],

  },




  //******************** FASTENED FURIOUS ******************************
  {
  title:"Fastened Furious",
  fullDescription:`Fastened Furious was created for the Ubisoft 2019 Game Lab Competition, where the theme was “spectacle.” The game is a race between two teams of two players tethered together, overcoming wacky obstacles and racing to the finish line. Our game was nominated for the Jury's Special Award. (summary and images by Nicole Lin)
<br><br>I picked and produced sound effects, composed BGM tracks, set up the project in Wwise and scripted audio triggers in C#. The soundtrack featured midi instruments that would interchange during gameplay, using tools included in Wwise and some C# scripting on the Unity side.
<br><br>Collaborators: Dougy Herard, Zied Jebali, Hiu Tung Lam, Ricardo Liganor, Melissa Lim, Nicole Lin, Scott Smith`,
  iconImage:'fficon.png',
  coverVideo:`<iframe src="https://player.vimeo.com/video/395510779" class="vimeoVid" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <div class="videoCredits">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  tags:["Sound Design","Wwise", "Unity", "C#","Music"],
  date:[1,4,2019],
  soundcloudDescription:"BGM tracks from Fastened Furious:",
  soundcloudLink: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,
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
  tags:["Processing (java)","Networking"],
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
soundcloudLink:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1096301104&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/featured" title="featured" target="_blank" style="color: #cccccc; text-decoration: none;">featured</a></div>`

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
