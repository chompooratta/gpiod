// open 2 pins
const { Chip, Line } = require("node-libgpiod");

const chip = new Chip(0);
const pins = [23, 24, 25, 26];

const leds = pins.map(pin => new Line(chip, pin));
leds.forEach(led => led.requestOutputMode(1));

const ledPairs = [
  [0, 1],
  [2, 3]
];

let pairIndex = 0;

function blinkSequence() {
  // Turn off all LEDs
  leds.forEach(led => led.setValue(0));

  // Turn on the LEDs in the specified pairs
  const [first, second] = ledPairs[pairIndex];
  leds[first].setValue(1);
  leds[second].setValue(1);

  //Move to the next pair
  pairIndex = (pairIndex + 1) % ledPairs.length;

  // Repeat every 300 milliseconds
  setTimeout(blinkSequence, 300);
}

// Start working
blinkSequence();
