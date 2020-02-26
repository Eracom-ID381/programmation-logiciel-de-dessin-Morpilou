function setup() {
  createCanvas(windowWidth, windowWidth);
  background(0);
  noStroke();
}

function draw() {
  stroke(255);
  strokeWeight(10);
  smooth();

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}