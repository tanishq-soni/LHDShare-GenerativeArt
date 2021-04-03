var NUM_CIRCLES = 100;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(1920, 1080);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/5;
}

function draw() {
  var isShifted = false;

  rVal = 255;
  gVal = 255;
  bVal = 255;

  var y = height;
  while (y >= 1) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 0;
    }

    while (x <= width) {
      fill(color(rVal, gVal, bVal));
      stroke(color(rVal, gVal, bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    stroke(color(rVal, gVal, bVal));
    fill(color(rVal, gVal, bVal));

    y = y - circleRadius;
    isShifted = !isShifted;

    rVal = (rVal - 2) % 255;
    gVal = (gVal + 2) % 150;
    bVal = (bVal + 3) % 255;
    rotate(20);
  }
}

function keyPressed() {
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('Generative Art', 'png');
  }
  return false;
}
