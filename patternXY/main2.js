var threshhold = 0.0;
var step = 0.01;

var lowColor,highColor;

var soundDetialsFilter = soundDetails.map(x => {
    if (x > threshhold)
        return true;
    else
        return false;
})
var pdf;


function setup() {
    createCanvas(windowWidth, windowHeight);
    pdf = createPDF();
    pdf.beginRecord();
    lowColor = color(0,0,255);
    highColor = color(255,0,0);
}

function draw() {
    background(255);
    for (let i = 0; i < soundDetialsFilter.length; i++) {
        if (soundDetialsFilter[i]) {
            noStroke();
            fill(lerpColor(lowColor,highColor,soundDetails[i]*2));
            rect(i * width / soundDetialsFilter.length, height/3, width / soundDetialsFilter.length, height/3);
        }
    }
}

function mouseClicked() {

}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        threshhold += step;
        soundDetialsFilter = soundDetails.map(x => {
            if (x > threshhold)
                return true;
            else
                return false;
        })
    }
    if (keyCode == DOWN_ARROW) {
        threshhold -= step;
        soundDetialsFilter = soundDetails.map(x => {
            if (x > threshhold)
                return true;
            else
                return false;
        })
    }
    if (key == 'f')
        pdf.save();
}
