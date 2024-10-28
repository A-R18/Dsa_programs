//top 50 jokes:
const topJokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the chicken go to the séance? To talk to the other side!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "How does a penguin build its house? Igloos it together.",
  "Why don’t some couples go to the gym? Because some relationships don’t work out.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why do cows have hooves instead of feet? Because they lactose!",
  "Why can’t you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
  "Why don’t eggs tell jokes? They’d crack each other up.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What do you call a factory that makes good products? A satisfactory.",
  "Why can’t you give Elsa a balloon? Because she’ll let it go.",
  "What’s brown and sticky? A stick.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why don’t oysters share their pearls? Because they’re shellfish.",
  "What did one wall say to the other? I’ll meet you at the corner.",
  "What do you call a snowman with a six-pack? An abdominal snowman.",
  "Why was the math teacher always late? Because she took too long to find her x.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "What’s blue and not very heavy? Light blue.",
  "Why did the coffee file a police report? It got mugged.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "How do you organize a space party? You planet.",
  "Why did the football team go to the bank? To get their quarterback.",
  "What kind of shoes do ninjas wear? Sneakers.",
  "Why are elevator jokes so classic? Because they work on so many levels.",
  "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "What do you call a fish with no eyes? A fsh.",
  "Why don’t you ever fight with a rain cloud? Because it’ll storm out of the argument.",
  "Why do bananas never get lonely? Because they hang out in bunches.",
  "Why are skeletons so calm? Because nothing gets under their skin.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why don’t melons get married? Because they cantaloupe.",
  "What’s green and has wheels? Grass. I lied about the wheels.",
  "Why did the invisible man turn down the job offer? He couldn’t see himself doing it.",
  "Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.",
  "What do you call a dog magician? A labracadabrador.",
  "How does the ocean say hi? It waves.",
  "What happens when a snowman throws a tantrum? He has a meltdown.",
  "Why do vampires always seem sick? They’re always coffin.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why don’t sharks like fast food? Because they can’t catch it.",
  "Why did the cookie cry? Because its mom was a wafer (wafer) too long.",
  "What did one ocean say to the other ocean? Nothing, they just waved.",
  "What do you call a bear with no ears? B.",
  "Why did the computer break up with the internet? There was too much buffering.",
  "Why was the math book sad? It had too many problems.",
  "What do you call a fish without eyes? A fsh.",
  "How do you catch a squirrel? Climb a tree and act like a nut.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why did the picture go to jail? Because it was framed!",
  "Why was the broom late? It swept in.",
  "What do you call a fake noodle? An impasta!",
  "Why do cows wear bells? Because their horns don’t work.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the chicken join a band? Because it had the drumsticks!",
  "What did one hat say to the other? You stay here, I'll go on ahead!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What’s a skeleton’s least favorite room in the house? The living room.",
  "How do you organize a space party? You planet!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why did the stadium get hot after the game? All the fans left.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why was the math book sad? Because it had too many problems.",
  "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
  "What do you call an alligator in a vest? An investigator.",
  "What’s brown and sticky? A stick.",
  "Why can’t you hear a pterodactyl using the bathroom? Because the 'P' is silent.",
  "What do you call a fish that wears a bowtie? Sofishticated.",
  "Why are ghosts bad liars? Because you can see right through them!",
  "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
  "Why did the computer go to the doctor? Because it had a virus.",
  "Why don’t some couples go to the gym? Because some relationships don’t work out.",
  "What’s green and sings? Elvis Parsley.",
  "What did the farmer say after he lost his tractor? Where's my tractor?",
  "What do you call a snowman with a six-pack? An abdominal snowman.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "Why are elevator jokes so classic? They work on so many levels.",
  "What do you call a pile of cats? A meowtain.",
  "What did the zero say to the eight? Nice belt!",
  "What do you call a guy who’s really bad at math? An 'average' person."
];



const jokeDiv = document.getElementById('jk');


setInterval(function () {
  let randomNumber = Math.floor(Math.random() * topJokes.length) + 1;
  console.log(randomNumber);
  jokeDiv.innerHTML = topJokes[randomNumber];

}, 5000);



document.body.style.backgroundColor = '#212121';

let element = document.getElementById('jkk');
// element.setAttribute('hidden' );
// element.hidden = true;
element.style.backgroundColor = 'green';
// element.style.display = 'none';
// element.innerHTML +=  "<div id='nbr' class= 'nvbr'><ul><li>Home</li><li>About US</li><li>Contact US</li><li>Our Services</li></ul></div>";

// let newElement = document.createElement('div');
// let appendedCh = element.appendChild(newElement);

// newElement.setAttribute('class', 'newElem');
// newElement.setAttribute('id', 'newEl');
// // newElement.setAttribute('hidden', '');
// newElement.style.backgroundColor = 'pink';
// newElement.innerText = 'I want to write a lot of text in my existing div';
// console.log(appendedCh);

function printTable(number) {
  let multiplier;

  for (multiplier = 1; multiplier <= 10; multiplier++) {

    element.innerHTML = `${number} x ${multiplier} = ${number * multiplier}`;
    console.log(`${number} x ${multiplier} = ${number * multiplier}`);



  }



}

const intervalChcker = setInterval(() => printTable(850), 4000);


