function setup() {
  createCanvas(400, 400);
	colorMode(HSB);
	frameRate(200);
	for (var i = 0; i < 200; i = i + 1) {
		append(x, random(width));
		append(y, random(width));
		append(changeInX, random(1-10));
		append(changeInY, random(1-10));
		append(col, random(1, 360));
		append(s, random(10, 18));
	}
}

var x = [50, 60, 150];
var y = [200, 150, 50];
var s = [8, 10, 20];
var changeInX = [3, 4, 5];
var changeInY = [3, 7, 4];
var col = [20, 100, 180];

function draw() {
  background(245);
	
	
  
	for (var i = 0; i < x.length; i = i + 1) {
		noStroke();
		fill(col[i], 100, 80, 50);
		ellipse(x[i], y[i], s[i]);

		x[i] = x[i] + changeInX[i];
		y[i] = y[i] + changeInY[i];

		if (x[i] > width) {
			changeInX[i] = -changeInX[i];
		}

		if (x[i] < 0) {
			changeInX[i] = -changeInX[i];
		}

		if (y[i] > height) {
			changeInY[i] = -changeInY[i];
		}

		if (y[i] < 0) {
			changeInY[i] = -changeInY[i];
		}
	}
}
