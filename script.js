
// 1. get the canvas reference
canvas = document.getElementById("canvas");

// 2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

// creates circle class
class Circle {
  constructor(x, y, radius, fillColor, strokeColor, lineWidth, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;

    this.speed = speed;

    //direction of movement
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
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

  update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // bounce off the walls
    if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
      this.dx = -this.dx;
    }
    if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0) {
      this.dy = -this.dy;
}

    this.draw(ctx);
    this.x += this.dx;
    this.y += this.dy;

  }
}

let allCircles = [];
let creatCircle = function(circle) {
    circle.draw(ctx);
}

for (var numbers = 0; numbers < 10; numbers++) {
    let randomX = Math.random() * canvas.width;
    let randomY = Math.random() * canvas.height;
    
    let myCircle = new Circle(randomX, randomY, 50, "#68add5", "#3486b5", 5, 4);
    allCircles.push(myCircle);
    creatCircle(myCircle);
}

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    for (let i = 0; i < allCircles.length; i++) {
        allCircles[i].update();
    }
}

updateCircle();


// draws circle with stroke and fill
//ctx.fillStyle = "#68add5";
//ctx.beginPath();
//ctx.arc(100, 100, 50, 0, 2 * Math.PI);
//ctx.fill();
//ctx.strokeStyle = "#3486b5";
//ctx.lineWidth = 5;
//ctx.stroke();