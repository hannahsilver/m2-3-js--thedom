// Preset values
const FROGS = 3;
const track = document.getElementById("track");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let laneNumber = 1; laneNumber <= FROGS; laneNumber++) {
  let lane = document.createElement("li");
  track.appendChild(lane);

  const span = document.createElement("span");

  span.innerText = laneNumber;
  lane.appendChild(span);

  lane.id = "frog" + laneNumber;
}

let racers = [];

for (let i = 0; i < FROGS; i++) {
  const froggy = frogStable[i];
  racers.push(froggy);
}

console.log(racers);

for (let i = 0; i < racers.length; i++) {
  const lane = document.getElementById(`frog${i + 1}`);
  const span = document.createElement("span");
  span.innerText = racers[i].name;
  lane.appendChild(span);
  span.className = "frog";
  span.style.backgroundColor = racers[i].color;
  racers[i].progress = 0;
  racers[i].lane = i + 1;
  span.id = i + 1;
}

function racingFrog(frogObject) {
  const random = Math.random() * 100;
  const interval = setInterval(function () {
    frogObject.progress += random;
    const frogElement = document.getElementById(frogObject.lane);
    console.log(frogElement);
    if (frogObject.progress > 100) {
      frogElement.style.left = "100%";
      clearInterval(interval);
      console.log(frogObject);
      return;
    }
    frogElement.style.left = `${frogObject.progress}%`;
  }, Math.random() * 1000);
}

for (let i = 0; i < racers.length; i++) {
  racingFrog(racers[i]);
}
