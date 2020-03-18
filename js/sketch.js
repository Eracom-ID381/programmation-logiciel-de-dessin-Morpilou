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
      stroke(0); // black color
      if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY)
      }
      break;
    case 67: // key C (for 'clear')

      clear();
      background(0);
      keyCode = 0;

      break;
    case 76: // key L (for 'line')

      if (mouseIsPressed === true) {
        rainbow(line(mouseX, mouseY, pmouseX, pmouseY));
      }

      break;
    case 82: // key R (for 'rectangle')

      if (mouseIsPressed === true) {
        rainbow(rect(mouseX, mouseY, 55, 55));
      }

      break;
    default:
      if (mouseIsPressed === true) {
        rainbow(point(mouseX, mouseY));
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


function rainbow(brush) {
  // Rainbow dots
  strokeWeight(size);
  colorMode(HSL, 360);
  stroke(hue, 200, 200); // Red color
  fill(hue, 200, 200); // Red color

  // change the hue of the brush
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  brush;
}

// preload the song
function preload() {
  song = loadSound('song/rick-astley-never-gonna-give-you-up-video.mp3');
}


function mousePressed() {
  if (!song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.play(); // .play() will resume from .pause() position
  }
}

function mouseReleased() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}