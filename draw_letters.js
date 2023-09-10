/* these are optional special variables which will change the system */
var systemBackgroundColor = "#231942";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */  
function drawLetter(letterData) {
  // color/stroke setup
  const arcCol  = color(190, 149, 196, 200); 
  const rectCol  = color(159, 134, 192, 200);
  const circCol  = color(94, 84, 142, 200);

  // all paramenters for create letters (explained in README.md)
  let arcX = letterData["arcX"];
  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  let arc2X = letterData["arc2X"];
  let arc2Start = letterData["arc2Start"];
  let arc2End = letterData["arc2End"];

  let rect1_x = letterData["rect1_x"];
  let rect1_y = letterData["rect1_y"];
  let rect1_w = letterData["rect1_w"];
  let rect1_h = letterData["rect1_h"];

  let rect2_x = letterData["rect2_x"];
  let rect2_y = letterData["rect2_y"];
  let rect2_w = letterData["rect2_w"];
  let rect2_h = letterData["rect2_h"];

  let circle_x = letterData["circle_x"];
  let circle_y = letterData["circle_y"];
  let circle_r = letterData["circle_r"];

  // creates arc
  fill(arcCol);
  strokeWeight(0);
  arc(arcX, 75, 150, 150, arcStart, arcEnd);
  arc(arc2X, 75, 150, 150, arc2Start, arc2End);
  
  // creates first rectangle
  fill(rectCol);
  rect(rect1_x, rect1_y, rect1_w, rect1_h);

  fill(rectCol);
  rect(rect2_x, rect2_y, rect2_w, rect2_h);

  // creates circle
  fill(circCol);
  circle(circle_x, circle_y, circle_r);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcX"]    = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

  new_letter["arc2X"]    = map(percent, 0, 100, oldObj["arc2X"], newObj["arc2X"]);
  new_letter["arc2Start"]    = map(percent, 0, 100, oldObj["arc2Start"], newObj["arc2Start"]);
  new_letter["arc2End"] = map(percent, 0, 100, oldObj["arc2End"], newObj["arc2End"]);

  new_letter["rect1_x"] = map(percent, 0, 100, oldObj["rect1_x"], newObj["rect1_x"]);
  new_letter["rect1_y"] = map(percent, 0, 100, oldObj["rect1_y"], newObj["rect1_y"]);
  new_letter["rect1_w"] = map(percent, 0, 100, oldObj["rect1_w"], newObj["rect1_w"]);
  new_letter["rect1_h"] = map(percent, 0, 100, oldObj["rect1_h"], newObj["rect1_h"]);

  new_letter["rect2_x"] = map(percent, 0, 100, oldObj["rect2_x"], newObj["rect2_x"]);
  new_letter["rect2_y"] = map(percent, 0, 100, oldObj["rect2_y"], newObj["rect2_y"]);
  new_letter["rect2_w"] = map(percent, 0, 100, oldObj["rect2_w"], newObj["rect2_w"]);
  new_letter["rect2_h"] = map(percent, 0, 100, oldObj["rect2_h"], newObj["rect2_h"]);

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
