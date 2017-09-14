var quotes = [
"Some people never go crazy. What truly horrible lives they must lead.",
"For those who believe in God, most of the big questions are answered. But for those of us who can't readily accept the God formula, the big answers don\'t remain stone-written. We adjust to new conditions and discoveries. We are pliable. Love need not be a command nor faith a dictum. I am my own god. We are here to unlearn the teachings of the church, state, and our educational system. We are here to drink beer. We are here to kill war. We are here to laugh at the odds and live our lives so well that Death will tremble to take us.",
"what matters most is how well you walk through the fire",
"If you\'re going to try, go all the way. Otherwise, don\'t even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you\'ll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you\'re going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It\'s the only good fight there is.",
"My ambition is handicapped by laziness",
"You have to die a few times before you can really live",
"Find what you love and let it kill you.Let it drain you of your all. Let it cling onto your back and weigh you down into eventual nothingness. Let it kill you and let it devour your remains.For all things will kill you, both slowly and fastly, but it’s much better to be killed by a lover.",
"The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence",
"That's the problem with drinking, I thought, as I poured myself a drink. If something bad happens you drink in an attempt to forget; if something good happens you drink in order to celebrate; and if nothing happens you drink to make something happen.",
"If you're losing your soul and you know it, then you've still got a soul left to lose"
];
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote').innerHTML = quotes[randomNumber]
}