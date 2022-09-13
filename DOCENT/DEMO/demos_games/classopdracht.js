var instructieTekst = "oefenopdracht class";

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

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  b1 = new Bal(200,200,'red');
  b2 = new Bal(250,250,'green');
  b3 = new Bal(300,300,'blue');
}

function draw() {
    background(200);
    b1.beweeg();
    b2.beweeg();
    b3.beweeg();
    b1.teken();
    b2.teken();
    b3.teken();
}