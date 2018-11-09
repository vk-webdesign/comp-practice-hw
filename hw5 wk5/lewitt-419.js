function setup() {
  createCanvas(975, 615);
  
}

function draw() {
	background(248);
  strokeWeight(15);
  strokeCap(SQUARE);
  
  //GREY LINES
  stroke(127.5);
  for (var i = 30 + 7.5; i <= 485.5; i = i + 30) {
    line(i, 15, i, 300);
  }
  
  //YELLOW LINES
  stroke(230,210,0)
  for (var i = 30 + 7.5; i <= 300; i = i + 30) {
    line(width/2, i, width, i);
  }
  
  //RED LINES
  var redSlant = 340;
  var redSlant2 = 159;
  stroke(220,0,0)
    for (var x = 50 + 7.5; x <= 975/2; x = x + 45) {
    	line(x, 307.5, x-redSlant, 615);
    }
  	for (var x = 328; x <= 615; x = x + 45) {
    	line(width/2, x, x-redSlant2, 615);
    }
  
  //BLUE LINES
  var blueSlant = 340;
  var blueSlant2 = 125;
  stroke(10,20,180)
    for (var x = 487.5 + 24; x <= width; x = x + 45) {
    	line(x, 307.5, x+blueSlant, 615);
    }
  	for (var y = 328; y <= 615; y = y + 45) {
    	line(width/2, y, x+blueSlant2-y, 615);
    }
  
  //BLACK BORDERS
  stroke(0);
  line(7.5, 0, 7.5, 600);
  line(width/2, 0, width/2, 600);
  line(975 - 7.5, 0, 975 - 7.5, 600);
  line(0, 7.5, 975, 7.5);
  line(0, height/2, 975, height/2);
  line(0, height-7.5, 975, height-7.5);
}
