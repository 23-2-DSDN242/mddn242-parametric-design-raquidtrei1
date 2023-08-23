/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  const circleCol  = color(239, 118, 122, 200);
  const rect1Col  = color(69, 105, 144, 200);

  // all paramenters for create letters
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  let rect1_x = letterData["rect1_x"]
  let rect1_y = letterData["rect1_y"]
  let rect1_w = letterData["rect1_w"]
  let rect1_h = letterData["rect1_h"]

  let circle_x = letterData["circle_x"]
  let circle_y = letterData["circle_y"]
  let circle_r = letterData["circle_r"]

  // creates arc
  fill(circleCol);
  strokeWeight(0)
  arc(75, 75, 150, 150, arcStart, arcEnd);
  
  // creates first rectangle
  fill(rect1Col)
  rect(rect1_x, rect1_y, rect1_w, rect1_h)

  // creates circle
  circle(circle_x, circle_y, circle_r)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

  new_letter["rect1_x"] = map(percent, 0, 100, oldObj["rect1_x"], newObj["rect1_x"]);
  new_letter["rect1_y"] = map(percent, 0, 100, oldObj["rect1_y"], newObj["rect1_y"]);
  new_letter["rect1_w"] = map(percent, 0, 100, oldObj["rect1_w"], newObj["rect1_w"]);
  new_letter["rect1_h"] = map(percent, 0, 100, oldObj["rect1_h"], newObj["rect1_h"]);

  new_letter["circle_x"] = map(percent, 0, 100, oldObj["circle_x"], newObj["circle_x"]);
  new_letter["circle_y"] = map(percent, 0, 100, oldObj["circle_y"], newObj["circle_y"]);
  new_letter["circle_r"] = map(percent, 0, 100, oldObj["circle_r"], newObj["circle_r"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
