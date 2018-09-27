function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var h = 10;
var mower = -402;

//grass
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(10, 20), height-10-random(h));
  
  //moves grass along line
  x = x + 10;
  
  //increases size of grass +3
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  //chops grass
  if (mouseIsPressed) {
    noStroke();
    fill(255);
    rect(mower, -10, width+2, height-15);
    mower = mower + 3;
    h = 10;
  }
  
  //can we go over this in class??? I couldnt figure out how to do this without pressing the mouse!!!
  
  
 
  
  //rectangle / ground
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
