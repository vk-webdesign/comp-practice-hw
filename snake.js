var bodyX = [3, 3, 3, 3];
var bodyY = [2, 3, 4, 5];
var snakeLength = 4;

var GRIDSIZE = 15;

var foodX = 10;
var foodY = 10;

var direction = "right";

function setup() {
  createCanvas(405, 405);
  frameRate(5);
}

function draw() {
  background(0);

  // handle motion
  var oldX = bodyX[0];
  var oldY = bodyY[0];
  var newX = oldX;
  var newY = oldY;

  if (direction == "right") {
    newX = oldX + 1;
  }
  if (direction == "left") {
    newX = oldX - 1;
  }
  if (direction == "down") {
    newY = oldY + 1;
  }
  if (direction == "up") {
    newY = oldY - 1;
  }

  // add new head
  bodyX.unshift(newX);
  bodyY.unshift(newY);

  // make sure snake isn't too long
  bodyX = bodyX.slice(0, snakeLength);
  bodyY = bodyY.slice(0, snakeLength);

  // is head on the food?
  if (bodyX[0] == foodX && bodyY[0] == foodY) {
    snakeLength = snakeLength + 1;
    frameRate(frameRate() + 1);
    placeFood();
  }

  // draw snake
  noStroke();
  fill(255);
  for (var i = 0; i < bodyX.length; i = i + 1) {
    rect(bodyX[i] * GRIDSIZE, bodyY[i] * GRIDSIZE, GRIDSIZE, GRIDSIZE);
  }

  // draw food
  fill(255, 0, 0);
  rect(foodX * GRIDSIZE, foodY * GRIDSIZE, GRIDSIZE, GRIDSIZE);

  // check for collisions with snake
  for (var i = 1; i < bodyX.length; i = i + 1) {
    if (bodyX[i] == bodyX[0] && bodyY[i] == bodyY[0]) {
      background(0, 90);
      fill(255);
      textSize(96);
      text("GAME", width / 2 - textWidth("GAME") / 2, height / 2 - 25);
      text("OVER", width / 2 - textWidth("OVER") / 2, height / 2 + 75);
      noLoop();
    }
  }

  // check for collisions with edges
  for (var i = 1; i < bodyX.length; i = i + 1) {
    if (bodyX[i] > 26 || bodyX[i] < 0 || bodyY[i] > 26 || bodyY[i] < 0) {
      background(0, 90);
      fill(255);
      textSize(96);
      text("GAME", width / 2 - textWidth("GAME") / 2, height / 2 - 25);
      text("OVER", width / 2 - textWidth("OVER") / 2, height / 2 + 75);
      noLoop();
    }
  }
}

function placeFood() {
  // pick new x and y coordinates
  foodX = floor(random(width / GRIDSIZE));
  foodY = floor(random(height / GRIDSIZE));

  for (var i = 0; i < bodyX.length; i = i + 1) {
    // is the food already on the snake?
    if (foodX == bodyX[i] && foodY == bodyY[i]) {
      // if so, try again
      return placeFood();
    }
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    direction = "down";
  }

  if (keyCode == UP_ARROW) {
      direction = "up";
    }
  
  if (keyCode == RIGHT_ARROW) {
      direction = "right";
    }
  
  if (keyCode == LEFT_ARROW) {
      direction = "left";
    }
  }
