function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(238);
  noStroke();
  
  //LEFT CUBE
  fill(209,211,212);
  beginShape();
		vertex(39.505, 133.334);
		vertex(122.839, 133.334);
		vertex(122.837, 250);
		vertex(239.506, 250);
  	vertex(239.506, 333.335);
  	vertex(39.505, 333.335);
	endShape(CLOSE);
	
  fill(177, 179, 182);
	beginShape();
		vertex(39.505, 133.334);
		vertex(106.172, 66.667);
		vertex(287.17, 66.667);
		vertex(259.358, 100);
		vertex(156.171, 100);
		vertex(122.839, 133.334);
	endShape(CLOSE);
  
  fill(128, 130, 133);
  beginShape();
  	vertex(287.17, 66.667);
  	vertex(259.358, 100);
  	vertex(259.358, 214.253);
  	vertex(239.506, 250);
  	vertex(239.506, 333.335);
  	vertex(287.17, 266.668);
  endShape(CLOSE);
  
  fill(209, 211,212);
  beginShape();
  	vertex(156.171, 100);
  	vertex(259.358, 100);
  	vertex(259.358, 214.253);
  	vertex(156.171, 214.253);
  endShape(CLOSE);
  
  fill(119, 120, 123);
  beginShape();
  	vertex(122.839, 133.334);
  	vertex(156.171, 100);
  	vertex(156.171, 214.253);
  	vertex(122.837, 250);
  endShape(CLOSE);
  
  fill(177, 179, 182);
  beginShape();
  	vertex(156.171, 214.253);
  	vertex(259.358, 214.253);
  	vertex(239.506, 250);
  	vertex(122.837, 250);
  endShape(CLOSE);
  
  //RIGHT CUBE
  fill(209, 211, 212);
  beginShape();
  	vertex(310.493, 133.334);
  	vertex(423.158, 133.334);
  	vertex(510.494, 217);
  	vertex(510.494, 333.335);
  	vertex(310.493, 333.335);
  endShape(CLOSE);
  
  fill(177, 179, 182);
  beginShape();
  	vertex(377.16, 66.667);
  	vertex(560.495, 66.667);
  	vertex(533.398, 100);
  	vertex(423.158, 133.334);
  	vertex(310.493, 133.334);
  endShape(CLOSE);
  
  fill(119, 120, 123);
  beginShape();
  	vertex(533.398, 100);
  	vertex(560.495, 66.667);
  	vertex(558.335, 266.668);
  	vertex(510.494, 333.335);
  	vertex(510.494, 217);
  endShape(CLOSE);
  
  fill(109, 110, 113);
  beginShape();
  	vertex(423.158, 133.334);
  	vertex(534.118, 100);
  	vertex(510.494, 217);
  endShape(CLOSE);
  
}
