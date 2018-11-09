function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 20; x < width-50; x = x + 60) {
    line(x, height/2, mouseX, mouseY);
  }
}
