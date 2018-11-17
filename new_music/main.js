var sound, amplitude, cnv;
var soundDetails = [];

function preload() {
    sound = loadSound('0.mp3');
}

function setup() {
    amplitude = new p5.Amplitude();
    sound.play();
}

function draw() {
    var level = amplitude.getLevel();
    soundDetails.push(level);
}

function mouseClicked() {
    var jsonData = JSON.stringify(soundDetails);
    download(jsonData, 'json.txt', 'txt/plain');
    noLoop();
}

function download(content, fileName, contentType) {
    var a = document.createElement('a');
    var file = new Blob([content],{ type:contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function download(content, fileName, contentType){
    var a = document.createElement("a");
    var file = new Blob([content],{type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
