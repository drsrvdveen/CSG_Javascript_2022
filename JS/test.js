class Bal {
  constructor() {
    this.x = 60;
    this.y = 60;
    this.r = 50;
    this.v = 0;
    this.kleur = 50;
    this.aanHetRollen = false;
  }

  rol() {
    if (this.aanHetRollen) {
      this.x += this.v;
      this.v *= 0.97;
      if (this.v < 1) {
        this.aanHetRollen = false;
      }
    }
  }

  teken() {
    push();
    noStroke();
    fill(this.kleur + 15*this.v);
    ellipse(this.x,this.y,this.r);
    pop();
  }
}

function setup() {
  canvas = createCanvas(900,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
  noStroke();
  b = new Bal();
}

function draw() {
  background(220);
  b.rol();
  b.teken();
  if (frameCount == 100) {
    b.v = 20;
    b.aanHetRollen = true;
  }
}