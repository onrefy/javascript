class magicBox {
    constructor(x, y, shape, doneNum = 0) {
        this.xNum = shape.length;
        this.yNum = shape[0].length;
        this.shape = shape;
        this.doneNum = doneNum;
        this.nodeArray = [];

        this.scl = 20;
        this.strokeWid = 10;
        this.R = color(150, 0, 0);
        this.G = color(0, 100, 100);

        this.startX = x;
        this.startY = y;
    }

    render() {
        this.constructNodeArray();
        this.calculateDoneNum();
        this.constructNodeArrayNeighbour();

        for (let i = 0; i < this.xNum; i++) {
            for (let j = 0; j < this.yNum; j++) {
                if (shape[i][j]) {
                    strokeWeight(this.strokeWid);
                    if (this.nodeArray[i][j].finished) stroke(this.R);
                    else stroke(this.G);
                    for (let k of this.nodeArray[i][j].neighbour) {
                        line(this.startX + i * this.scl,
                            this.startY + j * this.scl,
                            this.startX + k.x * this.scl,
                            this.startY + k.y * this.scl);
                    }
                }
            }
        }
    }


    constructNodeArray() {
        this.nodeArray = [];
        for (let i = 0; i < this.xNum; i++) {
            var row = [];
            for (let j = 0; j < this.yNum; j++) {
                if (shape[i][j])
                    row.push(new Node(i, j, this));
                else
                    row.push(undefined);
            }
            this.nodeArray.push(row);
        }
    }

    constructNodeArrayNeighbour() {
        for (let i = 0; i < this.xNum; i++) {
            for (let j = 0; j < this.yNum; j++) {
                if (shape[i][j])
                    this.nodeArray[i][j].neighbour = this.nodeArray[i][j].getNeighbour();
            }
        }
    }

    calculateDoneNum() {
        for (let i = 0; i < this.doneNum; i++) {
            var randomX = Math.floor(Math.random() * this.xNum);
            var randomY = Math.floor(Math.random() * this.yNum);
            while (this.shape[i][j] == false ||
                this.nodeArray[randomX][randomY].finished == true) {
                randomX = Math.floor(Math.random() * this.xNum);
                randomY = Math.floor(Math.random() * this.yNum);
            }
            this.nodeArray[randomX][randomY].finished = true;
        }
    }
}
