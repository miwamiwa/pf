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

let projectDescriptions = [


  //******************** 560 DODGER ******************************
  {
    title:"560 Dodger",
    fullDescription:"560 Dodger is my entry for Tweet Tweet jam 4 hosted on itch.io, the goal of which was to make a javascript game in 560 characters or less (the length of two tweets), using any library. "
    +"<br>I tried my hand at making a classic platform dodging game using p5.js. <br> Below is the version I submitted, and also a more elaborate take which I made shortly after the jam was over."
    +"<br><br>Controls: (version 1) W,S to move up and down. Press R to start a new random level."
    +"<br>In the second version, green bars provide a temporary size reduction. Refreshing the page loads a new level, while pressing R restarts the same level. ",
    coverImage:"560dodger2.png",
    tags:["Javascript"],
    date:[5,5,2020],
    externalLinks:[

      {
        title:"Play Version 1 (jam submission)",
        link:"https://sampc.itch.io/560dodger"
      },
      {
        title:"Play latest Version",
        link:"https://miwamiwa.github.io/560Dodger/"
      },

      {
        title:"560 Dodger Github",
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
  fullDescription:"Bitsy project for CART 215 Game Design class",
  tags:["Game design","Bitsy"],
  date:[1,12,2019],
  coverImage:"laundromadness_preview.png",
  externalLinks:[
    {
      title:"Play Laundromadness",
      link:"https://sampc.itch.io/laundromadness"
    }
  ]
},

{
  title: 'Bad Bots',
  fullDescription: 'Solo game project submitted to GMTK Game Jam 2020. Game, sounds and art made by me in 48 hours. The theme was "out of control".',
  tags:['Game design','Sound Design','Unity','Blender',"Music"],
  date:[12,07,2020],
  coverImage:'badbot.png',
  externalLinks:[
    {
      title:"Gameplay video",
      link:'https://vimeo.com/440352020'
    },
    {
      title:'SFX video',
      link:'https://vimeo.com/440352144'
    },
    {
      title:'Play Bad Bots',
      link:'https://sampc.itch.io/bad-bots-gmtk-2020-jam'
    }
  ]
},


//******************** APE NAPS ******************************
  {
  title:"Ape Naps",
  fullDescription:"Apenaps is my submission for the 2019 edition of Js 13k Games, where the goal is to make a javascript game that weighs 13kb or less when zipped, all files and libraries included."
  +"<br>The theme of the competition was 'Back', so here is a game in which you (mama ape) bring your kids back home, on your back, to some Bach. "
  +"<br><br>I coded my own audio and visual frameworks in a effort to cram in as many images and as much sound as possible, which I think gave some pretty interesting results. From a gameplay perspective, this is sort of an unfortunate case of too much of me testing my own game (it's too hard!). I am planning on updating this in the near future."
  +"<br><br>Controls: left=a, right=d, space=jump, w=wiggle (drop a passenger)",
  coverVideo:`<iframe src="https://player.vimeo.com/video/432701435" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  tags:["Javascript","Game design","Sound Design"],
  date:[13,9,2019],
  externalLinks:[
    {
      title:"Play Ape Naps",
      link:"https://js13kgames.com/entries/ape-naps"
    },
   {
   title:"Ape Naps Github",
   link:"https://github.com/miwamiwa/13k2019"
   },
   {
   title:"Js 13k Games Website",
   link:"https://js13kgames.com/"
 }
  ]
  },





  //******************** LIQUID PERCEPTIONS ******************************
  {
  title:"Liquid Perceptions",
  fullDescription:"Liquid Perceptions is a research-creation project by Olivia McGilchrist, Seyed M. Tabatabaei, Julia Salles and Dougy Hérard at the Milieux Institute at Concordia Univeristy, for which I provided some sound design work. "
  +"<br><br>In this dual VR and non-VR experience, two players compete by catching as many fish as they can on a touch screen while a third player, wearing the VR set, witnesses directly the ecological damage of the first two players' fishing, as they swim across the increasingly dangerous underwater environment that lies beneath."
  +"<br>I created sound effects and edited provided musical material to create different soundtracks for the underwater environment (for the VR user's headphones) and overwater (speakers heard by everyone).<br> I programmed the soundtrack in Max MSP (communicating with the Unity project using OSC), to route the soundtracks easily and to allow for some sound design experimentation. The final result featured use of granulation to handle large amounts of sound emitting objects, and some basic motion mapping.",
  coverVideo:`<iframe src="https://player.vimeo.com/video/395215205" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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
  coverVideo:`<iframe src="https://player.vimeo.com/video/395510779" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <div class="videoCredits">Sneak peak video by Dougy Hérard</div>`, // OR coverVideo:"<iframe>",
  tags:["Sound Design","Wwise", "Unity", "C#","Music"],
  date:[1,4,2019],
  soundcloudDescription:"BGM tracks from Fastened Furious:",
  soundcloudLink: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1007037676%3Fsecret_token%3Ds-i4Q0D&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/fastened-furious-soundtrack-1/s-i4Q0D" title="fastened furious soundtrack" target="_blank" style="color: #cccccc; text-decoration: none;">fastened furious soundtrack</a></div>`,
  imageGallery:["FF_title.jpg","FF_03.jpg","FF_05.jpg"],
  externalLinks:[
    {
      title:"Playthrough video (with BGM and SFX)",
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
tags:["Blender","Animation Nodes"],
date:[15,4,2020],

},

{
  title:'soundcloud page',
  fullDescription:'Selected musical examples',
  //coverImage:'',
tags:['Music'],
date:[12,12,2012],
soundcloudLink:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1096301104&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zpoon" title="zpoon" target="_blank" style="color: #cccccc; text-decoration: none;">zpoon</a> · <a href="https://soundcloud.com/zpoon/sets/featured" title="featured" target="_blank" style="color: #cccccc; text-decoration: none;">featured</a></div>`

},

{
title:"Face animation",
fullDescription:"Short video made for CART 362 3D Digital Production class. Audio from Jaden Smith Reads Mind Blowing Facts About The Universe.",
coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/CuWQTk93K_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
tags:["Blender"],
date:[15,4,2020],

},

{
title:"Parc-laf-scape",
fullDescription:"After Effects project made for CART 212 Digital Media Studio class. ",
coverVideo:`<iframe width="560" height="315" src="https://www.youtube.com/embed/5frYCJ43ALQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
tags:["After Effects"],
date:[20,2,2019],

},
]
