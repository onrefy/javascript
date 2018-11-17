var pdf;

var startPt,
    endPt;
var myLine;
var pointOnLine;

function setup() {
    createCanvas(windowWidth, windowHeight);
    startPt = new Pt(width/2, 0);
    endPt = new Pt(width/2, height);
    myLine = new Line2(startPt, endPt);
    pointOnLine = myLine.givePtDevidedByNum(soundDetail.length);
    
    pdf = createPDF();
    pdf.beginRecord();
}



function draw() {
    background(255);
    //myLine.render();
    pointOnLine.map(
        (value, index) => {
            line2pt(value,
                vectorToPt(createVector(value.x, value.y).add(p5.Vector.mult(myLine.normal, soundDetail[index] * 300))));
            line2pt(value,
                vectorToPt(createVector(value.x, value.y).sub(p5.Vector.mult(myLine.normal, soundDetail[index] *300))));
        }
    );
    if (frameCount == 10){
        noLoop();
        pdf.save();
    }
}
