'use strict'
var img, cellImage, xNum, yNum;
var scl = 20;
var array, brightnessArray,shapeArray;

function preload() {
    img = loadImage('./image/0.jpg', function (img) {
        img.resize(windowWidth, img.height / img.width * windowWidth);
    });
    cellImage = loadImage('./image/cell.png', function (img) {
        img.resize(scl, scl);
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    array = imgToArray(img, scl);
    brightnessArray = towDimensionArrayMap(x => brightness(x) / 255 * scl, array);
    shapeArray = towDimensionArrayMap(x => {
        if (x > 0.5)
            return true;
        else
            return false;
    }, brightnessArray);
    console.log(shapeArray);
}

function draw() {
    background(0);
    arrayFunction(render, brightnessArray, scl);
}

function render(x, y, value) {
    noStroke();
    fill(255);
    ellipse(x, y, value, value);
}
