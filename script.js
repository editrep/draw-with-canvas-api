
// 1. get the canvas reference
canvas = document.getElementById("canvas");

// 2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

// creates circle class
class Circle {
  constructor(x, y, radius, fillColor, strokeColor, lineWidth) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
  }
  
  draw(ctx) {
    ctx.fillStyle = this.fillColor; 
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
  }
}

let allCircles = [];
let creatCircle = function(circle) {
    circle.draw(ctx);
}

for (var numbers = 0; numbers < 10; numbers++) {
    let randomX = Math.random() * canvas.width;
    let randomY = Math.random() * canvas.height;

    let myCircle = new Circle(randomX, randomY, 50, "#68add5", "#3486b5", 5);
    allCircles.push(myCircle);
    creatCircle(myCircle);
}


// draws circle with stroke and fill
//ctx.fillStyle = "#68add5";
//ctx.beginPath();
//ctx.arc(100, 100, 50, 0, 2 * Math.PI);
//ctx.fill();
//ctx.strokeStyle = "#3486b5";
//ctx.lineWidth = 5;
//ctx.stroke();