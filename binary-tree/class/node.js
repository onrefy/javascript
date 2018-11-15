class Node {
	constructor(value, x, y) {
		this.left = null;
		this.right = null;
		this.value = value;
		this.x = x;
		this.y = y;
		noStroke();
		fill(0);
		ellipseMode(CENTER);
		ellipse(x, y, value * scl, value * scl)
	}

	addNode(value) {
		var step = this.value*scl ;
		if (value < this.value)
			if (this.left === null) {
				stroke(0);
				strokeWeight(2);
				line(this.x, this.y, this.x - step, this.y + step);
				this.left = new Node(value, this.x - step, this.y + step);
			}
		else
			this.left.addNode(value);
		else
		if (this.right === null) {
			stroke(0);
			strokeWeight(2);
			line(this.x, this.y, this.x + step, this.y + step);
			this.right = new Node(value, this.x + step, this.y + step);
		} else
			this.right.addNode(value);
	}
}
