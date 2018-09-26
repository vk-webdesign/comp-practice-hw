var x = 210;
var y = 290;

var a = 165;
var b = 350;

var r = 0;
var r2 = 0;

function setup() {
  createCanvas(400, 400);
  background(180, 230, 235);
}
  
function draw() {
  noStroke();

  // draw smokestack
  fill(180);
  rect(195, height, 30, -100);
  
  fill(170,0,0)
  rect(195, 320, 30, -10);
  
  // draw smokestack
  fill(200);
  rect(150, height, 30, -70);
  
  fill(170,0,0)
  rect(150, 350, 30, -10);

  // darker as it gets closer to 0
  push();
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);
  pop();
  
  push();
  fill(200,100,0);
  translate(x, y);
  rotate(r);
  rect(-20, -20, 20, 20);
  pop();
  
  push();
  fill(200,100,0);
  translate(a, b);
  rotate(r2);
  rect(-20, -20, 20, 20);
  pop();
  
  push();
  fill(y);
  translate(a, b);
  rotate(r2);
  rect(-10, -10, 20, 20);
  pop();
  
  // up 3 pixels
  y -= 1;
  b -= 1;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  r2 += -0.03
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
  
  if (b < -100) {
    b = 350;
  }
}
