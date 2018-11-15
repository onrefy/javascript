 class Particle {
     constructor(x = 0, y = 0, z = 0) {
         this.x = x;
         this.y = y;
         this.z = z;
         this.particles = [];
     }

     Shake(horizontal, vertical) {
         this.x += randomPrimitive(noise(Math.random()) * horizontal);
         this.y += randomPrimitive(noise(Math.random()) * vertical);
     }

     Move(hor, ver) {
         this.x += hor;
         this.y += ver;
     }
     
     newMatrix (xNum, yNum, cellX, cellY) {
         for (i = 0; i < xNum; i++)
             for (j = 0; j < yNum; j++) {
                 this.particles.push(new Particle(i * cellX + this.x, j * cellY + this.y));
             }
     }

 }

 function GetCoordination(points) {
     return ([points.x, points.y, points.z])；
 }
 }

