function polylineFromPts(pts) {
    var num = pts.length;
    beginShape();
    for (let i = 0; i < num; i++) {
        vertex(pts[i].x, pts[i].y);
    }
    endShape();
}

function curveFromPts(pts) {
    var num = pts.length;
    beginShape();
    curveVertex(pts[0].x, pts[0].y);
    for (let i = 0; i < num; i++) {
        curveVertex(pts[i].x, pts[i].y);
    }
    curveVertex(pts[num - 1].x, pts[num - 1].y);
    endShape();
}

function line2pt(startPt, endPt) {
    line(startPt.x, startPt.y, endPt.x, endPt.y);
}

class Pt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    giveXY() {
        return [this.x, this.y];
    }
    render() {
        point(this.x, this.y);
    }
}

function ptBetweenPt1ANDPt2(pt1, pt2, ratio) {
    return new Pt(mapBetween(pt1.x, pt2.x, ratio),
        mapBetween(pt1.y, pt2.y, ratio));
}

class Line2 {
    constructor(startPt, endPt) {
        this.start = startPt;
        this.end = endPt;
        this.middle = ptBetweenPt1ANDPt2(this.start, this.end, 0.5);
        this.tangent = createVector(endPt.x-startPt.x,endPt.y-startPt.y).normalize();
        this.normal = createVector(startPt.y-endPt.y,endPt.x-startPt.x).normalize();
    }
    render() {
        line2pt(this.start, this.end);
    }
    givePtOnLineRatio(ratio) {
        return ptBetweenPt1ANDPt2(this.start, this.end, ratio);
    }
    givePtDevidedByNum(num) {
        var pts = [];
        for (let i = 0; i < num + 2; i++) {
            pts.push(this.givePtOnLineRatio(i / (num + 1)));
        }
        return (pts);
    }
}

class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    render() {
        ellipseMode(CENTER);
        ellipse(this.center.x,
            this.center.y,
            this.radius * 2,
            this.radius * 2);
    }
}

class Ellipse {
    constructor(center, radiusX, radiusY) {
        this.center = center;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }
    render() {
        ellipseMode(CENTER);
        ellipse(this.center.x,
            this.center.y,
            this.radiusX * 2,
            this.radiusY * 2);
    }
}
class Rect {
    constructor(center, width, height) {
        this.center = center;
        this.width = width;
        this.height = height;
    }
    render() {
        rectMode(CORNER);
        rect(this.center.x, this.center.y, this.width, this.height);
    }
}
class Path {
    constructor(points) {
        this.points = points;
        this.smoothed = false;
    }
    render() {
        if (this.smoothed)
            curveFromPts(this.points);
        else
            polylineFromPts(this.points);
    }
}
class plotPath extends Path {
    constructor(f, startPoints = new Pt(0, 0), xLength = windowWidth, xStep = 1) {
        var points = [];
        for (let i = 0; i < Math.floor(windowWidth / xStep); i++) {
            points.push(
                new Pt(startPoints.x + i * xStep, startPoints.y + f(i * xStep))
            );
        }
        super(points);
        this.startPoints = startPoints;
        this.xLength = xLength;
        this.xStep = xStep;
    }
}
function vectorToPt(vector){
    return new Pt(vector.x,vector.y);
}

