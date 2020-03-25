let hue;
let size = 10;
let button;

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
    case 49: // key 1 (line)

      if (mouseIsPressed === true) {
        rainbow(line(mouseX, mouseY, pmouseX, pmouseY));
      }

      break;
    case 50: // key 2 (square)

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

function help() {
  document.getElementById("text").classList.toggle("text-none");
}





// preload the song
function preload() {
  song = loadSound('song/rick-astley-never-gonna-give-you-up-video.mp3');
}


// when mouse is pressed
function mousePressed() {
  // if the song is not playing
  if (!song.isPlaying()) {
    song.play(); // play the song
  }
}

// when mouse is released
function mouseReleased() {
  // if the song is playing
  if (song.isPlaying()) {
    song.pause(); // pause the song
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}