var instructieTekst = "Inleiding van object naar klasse";

class Piraat {
    // attributen
    constructor() {
        this.x = random(150,width - 150);
        this.y = random(150,height - 150);
        this.sprite = null;
    }

    //methodes
    beweeg() {
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    teken() {
        image(this.sprite,this.x,this.y,150,150);
    }
}

var piraat = {
 // attribuut
 x: 75,
 y: 50,
 sprite: null,

 // methode
 beweeg() {
    this.x += random(-5,5);
    this.y += random(-5,5);
 },
 teken() {
    image(this.sprite,this.x,this.y,150,150);
 }
};

function preload() {
  pirate = loadImage("../images/sprites/pirate.svg");
  padvinder = loadImage("../images/sprites/padvinder.png");
}

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  piraat.sprite = pirate;
  frameRate(10);
}

function draw() {
    background('whitesmoke');
    piraat.beweeg();
    piraat.teken();
}