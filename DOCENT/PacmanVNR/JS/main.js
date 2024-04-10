function setup() {
  frameRate(5);
  canvas = createCanvas(720,720);
  background('silver');
  canvas.parent('processing');
  spel = new Pacman(width);
}

function draw() {
  spel.update();
  spel.teken();
}