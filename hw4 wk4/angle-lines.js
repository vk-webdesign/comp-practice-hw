function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 50; x < width-1; x = x + 15) {
    line(x, height/2, x+100, height/2-75);
  }
}
