function setup() {
  createCanvas(975, 615);
  
}

function draw() {
	background(248);
  
  //background(200);
  strokeWeight(15);
  strokeCap(SQUARE);
  
  
  
  stroke(127.5);
  for (var i = 30 + 7.5; i <= 485.5; i = i + 30) {
    line(i, 15, i, 300);
  }
  
  stroke(230,210,0)
  for (var i = 30 + 7.5; i <= 300; i = i + 30) {
    line(width/2, i, width, i);
  }
  
  var redSlant = 340;
  stroke(255,0,0)
    for (var x = 50 + 7.5; x <= 975/2; x = x + 45) {
    	line(x, 307.5, x-redSlant, 615);
    }
  
  var blueSlant = 340;
  stroke(0,0,255)
    for (var x = 487.5 + 24; x <= width; x = x + 45) {
    	line(x, 307.5, x+blueSlant, 615);
    }
  
  
  //black borders
  stroke(0);
  line(7.5, 0, 7.5, 600);
  line(width/2, 0, width/2, 600);
  line(975 - 7.5, 0, 975 - 7.5, 600);
  line(0, 7.5, 975, 7.5);
  line(0, height/2, 975, height/2);
  line(0, height-7.5, 975, height-7.5);
}
  
