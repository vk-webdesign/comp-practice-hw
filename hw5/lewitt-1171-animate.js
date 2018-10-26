function setup() {
  createCanvas(600, 400);
}

var col = 238;
var changeCol = -0.5;
var yL = 0;
var changeYL = -0.1;
var yR = 0;
var changeYR = 0.1;

var r = 0.5;
var changeR = 0.5;

function draw() {
  background(col);
  noStroke();
  col += changeCol;
  
  if (col <= 100) {
    changeCol = 0.5;
  }
  if (col >= 238) {
    changeCol = -0.5;
  }
  
  angleMode(DEGREES);
  
  
  //LEFT CUBE
  yL += changeYL
  r += changeR
  if (yL <= -10) {
        changeYL = 0.2;
      }
      if (yL >= 10) {
        changeYL = -0.2;
      }
  rotate(r);
  if (r <= -1) {
    changeR = 0.01;
  }
  if (r >= 1) {
    changeR = -0.01;
  }
  
  fill(209,211,212);  
  beginShape();
		vertex(39.505, 133.334+yL);
		vertex(122.839, 133.334+yL);
		vertex(122.837, 250+yL);
		vertex(239.506, 250+yL);
  	vertex(239.506, 333.335+yL);
  	vertex(39.505, 333.335+yL);
	endShape(CLOSE);
	
  fill(177, 179, 182);
	beginShape();
		vertex(39.505, 133.334+yL);
		vertex(106.172, 66.667+yL);
		vertex(287.17, 66.667+yL);
		vertex(259.358, 100+yL);
		vertex(156.171, 100+yL);
		vertex(122.839, 133.334+yL);
	endShape(CLOSE);
  
  fill(128, 130, 133);
  beginShape();
  	vertex(287.17, 66.667+yL);
  	vertex(259.358, 100+yL);
  	vertex(259.358, 214.253+yL);
  	vertex(239.506, 250+yL);
  	vertex(239.506, 333.335+yL);
  	vertex(287.17, 266.668+yL);
  endShape(CLOSE);
  
  fill(209, 211,212);
  beginShape();
  	vertex(156.171, 100+yL);
  	vertex(259.358, 100+yL);
  	vertex(259.358, 214.253+yL);
  	vertex(156.171, 214.253+yL);
  endShape(CLOSE);
  
  fill(119, 120, 123);
  beginShape();
  	vertex(122.839, 133.334+yL);
  	vertex(156.171, 100+yL);
  	vertex(156.171, 214.253+yL);
  	vertex(122.837, 250+yL);
  endShape(CLOSE);
  
  fill(177, 179, 182);
  beginShape();
  	vertex(156.171, 214.253+yL);
  	vertex(259.358, 214.253+yL);
  	vertex(239.506, 250+yL);
  	vertex(122.837, 250+yL);
  endShape(CLOSE);
  
  //RIGHT CUBE
  yR += changeYR
    if (yR <= -15) {
          changeYR = 0.2;
        }
        if (yR >= 15) {
          changeYR = -0.2;
        }
  
  fill(209, 211, 212);
  beginShape();
  	vertex(310.493, 133.334+yR);
  	vertex(423.158, 133.334+yR);
  	vertex(510.494, 217+yR);
  	vertex(510.494, 333.335+yR);
  	vertex(310.493, 333.335+yR);
  endShape(CLOSE);
  
  fill(177, 179, 182);
  beginShape();
  	vertex(377.16, 66.667+yR);
  	vertex(560.495, 66.667+yR);
  	vertex(533.398, 100+yR);
  	vertex(423.158, 133.334+yR);
  	vertex(310.493, 133.334+yR);
  endShape(CLOSE);
  
  fill(119, 120, 123);
  beginShape();
  	vertex(533.398, 100+yR);
  	vertex(560.495, 66.667+yR);
  	vertex(558.335, 266.668+yR);
  	vertex(510.494, 333.335+yR);
  	vertex(510.494, 217+yR);
  endShape(CLOSE);
  
  fill(109, 110, 113);
  beginShape();
  	vertex(423.158, 133.334+yR);
  	vertex(534.118, 100+yR);
  	vertex(510.494, 217+yR);
  endShape(CLOSE);
  
}
