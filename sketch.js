const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "arcStart": 3.14*1.75,
  "arcEnd": 3.14*0.75,

  "rect1_x": 120,
  "rect1_y": 22,
  "rect1_w": 33,
  "rect1_h": 128,

  "rect2_x": 0,
  "rect2_y": 0,
  "rect2_w": 0,
  "rect2_h": 0,

  "circle_x": 1,
  "circle_y": 1,
  "circle_r": 1,
}

const letterB = {
  "arcStart": 0,
  "arcEnd": 0,
  
  "rect1_x": 0,
  "rect1_y": 0,
  "rect1_w": 33,
  "rect1_h": 150,

  "rect2_x": 1,
  "rect2_y": 1,
  "rect2_w": 1,
  "rect2_h": 1,

  "circle_x": 0,
  "circle_y": 25,
  "circle_r": 100,
}

const letterC = {
  "arcStart": 3.14*.5,
  "arcEnd": 3.14*1.5,
  
  "rect1_x": 1,
  "rect1_y": 1,
  "rect1_w": 1,
  "rect1_h": 1,

  "rect2_x": 1,
  "rect2_y": 1,
  "rect2_w": 1,
  "rect2_h": 1,

  "circle_x": 1,
  "circle_y": 1,
  "circle_r": 1,
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";


const lightBlue  = "#caf0f8";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {

  const circleCol  = color(239, 118, 122, 200);
  const rect1Col  = color(69, 105, 144, 200);

  // determine parameters for second circle
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  let rect1_x = posx + letterData["rect1_x"]
  let rect1_y = posy + letterData["rect1_y"]
  let rect1_w = letterData["rect1_w"]
  let rect1_h = letterData["rect1_h"]

  let circle_x = posx + letterData["circle_x"]
  let circle_y = posy + letterData["circle_y"]
  let circle_r = letterData["circle_r"]

  // draw two circles
  fill(circleCol);
  strokeWeight(0)
  arc(posx, posy, 150, 150, arcStart, arcEnd);
  
  fill(rect1Col)
  rect(rect1_x-75, rect1_y-75, rect1_w, rect1_h)

  circle(circle_x, circle_y, circle_r)
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
