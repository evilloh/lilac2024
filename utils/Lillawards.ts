// to add a category add IN ORDER to linkslist a "best-category",
// then in the categoryNomineeList and getGameDetails add case linkslist[newnumber]

export const linkslist = [
  'game-of-the-year',
  'best-narrative',
  'best-art-direction',
  'best-gameplay',
  'best-story',
  'games-for-impact',
  'best-action-game',
  'best-action-adventure',
  'best-role-playing',
  'best-sim-strategy',
  'best-indie',
  'best-music',
  'best-journey',
];

// to add a game add it to the list below and to getGameData to give it a proper image

export const gamesList = [
  'bg3',
  'cocoon',
  'goldenidol',
  'sliceanddice',
  'talos',
  'tunic',
  'showgun',
  'stray',
  'ghost',
  'dave',
  'ratchet',
  'tlou2',
  'tothemoon',
  'seaofstars',
  'balatro',
  'animalwell',
  'beginnersguide',
  'nier',
];

export const categoryNomineeList = (gameSlug) => {
  if (gameSlug === 'all') {
    return gamesList;
  }
  switch (gameSlug) {
    case linkslist[0]:
      return ['bg3', 'tunic', 'showgun', 'ghost', 'tlou2', 'dave', 'ratchet'];
    case linkslist[1]:
      return [
        'stray',
        'talos',
        'ghost',
        'dave',
        'tlou2',
        'tothemoon',
        'beginnersguide',
        'bg3',
      ];
    case linkslist[2]:
      return [
        'bg3',
        'cocoon',
        'balatro',
        'tunic',
        'stray',
        'ghost',
        'ratchet',
        'tlou2',
        'seaofstars',
        'animalwell',
        'dave',
      ];
    case linkslist[3]:
      return ['bg3', 'tunic', 'showgun', 'ghost', 'dave', 'ratchet', 'balatro'];
    case linkslist[4]:
      return ['tlou2', 'tothemoon', 'beginnersguide', 'ghost', 'stray'];
    case linkslist[5]:
      return ['bg3', 'talos', 'stray', 'tlou2', 'tothemoon', 'beginnersguide'];
    case linkslist[6]:
      return ['tunic', 'ghost', 'ratchet'];
    case linkslist[7]:
      return ['tunic', 'cocoon', 'dave', 'tlou2'];
    case linkslist[8]:
      return ['bg3', 'showgun', 'ratchet', 'seaofstars', 'sliceanddice'];
    case linkslist[9]:
      return [
        'bg3',
        'sliceanddice',
        'cocoon',
        'tunic',
        'showgun',
        'seaofstars',
        'balatro',
        'animalwell',
      ];
    case linkslist[10]:
      return [
        'cocoon',
        'goldenidol',
        'showgun',
        'talos',
        'sliceanddice',
        'stray',
        'dave',
        'tothemoon',
        'seaofstars',
        'balatro',
        'animalwell',
        'beginnersguide',
      ];
    case linkslist[11]:
      return ['nier', 'tunic', 'tlou2', 'seaofstars'];
    case linkslist[12]:
      return ['bg3', 'tunic', 'ghost', 'stray', 'dave', 'tlou2'];
    default:
      return [];
  }
};

export const getGameDetails = (categorySlug: string) => {
  switch (categorySlug) {
    case linkslist[0]:
      return {
        title: 'Game of the year',
        videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description:
          'Recognizing a game that delivers the absolute best experience across all creative and technical fields.',
        winner: {
          title: 'Baldur’s Gate 3',
          shorttitle: 'bg3',
          description:
            "What can I say that hasn't been said online already. This game embraces the DnD world and rules and show you the best videogame DnD inspired that has ever been created. I'd say it's Divinity original Sin on steroids. I'll just say a few good things about the game, the rest you can look online. 1. Monks work well without armor, so you can have your monk with the weenie out all the time. 2. Barbarians work well without armor, so you can have your Barbarian with the weenie out all the time. 3. Druids in forms don't show any armor, so it's like having the weenie out all the time (for the Lillacorp furries lovers). 4. You can fuck with so many of the characters. 5. You can be poliamorous. 6. Tentacles. ",
        },
      };
    case linkslist[1]:
      return {
        title: 'Best Narrative',
        videourl: 'https://www.youtube.com/embed/RxsU3-nYwGQ',
        description:
          'For outstanding stoprerytelling and narrative development in a game.',
        winner: {
          title: "The Beginner's Guide",
          shorttitle: 'beginnersguide',
          description:
            "This game talks about creativity, passions, hobbies, the pursue of one's happiness and human behavior. It could be a ted talk, or a video on youtube, but the fact that talks about videogames makes the choice of storytell this as a videogame the best choice. It is bittersweet, hearthwarming and disappointing, lovely and infuriating. It's a game about people more than a game about videogames. It's short but tells you enough to be considered complete. A must play story-driven walking simulator that inspires you and makes you think.",
        },
      };
    case linkslist[2]:
      return {
        title: 'Best Art Direction',
        videourl: 'https://www.youtube.com/embed/KVuZbi_V1XE',

        description:
          'For outstanding creative and/or technical achievement in artistic design and animation.',
        winner: {
          title: 'Sea of Stars',
          shorttitle: 'seaofstars',
          description:
            "Such a great great pixel art old stile jrpg game. The art was the most attractive part for me of this game and what led me to try it. Then the music kicks in and you fall in love with all the art department. It is super cozy since you feel like playing one of those old jrpg from the 00's. The gameplay is entertaining and engaging, but unfortunately the repetitive mechanics tend to feel like a chore in the later part of the game. The story is kind of cool but with some flaws too, villains being villains and heroes being heroes. It is not a perfect game, but if you relax and try to enjoy this 28ish hours game with no expectations you'll have a great time kicking some butts with an incredible OST and great pixel art.",
        },
      };
    case linkslist[3]:
      return {
        title: 'Best Gameplay',
        videourl: 'https://www.youtube.com/embed/dD3psAvCmOw',
        description:
          'Recognizing a game that stands out for playability, enjoyability of its gameplay and have-a-good-time-ity.',
        winner: {
          title: 'Dave the Diver',
          shorttitle: 'dave',
          description:
            "This game is a mix of everything. Its delightful 2D pixel art brings you a vibrant and joyful sea environment that comes along with wonderful cutscenes animations, which you don't usually see in pixel art games. The game is supposedly about fishing fish and serving sushi, but it's much more. The more you progress the more you realize that it's filled with minigames, easter eggs from nerd culture, exploration and a whole lot of content. It's the kind of game you can easily go in blind and have tons of fun. Rating: 5 stars.",
        },
      };
    case linkslist[4]:
      return {
        title: 'Best Story',
        videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description:
          'For bringing an emotional and immersive story, carefully written with quality and outstanding content. ',
        winner: {
          title: 'Just a To the Moon Series Beach Episode',
          shorttitle: 'tothemoon',
          description: `
          I'll be hones, I was about to give this prize to to the moon, but this description fits perfectly with TLOU2. I have another prize for to the mooon :).
The game follows the same gameplay pattern as the first one: exploration, stealth, cinematic. Rinse and repeat. It might seem boring (and it would be) if it wasn't for the masterfully crafted world. This game is the most realistic game I've played so far in terms of graphics, thus transforming what would be a boring exploration phase into a stunning walking simulator. The stealth sections I'm sure are very enjoyable, but I dislike stealth games and I get scared too easily, so I played the game on EXTRA easy mode. I appreciate that the developers gave the chance to enjoy the incredibly well told story also to those who can't properly play the game like me.
The zombies and tension are very horrorlike sometimes, but it's also spaced with sections where the enemies are humans. The gem of the game is obviously the storytelling, which makes you feel like you're playing a literal movie. Someone might not like some of the choices of the story, but it's undeniable the quality behind the characters development, the events, the emotions that wrap the story. 


PS: Now i understand why the review bombing and the backlash. Please. Spoiler alert. 
There are female characters that are the main characters. There are lesbians who might not be the male-fantasy kind of lesbians. There is a woman that is muscular which means that... i don't know what incels feel when they see a muscular woman. There's a transgender person. A lot of LGBTQ+ and women visibility that isn't forced in the story aggressively and a lot of incels out there got angry about it. pff
          `,
        },
      };
    case linkslist[5]:
      return {
        title: 'Games for Impact',
        videourl: 'https://www.youtube.com/embed/lj2cQuRMLvY',
        description:
          'For a thought-provoking game that can have a pro-social meaning or message or that just leaves you with jaw dropping moments.',
        winner: {
          title: 'Just a To the Moon Series Beach Episode',
          shorttitle: 'tothemoon',
          description: `Just like what I would say about to the moon I'd say about this game. The gameplay is just exploring in a RPGMaker-like environment basically, with a really nice story and good old music. Enough said. If you liked to the moon you'd most probably like this one too.

          For me or those who dont care about spoilers:
          After weeks I still think about it. I still think about
          
          "During the trip, I saw something I liked at the store. I dreamed that you saw that I wanted it, and got it for me.... That you bought it in secret and hung it on my door to surprise me. You would do that, right...? "`,
        },
      };
    case linkslist[6]:
      return {
        title: 'Best action game',
        videourl: 'https://www.youtube.com/embed/2AkRnBUCWJI',
        description:
          'For the best game in the action genre focused primarily on combat.',
        winner: {
          title: 'Ratchet & Clank: Rift Apart',
          shorttitle: 'ratchet',
          description:
            "I wasn't so keen on playing this game since I felt it to be... childish? But all the good reviews led me to try it, and I'm glad I did. I ate this game with a lot of excitement and fun. The game CAN be for a younger audience also, but it doesn't mean it isn't fun. Lots of weapons and ways to defeat your many enemies. The graphics are stunning and the environments diverse and vibrant. The game doesn't drag you around with stupid boring quests (unless you want it to) and feels really fresh, fast  joyful and fun! ",
        },
      };
    case linkslist[7]:
      return {
        title: 'Best Action / Adventure',
        videourl: 'https://www.youtube.com/embed/VHLjHr__g4I',
        description:
          'For the best action/adventure game, combining combat with traversal puzzle solving.',
        winner: {
          title: 'Tunic',
          shorttitle: 'tunic',
          description: ` Remember that feeling when you had your new PS1 videogame bought at the only local videogame store? How excited you were since it was something new and you knew you'd spend a lot of time on it. And remember how it was in english, manual included? Y
          ou were so happy to play the game but you struggled a lot with understanding what to do, what the story was, what they were saying... 
          Oh wait! Maybe that thing was meant to do this!... And you got stuck, a lot, but you were happy anyways, even thought you had no internet to move on, no guides... just yourself and your patience.
          That 90's feeling is what Tunic is about. Also a cute fox and a couple of dark souls-like difficult spike. Oh and the music, such a characteristic style that doesn't overwhelm the game and takes you by the hand during the whole game`,
        },
      };
    case linkslist[8]:
      return {
        title: 'Best Role Playing',
        videourl: 'https://www.youtube.com/embed/5hTJraZbjO0',
        description:
          'Recognizing a game that delivers the absolute best experience across all creative and technical fields.',
        winner: {
          title: 'Baldur’s Gate 3',
          shorttitle: 'bg3',
          description:
            "What can I say that hasn't been said online already. This game embraces the DnD world and rules and show you the best videogame DnD inspired that has ever been created. I'd say it's Divinity original Sin on steroids. I'll just say a few good things about the game, the rest you can look online. 1. Monks work well without armor, so you can have your monk with the weenie out all the time. 2. Barbarians work well without armor, so you can have your Barbarian with the weenie out all the time. 3. Druids in forms don't show any armor, so it's like having the weenie out all the time (for the Lillacorp furries lovers). 4. You can fuck with so many of the characters. 5. You can be poliamorous. 6. Tentacles. ",
        },
      };
    case linkslist[9]:
      return {
        title: 'Best sim / strategy / puzzles',
        videourl: 'https://www.youtube.com/embed/i-7bXJGYyQw',
        description:
          'Best game focused on real time or turn-based simulation or strategy/puzzles gameplay.',
        winner: {
          title: 'Showgun Showdown',
          shorttitle: 'showgun',
          description: `It is smart, fast and addicting. It's challenging since it forces you to think ahead, but not too overwhelming since you only have to think ahead 1 or 2 moves and the battle field is pretty small. The first run you can complete in a few hours (or less!) but then the difficulty rises in a mostly healthy way. Over the 6 days I could beat 5 of them and it was challenging! A little too much towards the end (for me), but that's when you decide you can call it a day and move on.
Really loved the variety of weapons, almost all of them really viable in some builds.

Super worth it!
TIP FOR THE DEVS: pls make visible the bosses life, sometimes it's hard to know if you can lasthit :(

EDIT: I could beat the sixth day! I found myself coming to play again and again during lunchtimes since you can pause it whenever you want. I really liked the difficulty rise, the 6th day is a level where you have to know all the enemies and know how to fight with your own build admitting very few mistakes, sometimes the bosses must be done with 0 mistakes. Suuuuper worth the buy! <3

POST RELEASE EDIT: I'm impressed on how good this game was. After release they put a day 7 with higher difficulty and at the beginning for me it was impossible to even go through the first half. But it's here when you know that a roguelike game is good: I could beat day 7. The more I thought over the cards/shops the better I became. I made less mistakes. It is not random that the last 2 runs that I did were all through the last boss. Awesome strategic game, go for it 100% sure that you'll like a perfectly crafted challange!`,
        },
      };
    case linkslist[10]:
      return {
        title: 'Best Indie',
        description: 'For the best game created by a independent studio.',
        videourl: 'https://www.youtube.com/embed/dCyn_PTDXJI',
        winner: {
          title: 'Stray',
          shorttitle: 'stray',
          description: `Hop on and join the ride through this half-lifey post apocalyptic work on the back of a cute adorable wonderful cat. It's basically a walking simulator, slow paced but interesting to explore since you feel there's a story behind every thing you see. Walking around as a cat is what makes this game magic though, you scratch sofas, sleep on pillows, meow... just for the sake of it. It's delightful. The animations of the cat are very realistic which makes you feel like meowing to every robot you encounter. And the story might be simple but it's really touching. If wall-e and a cat had a videogame it would be Stray.`,
        },
      };
    case linkslist[11]:
      return {
        title: 'Best Music',
        videourl: 'https://www.youtube.com/embed/Z8S_Eg1L1FI',
        description:
          'For outstanding music, inclusive of score, original song and/or licensed soundtrack.',
        winner: {
          title: 'Nier: Automata',
          shorttitle: 'nier',
          description: `I must admit, I added Nier only to win this category. I'll break down all the cons of this awful game: 
This is perhaps the game that has respected my time as a player the least, ever. The game forces you to do three damn 7-hour runs, where the first and second are 95% IDENTICAL. Remember when you have to go to the refugee camp, which sends you to Pascal, then Pascal sends you back to the refugees, and then from the refugees you have to return to Pascal? Get ready to do it again. Running, because you still haven’t unlocked fast travel. I can imagine the developers thinking, “They’re going to have so much fun running from point A to point B for 15 minutes back and forth.”

Speaking of running from point A to point B, 50% of the game is just that. The world is massive in scale but completely empty, so you end up running through vast open fields… and that’s it. Sure, it gives you the impression of being in a huge area, but it gets tiring, especially when you’re running back and forth through the same damn locations for the third playthrough. And it’s not like these environments are rich with details; we’re literally talking about a desert and some ruins. The only interesting area is the amusement park, but having to redo it multiple times isn’t something I ever wanted to do.

Since I’m in full rant mode: what the hell is the point of the items? Did you use them? I’m talking about the consumables that give you a buff for, like, 15 seconds. The quick menu isn’t usable in battle because the fights are too fast-paced; you use it for health potions and nothing else. And pausing the game to go into the specific menu to use a consumable every 15 seconds seems ridiculous—it breaks the combat rhythm and feels clunky and not user-friendly. Maybe I just didn’t understand how to use the consumables?

Last night I logged back in and had to RE-do a part of act three that made me curse from the moment it started until the very end. Of course, it was another “go from point A to point B,” but this time you were forced to walk while robots attack you, and you can’t fight back. Basically, 10 minutes of “hope you don’t die, because if you do, you’ll have to do it all over again. I hope you bought more than 80 health potions” (minor gameplay spoiler). And why did I have to redo it? Because when I played it before, I finished that part and started the next one, but I couldn’t save, so I had to do it again. This choice of forcing specific save points and not letting you save when you want—or having autosave—feels like another huge lack of respect for the player’s time. I remember the first part of the game, where you start in the spaceship and finish by defeating the boss in the factory—I had to redo that at least three times because I kept dying at the boss… and holy f**ing hell.*

The game has so much potential; the combat is fun, and the gameplay is layered, not just Souls-like fights but also arcade-style elements, and I love the idea. But if I spend the whole game thinking of every curse word imaginable, I end up not enjoying the experience. And especially not enjoying the story, which everyone says is one of the best ever created in a video game—but you only understand it after finishing the third playthrough, for f**’s sake.*
. 

Having said this, the game's music is a masterpiece.`,
        },
      };
    case linkslist[12]:
      return {
        title: 'Best Journey',
        description: 'For a game that brought you on a special journey.',
        videourl: 'https://www.youtube.com/embed/tQqckYVc5Ls',
        winner: {
          title: 'Baldur’s Gate 3',
          shorttitle: 'bg3',
          description:
            "What can I say that hasn't been said online already. This game embraces the DnD world and rules and show you the best videogame DnD inspired that has ever been created. I'd say it's Divinity original Sin on steroids. I'll just say a few good things about the game, the rest you can look online. 1. Monks work well without armor, so you can have your monk with the weenie out all the time. 2. Barbarians work well without armor, so you can have your Barbarian with the weenie out all the time. 3. Druids in forms don't show any armor, so it's like having the weenie out all the time (for the Lillacorp furries lovers). 4. You can fuck with so many of the characters. 5. You can be poliamorous. 6. Tentacles. ",
        },
      };
    default:
      return {
        title: 'Wat',
        videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description:
          "There's no category created for this one, I'm sorry! Maybe I just haven't found a proper game to put in this category!",
        winner: {
          title: 'Spoilerino',
          description: 'No descriptionino patatino',
        },
      };
  }
};

export const getGameData = (gameName) => {
  switch (gameName) {
    case 'bg3':
      return {
        image: '/assets/bg3.png',
        name: 'Baldur’s Gate 3',
        styles: '',
        shortName: 'bg3',
      };
    case 'cocoon':
      return {
        image: '/assets/cocoon.png',
        name: 'Cocoon',
        styles: '',
        shortName: 'cocoon',
      };
    case 'goldenidol':
      return {
        image: '/assets/goldenidol.png',
        name: 'The Case of the Golden Idol: DLCs',
        styles: '',
        shortName: 'goldenidol',
      };
    case 'sliceanddice':
      return {
        image: '/assets/sliceanddice.png',
        name: 'Slice and Dice',
        styles: '',
        shortName: 'sliceanddice',
      };
    case 'talos':
      return {
        image: '/assets/talos.png',
        name: 'The Talos Principle',
        styles: '',
        shortName: 'talos',
      };
    case 'tunic':
      return {
        image: '/assets/tunic.png',
        name: 'Tunic',
        styles: '',
        shortName: 'tunic',
      };
    case 'showgun':
      return {
        image: '/assets/showgun.png',
        name: 'Showdown Shogun',
        styles: '',
        shortName: 'showgun',
      };
    case 'stray':
      return {
        image: '/assets/stray.png',
        name: 'Stray',
        styles: '',
        shortName: 'stray',
      };
    case 'ghost':
      return {
        image: '/assets/ghost.png',
        name: 'Ghost of tsushima',
        styles: '',
        shortName: 'ghost',
      };
    case 'dave':
      return {
        image: '/assets/dave.png',
        name: 'Dave the Diver',
        styles: '',
        shortName: 'dave',
      };
    case 'ratchet':
      return {
        image: '/assets/ratchet.png',
        name: 'Ratchet & Clank: Rift Apart',
        styles: '',
        shortName: 'ratchet',
      };
    case 'tlou2':
      return {
        image: '/assets/tlou2.png',
        name: 'The Last of Us 2 Remastered',
        styles: '',
        shortName: 'tlou2',
      };
    case 'tothemoon':
      return {
        image: '/assets/tothemoon.png',
        name: 'Just a To the Moon Series Beach Episode',
        styles: '',
        shortName: 'tothemoon',
      };
    case 'seaofstars':
      return {
        image: '/assets/seaofstars.png',
        name: 'Sea of stars',
        styles: '',
        shortName: 'seaofstars',
      };
    case 'balatro':
      return {
        image: '/assets/balatro.png',
        name: 'Balatro',
        styles: '',
        shortName: 'balatro',
      };
    case 'animalwell':
      return {
        image: '/assets/animalwell.png',
        name: 'Animal Well',
        styles: '',
        shortName: 'animalwell',
      };
    case 'beginnersguide':
      return {
        image: '/assets/beginnersguide.png',
        name: "The Beginner's Guide",
        styles: '',
        shortName: 'beginnersguide',
      };
    case 'nier':
      return {
        image: '/assets/nier.png',
        name: 'Nier: Automata',
        styles: '',
        shortName: 'nier',
      };

    default:
      return {
        image: '/assets/alice.jpg',
        name: gameName,
        styles: '',
        shortName: 'gamenotfound',
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
