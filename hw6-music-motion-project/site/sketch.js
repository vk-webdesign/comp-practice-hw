var canvas;
var myFont;
var song;
var amp;

var chime;

var sounds = [];
var circles = [];

//keeps track of amp levels
var volGraph = [];

var textAdvice;

//Background Line Array
var points = [],
    x, j,
    lines_length = 10,
    x_spacing = y_spacing = lines_length * 3;

function preload() {
  soundFormats('mp3');
  song = loadSound('assets/sound/song.mp3');
}

function setup() {
  loadJSON('http://api.adviceslip.com/advice', gotData);
  myFont = loadFont('assets/font/RobotoCondensed-Bold.ttf');
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  amp = new p5.Amplitude();

  angleMode(DEGREES);
  frameRate(100);

  song.play();
  song.loop();

  //Background Layout
  for (x = 0; x < width / x_spacing ; x++){
    for (y = 0; y < height / y_spacing ; y++){
      points.push(createVector(x * x_spacing, y * y_spacing));
    }
}
}

  //Advice Activate
  function gotData(data) {
    print(data.slip.advice);
    textAdvice = data;
  }


  //Responsive Window
  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var size = 0;
    canvas.size(w,h);
    width = w;
    height = h;
  };


  //TEXT VARIABLES
  var changeInX = 0.5;
  var x = 10;

function draw() {
  background(17,79,84);  

  points.forEach(function(point){
    drawVectorFromPoint(point);
  })

  //greenBkg = 17, 79, 84;
  //greenDrk = 171,237,198;
  //greenLit = 185,255,183;
  //txtBox = 16,60,74,250;

  //MAIN GREEN RECTANGLE
  noStroke();
  fill(171,237,198);
  rect(width/9*3-15, height/9, 15, height/2+height/12*2.5);
  rect(width/9*6, height/9, 15, height/2+height/12*2.5);
  rect(width/9*3-15, height/9, width/9*3+20, 15);
  fill(185,255,183);
  rect(width/9*3-15, height/9+height/2+height/12*2.5-2, width/9*3+30, 15);

  //MAIN GREEN RECTANGLE BACKGROUND
  fill(17,59,70);
  rect(width/9*3, height/9+15, width/9*3, height/2+height/12*2.265);

  //VOL GRAPH
  var vol = amp.getLevel();
  volGraph.push(vol);
  stroke(185,201,217);
  noFill();
  for (var i = 0; i < volGraph.length; i++) {
    var y = map(volGraph[i], 0, 1, height/5*4+20, height/5*4-100);
  }

  if (volGraph.length > width/9*3) {
    volGraph.splice(0, 1);
  }

  // LINE VIS
  stroke(185,201,217,30);
  strokeWeight(1);
  for (var i = 0; i < volGraph.length; i++) {
    //top
    var y = map(volGraph[i], 0, 1, height/6*3, height/9);
    line(width/9*3, y, width/9*6, y);
    //left
    var x1 = map(volGraph[i], 0, 1, width/2, width/9*6-5);
    line(x1, height/6*2, x1, height/6*3)
    //right
    var x2 = map(volGraph[i], 0, 1, width/2, width/9*3);
    line(x2, height/6*2, x2, height/6*3);

    //bot
    var y2 = map(volGraph[i], 0, 1, height/2+height/12, height/2+height/12*2.5);
    line(width/9*3, y2, width/9*6, y2);
  }



  //TEXT BOX
  fill(12,57,70,245);
  noStroke();
  rect(0+50, height/6*3, width-100, height/12);

  //TEXT
  textFont(myFont);
  fill(185,201,217);
  noStroke();
  textAlign(CENTER);

  if (textAdvice) {
  textSize(width/500+x);

  if (x > 15){
    changeInX = 0.4;
  }
  if (x > 25){
    changeInX = 0.3;
  }
  if (x > 28){
    changeInX = 0.2;
  }
  if (x > 30){
    changeInX = 0.1;
  }
  if (x > 32){
    changeInX = 0.03;
  }
 
  if (x > 35) {
    x = 0;
    loadJSON('http://api.adviceslip.com/advice', gotData);
    changeInX = 0.5;
  }
  
  text(textAdvice.slip.advice, width/2, height/2+height/19);
  
  }
  x = x + changeInX;
  //print(x);
  }

  function drawVectorFromPoint(anchorLocation){
    var mouse = createVector(mouseX, mouseY);
    var lineVector = p5.Vector.sub(mouse, anchorLocation);
    lineVector.setMag(lines_length);

    stroke(130,120,162);
    line(anchorLocation.x,
        anchorLocation.y,
        anchorLocation.x + lineVector.x,
        anchorLocation.y + lineVector.y);
}