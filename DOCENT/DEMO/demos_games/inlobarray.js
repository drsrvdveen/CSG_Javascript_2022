var instructieTekst = "Inleiding objectnotatie (gebruik console)";

class Piraat {
  constructor(s) {
    this.x = random(0,canvas.width - 5);
    this.y = random(0,canvas.height - 5);
    this.sprite = s;
  }

 beweeg() {
    this.x += random(-5,5);
    this.y += random(-5,5);
 }

 teken() {
    image(this.sprite,this.x,this.y);
 }
}


function preload() {
  sprite = loadImage("../images/sprites/pirate.svg");
}

var aantal = 10;
var piratenLijst = [];

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  // piraat = new Piraat();
  // piraat.sprite = sprite;

  for (var p = 0; p < aantal;p++) {
    piratenLijst.push(new Piraat(sprite));
  }
  frameRate(2);
}

function draw() {
    background('green');
    // piraat.beweeg();
    // piraat.teken();
    for (var p = 0; p < aantal;p++) {
      piratenLijst[p].beweeg();
      piratenLijst[p].teken();
    }    
}