/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomIndex(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function() {
  //write your code here
  console.log("Hello MDC-25");
};

const indexWho = randomIndex(who.length);
const indexaction = randomIndex(action.length);
const indexwhat = randomIndex(what.length);
const indexwhen = randomIndex(when.length);

excuse = wh; // change the html page to show the ramdom excuse
document.querySelector("div").innerText = excuse;
