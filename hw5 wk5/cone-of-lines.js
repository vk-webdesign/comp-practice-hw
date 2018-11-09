function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var i = 20; i <= 380; i = i + 10) {
    stroke(255);
  	var xStart = width/2;
    var xEnd = i;
    var yStart = 10;
    var yEnd = 390;
  	line(xStart, yStart, xEnd, yEnd);
	}
}
