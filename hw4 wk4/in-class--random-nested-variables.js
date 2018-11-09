function setup() {
  createCanvas(600, 400);
  background(0);
}

// var x will give a random number between 0 and 50
// the numbers may looks like 20.75748 or 2.1119
// var x = random(0, 50);

var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

function draw() {
  spot.x = random(0, width)
  spot.y = random(0, width)
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, 24, 24);
}
