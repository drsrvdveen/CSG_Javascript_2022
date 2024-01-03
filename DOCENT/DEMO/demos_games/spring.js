var instructieTekst = "Springen";

class Piraat {
    // attributen
    constructor() {
        this.x = random(150,width - 150);
        this.y = random(150,height - 150);
        this.vy = 5;
        this.ay = 3;
        this.sprite = null;
        this.straal = 25;
        this.kleur = 255;
    }

    //methodes
    beweeg() {
        this.vy += this.ay;
        this.y += this.vy;
        if (this.y > canvas.height - this.straal) {
            this.y = canvas.height - this.straal;
            this. v = 0;
        }
    }

    spring() {
        this.vy = -40;
    }

    teken() {
        fill(this.kleur);
        ellipse(this.x,this.y,2*this.straal);
    }
}

function preload() {
  pirate = loadImage("../images/sprites/pirate.svg");
  padvinder = loadImage("../images/sprites/padvinder.png");
}

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  frameRate(10);
  p1 = new Piraat();
}

function draw() {
    background('whitesmoke');
    p1.beweeg();
    p1.teken();
}

function keyReleased() {
    if (keyCode == UP_ARROW && p1.y == canvas.height - p1.straal) {
      p1.spring();
    }
    return false;
  }