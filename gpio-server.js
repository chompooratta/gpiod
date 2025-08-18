const { version, Chip, Line } = require("node-libgpiod");
const express = require("express");

const app = express();
// avoid chip and line being gc-collected
app.chip = new Chip(0);
app.line = new Line(app.chip, 23); // led on GPIO

console.log(version());
app.line.requestOutputMode();

app.get("/on", (req,res) => {
  app.line.setValue(1);
  res.send("it's on");
});

app.get("/off", (req,res) => {
  app.line.setValue(0);
  res.send("it's off");
});

app.listen(3000);
console.log("running");
