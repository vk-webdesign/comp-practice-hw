// I cant believe I did this without knowing triganometry

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 10; x < width-50; x = x + 2) {
    colorMode(HSB);
    stroke(x, 100, 100);
    line(200, 200, cos(x)*50 + mouseX, sin(x)*50 + mouseY);
  }
}
