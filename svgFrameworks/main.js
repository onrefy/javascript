"use strict"

var scl = 7;
var trianglePt = [];
var triangleEdge = [];
var ptOnEdge = [];
var ptNumOnEdge = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noFill();
    stroke(0);
    strokeWeight(5);

    trianglePt.push(new Pt(300, 0));
    trianglePt.push(new Pt(50, 500));
    trianglePt.push(new Pt(700, 500));

    for (let i = 0; i < 2; i++) {
        triangleEdge.push(new Line2(trianglePt[i], trianglePt[i + 1]));
        ptOnEdge.push(triangleEdge[i].givePtDevidedByNum(ptNumOnEdge));
    }
    triangleEdge.push(new Line2(trianglePt[2], trianglePt[0]));
    ptOnEdge.push(triangleEdge[2].givePtDevidedByNum(ptNumOnEdge));

    for (let i = 0; i < ptNumOnEdge; i++){
        strokeWeight(2);
        stroke(0,150);
        line2pt(ptOnEdge[0][i],ptOnEdge[1][i]);
        line2pt(ptOnEdge[1][i],ptOnEdge[2][i]);
        line2pt(ptOnEdge[2][i],ptOnEdge[0][i]);
    }
}
