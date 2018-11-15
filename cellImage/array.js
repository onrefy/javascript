function imgToArray(img, scale = 1) {
    var array = [];
    var xNum = img.width / scale;
    var yNum = img.height / scale;

    img.loadPixels();
    for (let i = 0; i < xNum; i++) {
        var row = [];
        for (let j = 0; j < yNum; j++) {
            row.push(img.get(i * scl, j * scl));
        }
        array.push(row);
    }
    return array;
}


function towDimensionArrayMap(f, array) {
    var xNum = array.length;
    var yNum = array[0].length;
    var newArray = [];
    for (let i = 0; i < xNum; i++) {
        var row = [];
        for (let j = 0; j < yNum; j++) {
            row.push(f(array[i][j]));
        }
        newArray.push(row);
    }
    return newArray;
}

function arrayFunction(f, array, scale = 1) {
    var xNum = array.length;
    var yNum = array[0].length;
    for (let i = 0; i < xNum; i++)
        for (let j = 0; j < yNum; j++) {
            f(i * scale, j * scale, array[i][j]);
        }
}

function Array2d(xNum, yNum) {
    var array = [];
    for (let i = 0; i < xNum; i++) {
        array.push([]);       
    }
}


