function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
let x = 25;
let y = 25;

function draw() {
  colorMode(HSB);
  stroke(255);
  fill(random(90));
  // draw circle with random hue
  
  if (x >= 150 && y >=150){
  fill(random(360), 100, 80);
  }
  
  if (x >= 270 || y>=270) {
    fill(random(90));
  }
  
  ellipse(x, y, 20);
  
  // set up next circle
  x = x + 25;
  
  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 25;
  }
  
  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
  }
}
