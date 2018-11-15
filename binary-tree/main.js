var scl = 0.6;

var root;

function setup() {
	createCanvas(windowWidth, windowHeight);
	root = new Node(50,width/2,height/10);
	for (let i = 0; i < 100; i++) {
		root.addNode(Math.floor(Math.random() * 100));
	}
}
