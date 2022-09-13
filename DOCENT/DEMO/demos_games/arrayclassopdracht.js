var instructieTekst = "oefenopdracht array van class";

class Bal {
    constructor(xinvoer,yinvoer,kleurinvoer) {
        // attribuut
        this.x = xinvoer;
        this.y = yinvoer;
        this.kleur = kleurinvoer;
        this.diameter = 100;
    }

    // methode
    beweeg() {
        if(keyIsDown(DOWN_ARROW)) {
            this.y++;
        }
        if(keyIsDown(UP_ARROW)) {
            this.y--;
        }
        if(keyIsDown(LEFT_ARROW)) {
            this.x--;
        }
        if(keyIsDown(RIGHT_ARROW)) {
            this.x++;
        }               
    }

    teken() {
        fill(this.kleur);
        noStroke();
        ellipse(this.x,this.y,this.diameter);
    }
}

var aantal = 10;
var lijstMetBallen = [];

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  for (var b = 0;b < aantal; b++) {
      lijstMetBallen.push(new Bal(random(50,canvas.width - 50),random(50,canvas.width - 50),'red'));
  }
}

function draw() {
    background(200);
    for (var b = 0;b < aantal; b++) {
        lijstMetBallen[b].beweeg();
        lijstMetBallen[b].teken();
    }
}