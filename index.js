const messagesArray = [
  "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
  "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will",
  "Always pass on what you have learned",
  "Patience you must have my young Padawan",
  "In a dark place we find ourselves, and a little more knowledge lights our way",
  "Powerful you have become, the dark side I sense in you",
  "Train yourself to let go of everything you fear to lose",
  "Feel the force",
  "Truly wonderful the mind of a child is",
  "Do or do not. There is no try",
  "Great warrior. Wars not make one great",
  "The dark side clouds everything. Impossible to see the light, the future is",
  "You will find only what you bring in",
  "To be Jedi is to face the truth, and choose. Give off light, or darkness, Padawan. Be a candle, or the night",
  "Control, control, you must learn control",
  "On many long journeys have I gone. And waited, too, for others to return from journeys of their own. Some return; some are broken; some come back so different only their names remain",
  "In the end, cowards are those who follow the dark side",
  "Difficult to see. Always in motion is the future",
  "Secret, shall I tell you? Grand Master of Jedi Order am I. Won this job in a raffle I did, think you? ‘How did you know, how did you know, Master Yoda?’ Master Yoda knows these things. His job it is",
  "To answer power with power, the Jedi way this is not. In this war, a danger there is, of losing who we are",
  "Many of the truths that we cling to depend on our point of view",
  "Named must your fear be before banish it you can",
  "You think Yoda stops teaching, just because his student does not want to hear? A teacher Yoda is. Yoda teaches like drunkards drink, like killers kill",
  "Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot",
  "You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack",
  "Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall",
  "When you look at the dark side, careful you must be. For the dark side looks back",
  "You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack",
  "Smaller in number are we, but larger in mind",
  "Your path you must decide",
  "Always two there are, no more, no less. A master and an apprentice",
  "No longer certain, that one ever does win a war, I am. For in fighting the battles, the bloodshed, already lost we have. Yet, open to us a path remains. That unknown to the Sith is. Through this path, victory we may yet find. Not victory in the Clone Wars, but victory for all time",
  "If no mistake you have made, losing you are. A different game you should play",
  "Happens to every guy sometimes this does",
  "Adventure. Excitement. A Jedi craves not these things",
  "Only the Dark Lord of the Sith knows of our weakness. If informed the senate is, multiply our adversaries will",
];

const getMessage = (messages) => {
  let index = Math.floor(Math.random() * messages.length);
  return `${messages[index]}.`;
};

const printMessage = () => console.log(getMessage(messagesArray));

printMessage();
