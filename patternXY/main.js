var xNum, yNum;
var smallCellScl=5;
var bigCellScl = 3;
var c1, c2;
var step = 10;
var pdf;

var intSoundDetails = soundDetails.map(x => Math.floor(x * 100));

function setup() {
    createCanvas(windowWidth, windowHeight);
    xNum = Math.floor(width / smallCellScl);
    yNum = Math.floor(height / smallCellScl);
    c1 = color(240, 40, 100);
    c2 = color(40, 40, 90);
    pdf = createPDF();
    pdf.beginRecord();
}

function draw() {
    background(0);
    for (let i = 0; i < xNum; i++)
        for (let j = 0; j < yNum; j++) {
            if ((pow(i, 3) + pow(j, 3)) % (j+1) == 0) {
                fill(c1);
                stroke(c2);
            } else {
                fill(c2);
                stroke(c1);
            }
            rect(i * smallCellScl, j * smallCellScl, smallCellScl, smallCellScl);
        }

}

function mouseClicked() {
    step += 1;
}

function keyPressed() {
    if (key == 'f')
        pdf.save();
}
