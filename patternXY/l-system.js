'use strict'
class Seed {
    constructor(node, state) {
        this.state = state;
        this.new = [];
        this.parent = node;
        if (state) {
            this.x = node.x;
            this.scl = node.scl * 0.7;
        } else {
            this.x = node.x + node.scl * 0.7;
            this.scl = node.scl * 0.3;
        }
        this.y = node.y + node.scl;
        this.level = node.level + 1;
    }
    getNew() {
        if (this.state)
            this.new.push(new A(this), new B(this));
        else
            this.new.push(new A(this));
    }
    render() {
        rect(this.x, this.y, this.scl, this.scl);
    }
}

class A extends Seed {
    constructor(node) {
        super(node, true);
    }
}
class B extends Seed {
    constructor(node) {
        super(node, false);
    }
}

class Root {
    constructor() {
        this.new = [];
        this.parent = this;
        this.x = 0;
        this.y = 0;
        this.scl = 100;
        this.level = 0;
    }
    getNew() {
        this.new.push(new A(this), new B(this));
    }
    render() {
        rect(this.x, this.y, this.scl, this.scl);
    }
}


var root = new Root();
var key = root;
var c1,c2;

function constructTree(node) {
    if (node.level < 10) {
        node.render();
        node.getNew();
        for (let i of node.new)
            constructTree(i);
    }
}




function setup() {
    createCanvas(windowWidth, windowHeight);
    root.x = width / 2;
    root.y = 0;
    background(0);
    c1 = color(240, 40, 100);
    c2 = color(40, 40, 90);
    stroke(c1);
    fill(c2);
    constructTree(root);
    console.log(root);
}

function draw() {

}
