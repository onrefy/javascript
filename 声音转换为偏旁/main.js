var data;
var dataLen, dataStroke;
var strokeImg = [],
    sideImg = [];

var strokeName = {
    0: "d",
    1: "s",
    2: "h",
    3: "p",
    4: "n",
    "dian": 0,
    "shu": 1,
    "heng": 2,
    "pie": 3,
    "na": 4
}
const strokeNum = 5;
const sideNum = 2;

function preload() {
    loadStroke();
    loadSide();


    function loadStroke() {
        for (let i = 0; i < strokeNum; i++) {
            strokeImg.push(loadImage("stroke/" + i + ".png"));
        }
    }

    function loadSide() {
        for (let i = 0; i < sideNum; i++) {
            sideImg.push(loadImage("side/" + i + ".png"));
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    data = threshRawData(0.06);
    data = seperateData(data);
    dataLen = data.map(x => x.length);
    dataStroke = dataLen.map(getStrokeByLength);
    console.log(sideName);
}

function threshRawData(threshold) {
    var scl = 0.5;
    var musicFiltered =
        musicDataDetails.map(x => {
            if (x < threshold)
                return 0;
            else
                return x;
        })
    for (let i = 0; i < musicFiltered.length; i++) {
        if (musicFiltered[i] > 0) {
            strokeWeight(0.1);
            stroke(0, 50);
            line(i * width * scl / musicFiltered.length,
                0,
                i * width * scl / musicFiltered.length,
                height / 5 * scl);
        }
    }
    return musicFiltered;

}




function seperateData(data) {
    var startKey, endKey;
    var isStarted = false;
    var bufferSingle;
    var singles = [];

    for (let i = 0; i < data.length; i++) {
        if (!data[i] == 0) {
            if (!isStarted) {
                startKey = i;
                isStarted = true;
            }
            endKey = i;
        } else {
            if (isStarted) {
                bufferSingle = getBufferSingle(startKey, endKey);
                singles.push(bufferSingle);
                isStarted = false;
            }
        }
    }

    return singles;


    function getBufferSingle(start, end) {
        return data.slice(start, end + 1);
    }
}

function getStrokeByLength(len) {
    var dataLevels = [5, 10, 20, 40, 80];
    for (let i = 0; i < dataLevels.length; i++)
        if (len < dataLevels[i])
            return i;
}
