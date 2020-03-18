let hue;
let size = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  hue = 0;
}

function draw() {



  let key = keyCode;
  switch (key) {
    case 69: // key E (for 'eraser')
      strokeWeight(size);
      stroke(0); // Red color
      if (mouseIsPressed === true) {
        point(mouseX, mouseY);
      }
      break;
    case 67: // key C (for 'clear')

      clear();
      background(0);
      keyCode = 0;

      break;
    default:
      // Rainbow dots
      strokeWeight(size);
      colorMode(HSL, 360);
      stroke(hue, 200, 200); // Red color

      // Draw dots if the moise is pressed
      if (mouseIsPressed === true) {
        if (hue > 360) {
          hue = 0;
        } else {
          hue++;
        }
        point(mouseX, mouseY);
      }
  }

}

// scroll up grows the size of the point, scroll down reduces the size of the point
function mouseWheel(event) {
  if (event.deltaY > 0) {
    size = size - 10;
  } else {
    size = size + 10;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}