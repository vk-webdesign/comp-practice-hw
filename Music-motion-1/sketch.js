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

function preload() {
  soundFormats('m4a');
  for (var i = 0; i < 10; i++) {
    sounds.push(loadSound('assets/sound/glockenspiel.m4a'));
  }

  soundFormats('mp3');
  song = loadSound('assets/sound/Broken.mp3');
}

function setup() {
  myFont = loadFont('assets/font/RobotoCondensed-Bold.ttf');
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i < sounds.length; i++) {
    let r = round(random(10, 30));
    let sound = sounds[i];
    sound.rate(0.25*pow(2, (30-r)/12));
    
    circles.push({
      r: r,
      pos: createVector(random(r*2, width - r*2), random(r*2, height - r*2)),
      vel: createVector(random(-.3, .3), random(-.3, .3)),
      chime: sound
    });
  }

  amp = new p5.Amplitude();

  angleMode(DEGREES);

  loadJSON('http://api.adviceslip.com/advice', gotData);

  song.play();
  song.loop();
  }

  var pts;
  function gotData(data) {
    print(data.slip.advice);
    textAdvice = data;
    stroke(255);
    strokeWeight(1);
    pts = myFont.textToPoints(textAdvice.slip.advice)
  }

  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var size = 0;
    canvas.size(w,h);
    width = w;
    height = h;
  };

  var changeInX = 0.5;
  var x = 10;


function draw() {
  background(17,79,84);  

  var vol = amp.getLevel();
  volGraph.push(vol);
  stroke(185,201,217);
  noFill();
  strokeWeight(2);
  beginShape();
  for (var i = 0; i < volGraph.length; i++) {
    var y = map(volGraph[i], 0, 1, height/5*4+20, height/5*4-100);
    vertex(width/9*3+i, y);
  }
  endShape();

  if (volGraph.length > width/9*3) {
    volGraph.splice(0, 1);
  }

  //text
  textFont(myFont);
  fill(185,201,217);
  noStroke();
  textAlign(CENTER);

  if (textAdvice) {
  textSize(width/500+x);

  if (x > 15){
    changeInX = 0.4;
  }
  if (x > 20){
    changeInX = 0.03;
  }
  if (x > 25){
    changeInX = 0.02;
  }
 
  if (x > 35) {
    x = 0;
    loadJSON('http://api.adviceslip.com/advice', gotData);
    changeInX = 0.5;
  }
  
  text(textAdvice.slip.advice, width/2, height/5*3+height/8-20);
  
  }
  x = x + changeInX;
  //print(x);
  


  //RACTANGLE ZOOM
  noFill();
  stroke(185,201,217);
  strokeWeight(1);

  //RECTANGLE
  noFill();
  stroke(185,201,217);
  strokeWeight(15);
  rect(width/9*3, height/9, width/9*3-5, height/6*3);
}

//CHIMES
  var t = millis();
  for (var i = 0; i < circles.length; i++) {
    let circle = circles[i];

    circle.pos.add(circle.vel);

    if (circle.pos.x > width - circle.r) {
      circle.vel.x = -abs(circle.vel.x);
      circle.triggered = t;
    }
    if (circle.pos.x < circle.r) {
      circle.vel.x = abs(circle.vel.x);
      circle.triggered = t;
    }
    if (circle.pos.y > height - circle.r) {
      circle.vel.y = -abs(circle.vel.y);
      circle.triggered = t;
    }
    if (circle.pos.y < circle.r) {
      circle.vel.y = abs(circle.vel.y);
      circle.triggered = t;
    }
    for (var j = i + 1; j < circles.length; j++) {
      let other = circles[j];
      let d = circle.r + other.r;
      if (circle.pos.dist(other.pos) < d) {
        circle.triggered = t;
        other.triggered = t;
        
        // bounce circles off each other. yay math!
        let col = p5.Vector.lerp(circle.pos, other.pos, circle.r / d);
        let cn = p5.Vector.sub(circle.pos, col).normalize();
        let on = p5.Vector.sub(other.pos, col).normalize();
        circle.vel.sub(p5.Vector.mult(cn, 2 * circle.vel.dot(cn)));
        other.vel.sub(p5.Vector.mult(on, 2 * other.vel.dot(on)));
        while (circle.pos.dist(other.pos) < d) {
          circle.pos.add(p5.Vector.mult(circle.vel, 0.01));
          other.pos.add(p5.Vector.mult(other.vel, 0.01));
        }
      }
    }

    if (circle.triggered == t) {
      circle.chime.play();
    }
    if (millis() - circle.triggered < 200) {
      fill(190, 220, 255);
    } else {
      fill(255);
    }
    ellipse(circle.pos.x, circle.pos.y, circle.r * 2);
  }



  //fill(237,221,212,150);
  //noStroke();
  //ellipse(width/2, height/2, width-50, vol*200);
  
  
  
  //var level = amp.getLevel();
  //var size = map (level, 0, 1, 0, 200);

  //ellipse(width/2,height/2,size,size);

  // LINES
//  if (level >= 0.63) {
//    background(0);
//    stroke(255,0,0);
//    var x = random(100,width-100);
//    line(100,100, x,1200);
//    line(100,height/2, x,height-100);
//    line(width-100,height/2, x,100);
//  }