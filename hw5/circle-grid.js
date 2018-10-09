function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  
  for (var x = 20; x <= 381; x = x +20) {
    for (var y = 20; y <= 381; y = y + 20) {
      ellipse(x, y, 15)
    }
  }
}
