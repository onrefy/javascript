var song;
function preload() {
    song = loadSound('./song/0.mp3');
}

function setup() {
    createCanvas(710, 200);
    song.loop();

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to an volume analyzer
    analyzer.setInput(song);
    console.log(analyzer);
}

function draw() {
    background(255);

    // Get the average (root mean square) amplitude
    var rms = analyzer.getLevel();
    songArray.push(rms);
    fill(127);
    stroke(0);

    // Draw an ellipse with size based on volume
    ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

function mouseClicked(){
    var jsonData = JSON.stringify(songArray);
    download(jsonData, 'json.txt','txt/plain');
    noLoop();
}

function download(content, fileName, contentType){
    var a = document.createElement("a");
    var file = new Blob([content],{type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}