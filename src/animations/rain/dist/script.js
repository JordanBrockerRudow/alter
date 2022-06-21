const rainContainer = document.querySelector(".rain-container");

// background Colors for the raindrop
const background = [
  "linear-gradient(transparent, #FFFF66)",
  "linear-gradient(transparent, #00E7EC)",
  "linear-gradient(transparent, white)",
  "linear-gradient(transparent, #4D4DFF)",
  "linear-gradient(transparent, #FF1493)",
  "linear-gradient(transparent, #C24CF6)",
  "linear-gradient(transparent, white)",
  "linear-gradient(transparent, #FC6E22)"
];

const amount = 100; // amount of raindops
let i = 0;
let drop, raindropProperties;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {
  drop = document.createElement("i");

  //   CSS Properties for raindrop
  raindropProperties = {
    width: Math.random() * 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    delay: Math.random() * -20 + "s",
    duration: Math.random() * 5 + "s",
    bg: background[Math.floor(Math.random() * background.length)],
    opacity: Math.random() + 0.2
  };

  //   Setting Styles for raindrop
  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;

  //   Appending the raindrop in the raindrop container
  rainContainer.appendChild(drop);
  i++;
}
