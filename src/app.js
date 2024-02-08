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
const indexAction = randomIndex(action.length);
const indexWhat = randomIndex(what.length);
const indexWhen = randomIndex(when.length);

// Declare the excuse variable before using it
let excuse =
  who[indexWho] +
  " " +
  action[indexAction] +
  " " +
  what[indexWhat] +
  " " +
  when[indexWhen];

// change the html page to show the random excuse
document.querySelector("div").classList.add("excuse-style");
document.querySelector("div").innerText = excuse; // Set the text
