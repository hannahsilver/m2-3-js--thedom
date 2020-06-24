// Add your code here!
const main = document.querySelector("main");

const h1 = document.createElement("h1");
const paragraphOne = document.createElement("p");
const h2 = document.createElement("h2");
const paragraphTwo = document.createElement("p");
const image = document.createElement("img");
const paragraphThree = document.createElement("p");
const paragraphFour = document.createElement("p");
const source = document.createElement("a");

h1.innerText = "The best How I Met Your Mother episode (according to fans)";
paragraphOne.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
h2.innerText = "The Slap Bet (Season 2, Episode 9)";
paragraphTwo.innerText = "IMDB Rating: 9.5";
image.src = "images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";
paragraphThree.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
paragraphFour.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
source.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
source.innerText = "Source";

main.appendChild(h1);
main.appendChild(h2);
main.appendChild(paragraphOne);
main.appendChild(paragraphTwo);
main.appendChild(paragraphThree);
main.appendChild(paragraphFour);
main.appendChild(image);
main.appendChild(source);

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "styles.css";

document.head.appendChild(style);
