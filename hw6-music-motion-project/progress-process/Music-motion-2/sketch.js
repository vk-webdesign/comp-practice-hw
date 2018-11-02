var canvas;
var myFont;
var song;
var amp;

//keeps track of amp levels
var volGraph = [];

function preload() {
  song = loadSound("assets/sound/america.mp3");
}

function setup2() {
  let bLang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(bLang, gotSpeech);
  speechRec.onResult = gotSpeech;
  speechRec.start();

  function gotSpeech() {
    //if (speechRec.resultValue) {
    //  createP(speechRec.resultString);
    //}
    console.log(speechRec);
  }
}

function setup() {
  myFont = loadFont('assets/font/RobotoCondensed-Bold.ttf');
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  let bLang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(bLang, gotSpeech);
  speechRec.onResult = gotSpeech;
  speechRec.start();

  function gotSpeech() {
    //if (speechRec.resultValue) {
    //  createP(speechRec.resultString);
    //}
    console.log(speechRec);
  }

  song.play();
  amp = new p5.Amplitude();

  angleMode(DEGREES);
}

function draw() {
  background(17,79,84);  

  //text
  textFont(myFont);
  textSize(width/25);
  fill(185,201,217);
  noStroke();
  text('text', width/8, height/2);

  function gotSpeech() {
    if (playText.resultValue) {
      createP(speechRec.resultString)
    }
  }

  // CIRCLE VIS

  var vol = amp.getLevel();
  volGraph.push(vol);
  stroke(237,221,212,100);
  noFill();

  
  beginShape();
  translate(width/2, height/2);
  for (var i = 0; i < 360; i++) {
    //converts angle and radius to x and y
    var r = map(volGraph[i], 0, 1, 65, 500);
    var x = r * cos(i);
    var y = r * sin(i);
    //var y = map(volGraph[i], 0, 1, height, 0);
    vertex(x, y);
  }
  endShape();


  // ANGEL LINES

  translate(25, 10);
  for (var i = 0; i < 360; i++) {
    //converts angle and radius to x and y
    var r = map(volGraph[i], 0, 1, 65, 500);
    var x = r * cos(i);
    var y = r * sin(i);
    //var y = map(volGraph[i], 0, 1, height, 0);
    line(width/2-150, 250, x, y);
  }

  if (volGraph.length > 360) {
    volGraph.splice(0, 1);
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
}






window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var size = 0;
  canvas.size(w,h);
  width = w;
  height = h;
};