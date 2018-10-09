function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  for (var a = width/6; a<= 400; a = a + width/6) {
  for (var i = 15; i <= 60; i = i + 15) {
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(a, height/2, i, i);
	}
  }
}
