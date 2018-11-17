'use strict'
var img, cellImage, xNum, yNum;
var scl = 10;
var array, brightnessArray,shapeArray;

function preload() {
    img = loadImage('image/music_xchange.jpg', function (img) {
        img.resize(windowWidth, img.height / img.width * windowWidth);
    });
}

function setup() {
    createCanvas(img.width, img.height);
    array = imgToArray(img, scl);
    brightnessArray = towDimensionArrayMap(x => brightness(x) / 255 * scl, array);
    shapeArray = towDimensionArrayMap(x => {
        if (x > 0.5)
            return true;
        else
            return false;
    }, brightnessArray);
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
