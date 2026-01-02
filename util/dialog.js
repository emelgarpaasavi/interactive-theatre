import theThreeBearsAsking from "/src/assets/Dialogue Box Images/The Three Bears Asking.png";
import narrator from "/src/assets/Dialogue Box Images/Narrator.png";
import papaBearSmiling from "/src/assets/Dialogue Box Images/Papa Bear/Papa Bear Waving and Smiling.png";
import papaBear from "/src/assets/Dialogue Box Images/Papa Bear/Papa Bear.png";
import papaBearAngry from "/src/assets/Dialogue Box Images/Papa Bear/Papa Bear Angry.png";
import mamaBearSmiling from "/src/assets/Dialogue Box Images/Mama Bear/Mama Bear Waving and Smiling.png";
import mamaBearHoldingPorridge from "/src/assets/Dialogue Box Images/Mama Bear/Mama Bear Holding Porridge.png";
import mamaBearShocked from "/src/assets/Dialogue Box Images/Mama Bear/Mama Bear Shocked.png";
import babyBearExcited from "/src/assets/Dialogue Box Images/Baby Bear/Baby Bear Excited.png";
import babyBear from "/src/assets/Dialogue Box Images/Baby Bear/Baby Bear.png";
import babyBearCrying from "/src/assets/Dialogue Box Images/Baby Bear/Baby Bear Crying.png";
import goldilocksExcited from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Excited.png";
import goldilocksSniffing from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Sniffing Excitedly.png";
import goldilocksBurntHerTongue from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Burnt Her Tongue.png";
import goldilocksTooCold from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Too Cold.png";
import goldilocksPerfectPorridge from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Perfect Porridge.png";
import goldilocksWorried from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Worried.png";
import goldilocksScared from "/src/assets/Dialogue Box Images/Goldilocks/Goldilocks Scared.png";
import hardChair from "/src/assets/Dialogue Box Images/Things/Hard Chair.png";
import softChair from "/src/assets/Dialogue Box Images/Things/Soft Chair.png";
import perfectChair from "/src/assets/Dialogue Box Images/Things/Perfect Chair.png";
import hardBed from "/src/assets/Dialogue Box Images/Things/Hard Bed.png";
import softBed from "/src/assets/Dialogue Box Images/Things/Soft Bed.png";
import perfectBed from "/src/assets/Dialogue Box Images/Things/Perfect Bed.png";

const dialog = [
  {
    id: 1,
    image: narrator,
    actor: "Narrator",
    dialog: "Once upon a time there were three bears.",
  },
  {
    id: 2,
    image: papaBearSmiling,
    actor: "Papa Bear",
    dialog: "I'm Papa Bear.",
  },
  {
    id: 3,
    image: mamaBearSmiling,
    actor: "Mama Bear",
    dialog: "I'm Mama Bear and this is...",
  },
  {
    id: 4,
    image: babyBearExcited,
    actor: "Baby Bear",
    dialog: "I'm Baby Bear!",
  },
  {
    id: 5,
    image: narrator,
    actor: "Narrator",
    dialog: "The three bears loved to eat porridge every morning.",
  },
  {
    id: 6,
    image: mamaBearHoldingPorridge,
    actor: "Mama Bear",
    dialog:
      "I made hot porridge. I put some berries in it today. It smells nice, doesn't it?",
  },
  {
    id: 7,
    image: babyBearExcited,
    actor: "Baby Bear",
    dialog:
      "Yum! It smells very nice and it looks delicious. Can I eat mine now?",
  },
  {
    id: 8,
    image: narrator,
    actor: "Narrator",
    dialog: "But their porridge was too hot to eat now.",
  },
  {
    id: 9,
    image: mamaBearHoldingPorridge,
    actor: "Mama Bear",
    dialog: "The porridge is hot this morning.",
  },
  {
    id: 10,
    image: papaBear,
    actor: "Papa Bear",
    dialog: "Let's all go for a walk. It will be cool when we get back.",
  },
  {
    id: 11,
    image: babyBearExcited,
    actor: "Baby Bear",
    dialog: "That's a great idea, Papa! Let's go!",
  },
  {
    id: 12,
    image: narrator,
    actor: "Narrator",
    dialog:
      "A little girl called Goldilocks was out walking, too. She passed by the three bears' cottage.",
  },
  {
    id: 13,
    image: goldilocksExcited,
    actor: "Goldilocks",
    dialog: "What a lovely cottage!",
  },
  {
    id: 14,
    image: narrator,
    actor: "Narrator",
    dialog:
      "Goldilocks went inside the three bears' cottage and found something on the kitchen table.",
  },
  {
    id: 15,
    image: goldilocksSniffing,
    actor: "Goldilocks",
    dialog: "What a smell! What's that? Wow! Look at that! It looks delicious!",
  },
  {
    id: 16,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks tasted Papa Bear's porridge.",
  },
  {
    id: 17,
    image: goldilocksBurntHerTongue,
    actor: "Goldilocks",
    dialog: "Ow! It's much too hot.",
  },
  {
    id: 18,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks tasted Mama Bear's porridge.",
  },
  {
    id: 19,
    image: goldilocksTooCold,
    actor: "Goldilocks",
    dialog: "Yuck! It's much too cold.",
  },
  {
    id: 20,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks tasted Baby Bear's porridge.",
  },
  {
    id: 21,
    image: goldilocksPerfectPorridge,
    actor: "Goldilocks",
    dialog: "Yum! It's just right!",
  },
  {
    id: 22,
    image: narrator,
    actor: "Narrator",
    dialog:
      "Goldilocks was so hungry that she ate all of Baby Bear's porridge.",
  },
  {
    id: 23,
    image: goldilocksExcited,
    actor: "Goldilocks",
    dialog: "I'm full now. I think I'll take a rest.",
  },
  {
    id: 24,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks sat down on Papa Bear's chair.",
  },
  {
    id: 25,
    image: hardChair,
    actor: "Goldilocks",
    dialog: "This is much too hard!",
  },
  {
    id: 26,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks sat down on Mama Bear's chair.",
  },
  {
    id: 27,
    image: softChair,
    actor: "Goldilocks",
    dialog: "This is much too soft!",
  },
  {
    id: 28,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks sat down on Baby Bear's chair.",
  },
  {
    id: 29,
    image: perfectChair,
    actor: "Goldilocks",
    dialog: "This is just right!",
  },
  {
    id: 30,
    image: narrator,
    actor: "Narrator",
    dialog:
      "But Goldilocks was too big for Baby Bear's chair, so the chair broke!",
  },
  {
    id: 31,
    image: goldilocksWorried,
    actor: "Goldilocks",
    dialog: "Ouch! Oops! The chair is broken!",
  },
  {
    id: 32,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks decided to go upstairs for a sleep.",
  },
  {
    id: 33,
    image: narrator,
    actor: "Narrator",
    dialog: "She tried Daddy Bear's bed.",
  },
  {
    id: 34,
    image: hardBed,
    actor: "Goldilocks",
    dialog: "This is much too hard.",
  },
  {
    id: 35,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks tried Mummy Bear's bed.",
  },
  {
    id: 36,
    image: softBed,
    actor: "Goldilocks",
    dialog: "This is much too soft.",
  },
  {
    id: 37,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks tried Baby Bear's bed.",
  },
  {
    id: 38,
    image: perfectBed,
    actor: "Goldilocks",
    dialog: "This is just right!",
  },
  {
    id: 39,
    image: narrator,
    actor: "Narrator",
    dialog: "Goldilocks lay down in Baby Bear's bed and fell fast asleep.",
  },
  {
    id: 40,
    image: narrator,
    actor: "Narrator",
    dialog: "Soon, the three bears came back from their walk.",
  },
  {
    id: 41,
    image: babyBear,
    actor: "Baby Bear",
    dialog: "I'm so hungry!",
  },
  {
    id: 42,
    image: papaBearAngry,
    actor: "Papa Bear",
    dialog: "Grrrrrrr! Someone's been eating my porridge.",
  },
  {
    id: 43,
    image: mamaBearShocked,
    actor: "Mama Bear",
    dialog: "Ahhhhh! Someone's been eating my porridge.",
  },
  {
    id: 44,
    image: babyBearCrying,
    actor: "Baby Bear",
    dialog:
      "Hmmmph! Someone's been eating my porridge, and they've eaten it all up!",
  },
  {
    id: 45,
    image: narrator,
    actor: "Narrator",
    dialog: "The three bears were so sad. Daddy Bear went to sit down.",
  },
  {
    id: 46,
    image: papaBearAngry,
    actor: "Papa Bear",
    dialog: "Grrrrrrr! Someone's been sitting in my chair.",
  },
  {
    id: 47,
    image: mamaBearShocked,
    actor: "Mama Bear",
    dialog: "Ahhhhh! Someone's been sitting in my chair.",
  },
  {
    id: 48,
    image: babyBearCrying,
    actor: "Baby Bear",
    dialog:
      "Hmmmph! Someone's been sitting in my chair and they've broken it!",
  },
  {
    id: 49,
    image: narrator,
    actor: "Narrator",
    dialog:
      "Now, Papa Bear and Mama Bear were very angry. The three bears went upstairs.",
  },
  {
    id: 50,
    image: papaBearAngry,
    actor: "Papa Bear",
    dialog: "Grrrrrrr! Someone's been sleeping in my bed.",
  },
  {
    id: 51,
    image: mamaBearShocked,
    actor: "Mama Bear",
    dialog: "Ahhhhh! Someone's been sleeping in my bed.",
  },
  {
    id: 52,
    image: babyBearCrying,
    actor: "Baby Bear",
    dialog:
      "Hmmmph! Someone's been sleeping in my bed and she's still there!",
  },
  {
    id: 53,
    image: theThreeBearsAsking,
    actor: "The Three Bears",
    dialog:
      "Who are you and what are you doing here?",
  },
  {
    id: 54,
    image: narrator,
    actor: "Narrator",
    dialog:
      "Goldilocks woke up and jumped out of the bed.",
  },
  {
    id: 55,
    image: goldilocksScared,
    actor: "Goldilocks",
    dialog:
      "Oh my! Oh gosh! Bears! EEEEK!",
  },
  {
    id: 56,
    image: narrator,
    actor: "Narrator",
    dialog:
      "Goldilocks ran away as fast as she could.",
  },
   {
    id: 57,
    image: goldilocksScared,
    actor: "Goldilocks",
    dialog:
      "Ahhhhhh!",
  },
  {
    id: 58,
    image: babyBearCrying,
    actor: "Baby Bear",
    dialog:
      "Oh dear! I didn't want to scare her away!",
  },
  {
    id: 59,
    image: narrator,
    actor: "Narrator",
    dialog:
      "The three bears never saw Goldilocks again...",
  },
  {
    id: 60,
    image: narrator,
    actor: "Narrator",
    dialog:
      "The end.",
  },

];

export { dialog };
