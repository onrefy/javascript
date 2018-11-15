'use strict'
var secondBox,
    minuteBox,
    hourBox;
var secondValue = 0,
    minuteValue = 0,
    hourValue = 0;

var hourX = 80,
    minuteX = 170,
    secondX = 380;
var boxY = 500;

function preload() {
    hourBox = new magicBox(hourX, boxY, 4, 6);
    hourBox.G = color(50, 50, 150);
    hourBox.R = color(150, 50, 50);
    minuteBox = new magicBox(minuteX, boxY, 10, 6);
    minuteBox.R = color(150, 0, 100);
    minuteBox.G = color(100, 0, 255);
    secondBox = new magicBox(secondX, boxY, 10, 6);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(1);
}

function draw() {
    background(0);
    timeUpdate();
    secondBox.doneNum = secondValue;
    minuteBox.doneNum = minuteValue;
    hourBox.doneNum = hourValue;
    secondBox.render();
    minuteBox.render();
    hourBox.render();

}

function timeUpdate() {
    secondValue = second();
    minuteValue = minute();
    hourValue = hour();
}
