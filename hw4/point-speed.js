function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {
  
  for (var t = 0; t < 100; t+=10) {
	var x = random(width);
	var y = random(height);

	stroke(x, y, 100);
	point(x, y);
  }
}
