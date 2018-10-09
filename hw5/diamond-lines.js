function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  
  var adjustment = 9;
  
  for (var i = 10; i <= 200; i = i + 10) {
    var xStart = width/2 - i + adjustment;
    var xEnd = width/2 + i - adjustment;
    var yStart = i;
    var yEnd = i;
    line(xStart, yStart, xEnd, yEnd);
	}
  
  for (var a = 390; a >= 200; a = a - 10) {
    var aStart = width/2 - a + 391;
    var aEnd = width/2 + a - 391;
    var bStart = a;
    var bEnd = a;
    line(aStart, bStart, aEnd, bEnd);
	}
}
