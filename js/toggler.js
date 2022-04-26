"use strict";

var icon = document.getElementById("icon");
var bgImg = document.getElementById("bg-img");
var patternImg = document.getElementById("pattern-img");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
};
bgImg.onclick = function () {
    document.body.classList.toggle("dark-theme");
};
patternImg.onclick = function () {
    document.body.classList.toggle("dark-theme");
};
