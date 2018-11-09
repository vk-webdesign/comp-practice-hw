function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var i = 20; i <= 380; i = i + 10) {
  	var startX = 20;
  	var startY = i;
  	var endX = 380;
  	var endY = i;
  	line(startX, startY, endX, endY);
	}
}
