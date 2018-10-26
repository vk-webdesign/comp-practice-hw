function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var i = 5; i <= 400; i = i + 5) {
    var xStart = i;
    var xEnd = i;
    var yStart = 10;
    var yEnd = i*2;
    line(xStart, yStart, xEnd, yEnd);
	}
}
