 function setup() {
  createCanvas(400, 400);
}

  var col = 0
  var s = 0;
	var changeInCol = 1.385;
	var changeInS = 1;

function draw() {
  background(22, 86, 132);
  
  rectMode(CENTER);
  fill(0);
  stroke(255);
  strokeWeight(3);
  rect(width/2, height/2-2, 190, 190);
  
  stroke(25);
  strokeWeight(1);
  line(108,106,292,290);
  line(292,106,108,290);
  noStroke();
  
  fill(col);
  print(col);
  col += changeInCol;
  if (col >= 255) {
    changeInCol = -1.385;
  }
  if (col <= 0) {
    changeInCol = 1.385;
  }
  
  rect(width/2, height/2-2, s, s)
  s += changeInS;
  if (s >= 185) {
    changeInS = -1;
  }
  
  if (s <= 0) {
    changeInS = +1;
  }
}
