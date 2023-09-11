var instructieTekst = "tekenopdracht met bekijkJS.html";

var zichtbaar = true;

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
  background('white');
  noStroke();
  fill('grey');
  triangle(10,20,430,440,10,440);
  triangle(20,10,440,430,440,10);
  fill('black');
  rect(10,230,210,210);
  rect(230,10,210,210);
  if (zichtbaar) {
    stroke('red');
    line(0,225,450,225);
    line(225,0,225,450);
  }
}

function keyPressed() {
  if (zichtbaar) {
    zichtbaar = false;
  }
  else {
    zichtbaar = true;
  }
}