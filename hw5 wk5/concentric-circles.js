function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var i = 20; i <= 380; i = i + 10) {
    noFill();
    stroke(255);
  	var radius = i;
  	ellipse(height/2, width/2, radius);
	}
}
