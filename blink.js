const { version, Chip, Line } = require("node-libgpiod");

global.chip = new Chip(0);
global.line = new Line(chip, 23); // led on GPIO
let count = 10;

console.log(versio);
line.requestOutputMode();

const blink = () => {
  if(count){
    line.setValue(count-- % 2);
    setTimeout(blink,1000);
  } // else line.release(); 
  // not needed, libgpiod releases resources on process exit  
};

setTimeout(blink,1000);
