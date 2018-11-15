class Node {
    constructor(x, y,magicbox) {
        this.x = x;
        this.y = y;
        this.neighbour = [];
        this.finished = false;
        this.parent = magicbox;
    }
    getNeighbour() {
        var array = [];
        if (this.x < this.parent.xNum - 1) {
            if (this.isNodeSameState(this.parent.nodeArray[this.x + 1][this.y]))
                array.push(this.parent.nodeArray[this.x + 1][this.y]);
        }
        if (this.x > 0)
            if (this.isNodeSameState(this.parent.nodeArray[this.x - 1][this.y]))
                array.push(this.parent.nodeArray[this.x - 1][this.y]);
        if (this.y < this.parent.yNum - 1)
            if (this.isNodeSameState(this.parent.nodeArray[this.x][this.y + 1]))
                array.push(this.parent.nodeArray[this.x][this.y + 1]);
        if (this.y > 0)
            if (this.isNodeSameState(this.parent.nodeArray[this.x][this.y - 1]))
                array.push(this.parent.nodeArray[this.x][this.y - 1]);
        return array;
    }
    isNodeSameState(node) {
        return (this.finished == node.finished);
    }
}
