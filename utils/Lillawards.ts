// to add a category add IN ORDER to linkslist a "best-category",
// then in the categoryNomineeList and getGameDetails add case linkslist[newnumber]

export const linkslist = [
  "game-of-the-year",
  "best-narrative",
  "best-art-direction",
  "best-gameplay",
  "best-story",
  "games-for-impact",
  "best-action-game",
  "best-action-adventure",
  "best-role-playing",
  "best-sim-strategy",
  "best-indie",
  "best-music",
  "best-journey",
];

// to add a game add it to the list below and to getGameData to give it a proper image

export const gamesList = [
  "ff7",
  "halflife",
  "psychonauts",
  "ittakestwo",
  "eldenring",
  "godofwar",
  "outerwildseote",
  "theartfulescape",
  "chicory",
  "deathsdoor",
  "inscryption",
  "superhotvr",
  "lifeisstrange2",
  "titanfall",
  "thronebreaker",
  "trianglestrategy",
  "unepic",
  "masseffect",
  "ori",
  "theforgottencity",
  "eliza",
  "dorfromantik",
];

export const categoryNomineeList = (gameSlug) => {
  if (gameSlug === "all") {
    return gamesList;
  }
  switch (gameSlug) {
    case linkslist[0]:
      return [
        "eldenring",
        "halflife",
        "psychonauts",
        "ittakestwo",
        "godofwar",
        "outerwildseote",
        "ori",
      ];
    case linkslist[1]:
      return [
        "psychonauts",
        "ittakestwo",
        "godofwar",
        "outerwildseote",
        "lifeisstrange2",
        "masseffect",
        "theforgottencity",
        "eliza",
      ];
    case linkslist[2]:
      return [
        "psychonauts",
        "ittakestwo",
        "eldenring",
        "theartfulescape",
        "chicory",
        "godofwar",
        "ori",
      ];
    case linkslist[3]:
      return [
        "halflife",
        "psychonauts",
        "ittakestwo",
        "superhotvr",
        "godofwar",
        "titanfall",
        "deathsdoor",
        "ori",
      ];
    case linkslist[4]:
      return [
        "psychonauts",
        "ff7",
        "godofwar",
        "thronebreaker",
        "lifeisstrange2",
        "trianglestrategy",
        "masseffect",
        "theforgottencity",
        "eliza",
      ];
    case linkslist[5]:
      return [
        "ittakestwo",
        "outerwildseote",
        "chicory",
        "theartfulescape",
        "lifeisstrange2",
        "eliza",
      ];
    case linkslist[6]:
      return [
        "ff7",
        "eldenring",
        "godofwar",
        "deathsdoor",
        "superhotvr",
        "titanfall",
        "masseffect",
      ];
    case linkslist[7]:
      return ["halflife", "psychonauts", "godofwar", "titanfall", "masseffect"];
    case linkslist[8]:
      return [
        "unepic",
        "psychonauts",
        "eldenring",
        "godofwar",
        "ff7",
        "masseffect",
      ];
    case linkslist[9]:
      return [
        "inscryption",
        "chicory",
        "trianglestrategy",
        "dorfromantik",
        "thronebreaker",
      ];
    case linkslist[10]:
      return [
        "theartfulescape",
        "chicory",
        "deathsdoor",
        "inscryption",
        "unepic",
        "theforgottencity",
        "eliza",
      ];
    case linkslist[11]:
      return [
        "outerwildseote",
        "theartfulescape",
        "chicory",
        "deathsdoor",
        "lifeisstrange2",
        "ori",
        "ff7",
      ];
    case linkslist[12]:
      return [
        "theforgottencity",
        "masseffect",
        "eldenring",
        "halflife",
        "lifeisstrange2",
        "ff7",
        "godofwar",
        "outerwildseote",
        "titanfall",
      ];
    default:
      return [];
  }
};

export const getGameDetails = (categorySlug: string) => {
  switch (categorySlug) {
    case linkslist[0]:
      return {
        title: "Game of the year",
        videourl: "https://www.youtube.com/embed/h4w-YxhxxkY",
        description:
          "Recognizing a game that delivers the absolute best experience across all creative and technical fields.",
        winner: {
          title: "Spoilerino",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam, accusantium maiores quod nobis, harum, voluptatum facere vero excepturi laborum tempore perferendis qui error repellat ex incidunt a quisquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam, accusantium maiores quod nobis, harum, voluptatum facere vero excepturi laborum tempore perferendis qui error repellat ex incidunt a quisquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      };
    case linkslist[1]:
      return {
        title: "Best Narrative",
        videourl: "https://www.youtube.com/embed/RxsU3-nYwGQ",
        description:
          "For outstanding storytelling and narrative development in a game.",
        winner: {
          title: "The Forgotten City",
          shorttitle: "theforgottencity",
          description:
            "The Forgotten City brings you a story that uses a simple time loop to deliver an interesting story full of unexpected moments and deep conversations. It has multiple endings and even if it isn't challanging in terms of difficulty it's still entertaining and a joy to dive into. You won't feel bored by the repeating of the loop since the game design is well thought, even if the game is based on a simple Skyrim's mod.",
        },
      };
    case linkslist[2]:
      return {
        title: "Best Art Direction",
        videourl: "https://www.youtube.com/embed/KVuZbi_V1XE",

        description:
          "For outstanding creative and/or technical achievement in artistic design and animation.",
        winner: {
          title: "It takes two",
          shorttitle: "ittakestwo",
          description:
            "It takes two is such a joyful experience. The levels that you pass through with your characters are so diverse and well thought, full of creativity and colors. You can go from the snowy mountains to the depth of the sea, you'll ride super cute spiders and you'll be solving puzzles in outerspace. Every new level that I started made me giggle with joy and emotion for the surprises and delightful colors and ideas presented. A shoutout to psychonauts 2, that delivers the same kind of experience, artistic-wise, but I felt a little too repetitive compared to It Takes Two.",
        },
      };
    case linkslist[3]:
      return {
        title: "Best Gameplay",
        videourl: "https://www.youtube.com/embed/dD3psAvCmOw",
        description:
          "Recognizing a game that stands out for playability, enjoyability of its gameplay and have-a-good-time-ity.",
        winner: {
          title: "Half Life: Alyx",
          shorttitle: "halflife",
          description:
            "Half life Alyx must win this award. Unfortunately what wins this prize is not some new sensational way of playing half life alyx, but just the perfect implementation of the VR environment. The gameplay is easy, a fps with kinetik gloves, but the experience is out of this world. It's a revolution of the videogames, being able to pick up bottles with liquid inside and just watch the bubbles react to the motion of your hand. Drawing on the window glass with a sharpie, throwing dead animals around or just catching things with your gloves are actions that I'd consider boring but they become entertaining in this game. It is a shooter game, it becomes a survival horror and merges small puzzles. It has it all and it delivers the experience using all the tools that a VR headset can provide, making it an unbeatable winnner in this category this year. You get so hooked with the gameplay that outside the game you'll probably try to grab things with your non-existing kinetic gloves.",
        },
      };
    case linkslist[4]:
      return {
        title: "Best Story",
        videourl: "https://www.youtube.com/embed/h4w-YxhxxkY",
        description:
          "For bringing an emotional and immersive story, carefully written with quality and outstanding content. ",
        winner: {
          title: "Mass Effect Legendary Edition",
          shorttitle: "masseffect",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam, accusantium maiores quod nobis, harum, voluptatum facere vero excepturi laborum tempore perferendis qui error repellat ex incidunt a quisquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam, accusantium maiores quod nobis, harum, voluptatum facere vero excepturi laborum tempore perferendis qui error repellat ex incidunt a quisquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      };
    case linkslist[5]:
      return {
        title: "Games for Impact",
        videourl: "https://www.youtube.com/embed/lj2cQuRMLvY",
        description:
          "For a thought-provoking game that can have a pro-social meaning or message or that just leaves you with jaw dropping moments.",
        winner: {
          title: "Outer Wilds: Echoes of the Eye",
          shorttitle: "outerwildseote",
          description:
            "Outer Wilds: Echoes of the Eye. It's a little unfair that I mix games with pro-social meaning messages with 'stunning' games, but what matters is that the game has impacted you in a way that you'll hardly forget events or messages that occoured in the game. And this 15 to 20 hours dlc gets the prize for that. Just like the main game I can't tell much about it without spoiling the game, but the twists that you get by playing it are just formidable. It's so amazing that I just consider it a standalone game deserving a lillawards2022 prize.",
        },
      };
    case linkslist[6]:
      return {
        title: "Best action game",
        videourl: "https://www.youtube.com/embed/2AkRnBUCWJI",
        description:
          "For the best game in the action genre focused primarily on combat.",
        winner: {
          title: "Titanfall 2",
          shorttitle: "titanfall",
          description:
            "Titanfall 2 wins the tie over the other contestants. It's due to it's semplicity and it's variety. You can both fight as a human or as a mecha and it's a fun shooter game in both ways. It's like playing an evangelion game but with MMMURICA in mind instead of japanese hentais. It's easy from the get go and dynamic enough to keep you interested in the gameplay throuought the whole campaign.",
        },
      };
    case linkslist[7]:
      return {
        title: "Best Action / Adventure",
        videourl: "https://www.youtube.com/embed/VHLjHr__g4I",
        description:
          "For the best action/adventure game, combining combat with traversal puzzle solving.",
        winner: {
          title: "God of War",
          shorttitle: "godofwar",
          description:
            "God of war is the God of the genre. When I think of this genre only triple A games come to my mind and God of war is the best that i've played this year. It has some cutscenes that leave you breathless, but what makes this game the best of the genre is the fluidity of the mechanics, the fun of the fights, the small challanges and puzzles that you find on your way, the story that gets told effortlessly while progressing through the game. It's a masterpiece in many aspects and still is one of the best action adventure games of all times out there.",
        },
      };
    case linkslist[8]:
      return {
        title: "Best Role Playing",
        videourl: "https://www.youtube.com/embed/5hTJraZbjO0",
        description:
          "For the best game designed with rich player character customization and progression.",
        winner: {
          title: "Mass Effect: Legendary Edition",
          shorttitle: "masseffect",
          description:
            "Mass Effect Legendary Edition is the sum of a space trip that lasted years and I could revive on this incredible remaster. The progression through the three games and the customization creates a connection with your character after every ending credits. All the choices you make that will afect your future help this immersion in the world and in the character. Also the gameplay is strictly linked to all the choices you make in terms of equipement or skills. It's the ultimate 360 RPG space experience.",
        },
      };
    case linkslist[9]:
      return {
        title: "Best sim / strategy",
        videourl: "https://www.youtube.com/embed/i-7bXJGYyQw",
        description:
          "Best game focused on real time or turn-based simulation or strategy gameplay.",
        winner: {
          title: "Thronebreaker",
          shorttitle: "thronebreaker",
          description:
            "Thronebreaker surprises you with how fluently it merges card fights with the storyline. All the battles include some of the lore of the story in the game, even the optional challenges are involved in the story. The game can provide a good challenge that will make you spend some time thinking about your deck and actions on harder difficulties. It has a good story, it's well drawn and most importantly the story is interesting and has a surprisingly good voice acting.",
        },
      };
    case linkslist[10]:
      return {
        title: "Best Indie",
        description: "For the best game created by a independent studio.",
        videourl: "https://www.youtube.com/embed/dCyn_PTDXJI",
        winner: {
          title: "Inscryption",
          shorttitle: "inscryption",
          description:
            "Inscryption gets the prize for the best Indie game. Super original gameplay, the whole art design of the game is so interesting and not as shallow as it might appear at the beginning. The game is not just a roguelike card game, it's so much more, but I don't want to spoil anything so I'll just advice to all of the four listeners of this video to give it a try if you have a chance! (And remember to add me to your deck!)",
        },
      };
    case linkslist[11]:
      return {
        title: "Best Music",
        videourl: "https://www.youtube.com/embed/Z8S_Eg1L1FI",
        description:
          "For outstanding music, inclusive of score, original song and/or licensed soundtrack.",
        winner: {
          title: "Life is Strange 2",
          shorttitle: "lifeisstrange2",
          description:
            "Life is strange 2 has the best compilation of songs of the games list. Of course FF7 remastered has the best songs. Obviously I still cry listening to outer wilds soundtrack. Did I pass days sleeping while listening some of death's door songs? Probably. But the ones that I put on repeat the most were the ones from Life is Strange 2.",
        },
      };
    case linkslist[12]:
      return {
        title: "Best Journey",
        description: "For a game that brought you on a special journey.",
        videourl: "https://www.youtube.com/embed/tQqckYVc5Ls",
        winner: {
          title: "Elden Ring",
          shorttitle: "eldenring",
          description:
            "Elden Ring won over other though competitors like god of war or mass effect. The feel that I got from Elden ring of starting some quest and, after two hours, finding myself lost in a completely other quest is something that I haven't felt with the other games. I just couldn't stop playing it, I felt amazed and thrilled by every zone and every enemy I found in the game. Being an open world it allows you to explore and pushes you to that kind of immersion, but this is the best open world game that I've found so far since it's always full of things to see, watch, and die for.",
        },
      };
    default:
      return {
        title: "Wat",
        videourl: "https://www.youtube.com/embed/h4w-YxhxxkY",
        description:
          "There's no category created for this one, I'm sorry! Maybe I just haven't found a proper game to put in this category!",
        winner: {
          title: "Spoilerino",
          description: "No descriptionino patatino",
        },
      };
  }
};

export const getGameData = (gameName) => {
  switch (gameName) {
    case "ff7":
      return {
        image: "/assets/ff7.jpg",
        name: "Final fantasy 7 remake",
        styles: "",
        shortName: "ff7",
      };
    case "halflife":
      return {
        image: "/assets/halflife.jpg",
        name: "Half Life Alyx",
        styles: "",
        shortName: "halflife",
      };
    case "psychonauts":
      return {
        image: "/assets/psychonauts.jpg",
        name: "Psychonauts 2",
        styles: "",
        shortName: "psychonauts",
      };
    case "ittakestwo":
      return {
        image: "/assets/ittakestwo.jpg",
        name: "It Takes Two",
        styles: "",
        shortName: "ittakestwo",
      };
    case "eldenring":
      return {
        image: "/assets/eldenring.jpg",
        name: "Elden Ring",
        styles: "",
        shortName: "eldenring",
      };
    case "godofwar":
      return {
        image: "/assets/godofwar.jpg",
        name: "God of War",
        styles: "",
        shortName: "godofwar",
      };
    case "outerwildseote":
      return {
        image: "/assets/outerwilds.jpg",
        name: "Outer Wilds EOTE",
        styles: "",
        shortName: "outerwildseote",
      };
    case "theartfulescape":
      return {
        image: "/assets/artfulescape.jpg",
        name: "The Artful Escape",
        styles: "",
        shortName: "theartfulescape",
      };
    case "chicory":
      return {
        image: "/assets/chicory.jpg",
        name: "Chicory",
        styles: "",
        shortName: "chicory",
      };
    case "deathsdoor":
      return {
        image: "/assets/deathsdoor.jpg",
        name: "Death's door",
        styles: "",
        shortName: "deathsdoor",
      };
    case "inscryption":
      return {
        image: "/assets/inscryption.jpg",
        name: "Inscryption",
        styles: "",
        shortName: "inscryption",
      };
    case "superhotvr":
      return {
        image: "/assets/superhot.jpg",
        name: "Superhot VR",
        styles: "",
        shortName: "superhotvr",
      };
    case "lifeisstrange2":
      return {
        image: "/assets/lifeisstrange2.jpg",
        name: "Life is strange 2",
        styles: "",
        shortName: "lifeisstrange2",
      };
    case "titanfall":
      return {
        image: "/assets/titanfall.jpg",
        name: "Titanfall 2",
        styles: "",
        shortName: "titanfall",
      };
    case "thronebreaker":
      return {
        image: "/assets/thronebreaker.jpg",
        name: "Thronebreaker",
        styles: "",
        shortName: "thronebreaker",
      };
    case "trianglestrategy":
      return {
        image: "/assets/trianglestrategy.jpg",
        name: "Triangle Strategy",
        styles: "",
        shortName: "trianglestrategy",
      };
    case "unepic":
      return {
        image: "/assets/unepic.jpg",
        name: "Unepic",
        styles: "",
        shortName: "unepic",
      };
    case "masseffect":
      return {
        image: "/assets/masseffect.jpg",
        name: "Mass Effect Legendary Edition",
        styles: "",
        shortName: "masseffect",
      };
    case "ori":
      return {
        image: "/assets/ori.jpg",
        name: "Ori and the Will of the Wisps",
        styles: "",
        shortName: "ori",
      };
    case "theforgottencity":
      return {
        image: "/assets/tfc.jpg",
        name: "The Forgotten City",
        styles: "",
        shortName: "theforgottencity",
      };
    case "eliza":
      return {
        image: "/assets/eliza.jpg",
        name: "Eliza",
        styles: "",
        shortName: "eliza",
      };
    case "dorfromantik":
      return {
        image: "/assets/dorfromantik.jpg",
        name: "Dorfromantik",
        styles: "",
        shortName: "dorfromantik",
      };

    default:
      return {
        image: "/assets/granola.jpg",
        name: gameName,
        styles: "",
        shortName: "gamenotfound",
      };
      break;
  }
};

export const buildGameData = (gameNames: String[]) => {
  const gameData = gameNames.map((name) => {
    return getGameData(name);
  });
  return gameData;
};
