var myPath = new Path();
myPath.strokeColor = 'blue';
points = [];
var radius = 50;

for (var i=0;i<4;i++){
    points.push(new Point(400+100*Math.cos(Math.PI/4*i),400+10*i));
}

points.map(x=>path.add(x));

myPath.smooth();
