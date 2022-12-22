"use strict";

const home = document.getElementById("home__a");
const about = document.getElementById("about__a");
const features = document.getElementById("features__a");

home.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
  });
});

about.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

features.addEventListener("click", function () {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth",
  });
});

const goToSlack = document.getElementById("clickinghere");

goToSlack.addEventListener("click", function () {
  document.getElementById("addtoslack").scrollIntoView({
    behavior: "smooth",
  });
});

const slackPage = document.querySelectorAll(".slack__a");
slackPage.forEach(function (node) {
  node.addEventListener("click", function () {
    window.location.href = "https://slack.com";
  });
});

const scrollBtn = document.getElementById("scroll__btn");
scrollBtn.addEventListener("click", function () {
  document.getElementById("navbar").scrollIntoView({
    behavior: "smooth",
  });
});
