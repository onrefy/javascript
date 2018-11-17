var sound;
var amplitude;

function preload(){
    sound = loadSound('0.mp3');
    amplitude = new p5.Amplitude();
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    sound.play();
}
function draw(){
    background(0);
    fill(255);
    rect(0,0,amplitude.getLevel()*100,amplitude.getLevel()*100);
}