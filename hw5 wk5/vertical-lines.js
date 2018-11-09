function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var i = 20; i <= 380; i = i + 10) {
  	var startX = i;
  	var startY = 20;
  	var endX = i;
  	var endY = 380;
  	line(startX, startY, endX, endY);
	}
}
