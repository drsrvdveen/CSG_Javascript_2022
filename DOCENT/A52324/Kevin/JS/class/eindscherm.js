var begin = true;
var afgelopen = false;
var begin_knop, knop_M, knop_N, knop_H, knop_T;
var gekozen_moei = 2;

function update() {
  if (keyCode === 81 /* q */) {
    console.log("q");
    begin = false;
  }
  if (keyCode === 87 /* w */) {
    console.log("w");
    afgelopen === true;
  }
}



  function beginScherm() {
    push();
    background("pink");
    pop();

    begin_knop = new Knop();
    knop_M = new Knop_Makkelijk();
    knop_N = new knop_normale();
    knop_H = new knop_hard();

    begin_knop.teken();
    knop_M.teken();
    knop_N.teken();
    knop_H.teken();

}

function eindScherm() {
  push();
  background("brouwn");
  pop(); 

  knop_T = new knop_try();
  knop_T.teken();
}

function teken() {
  textFont("Monospace");
  textSize(20);
  push();
  fill('white');

  if (begin === true) {
    beginScherm();
  } else if (afgelopen === true) {
    eindScherm();
  } 

  pop();
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function mousePressed() {
  if (mouseX > begin_knop.x && mouseX < begin_knop.x + begin_knop.breedte && mouseY > begin_knop.y && mouseY < begin_knop.y + begin_knop.hoogte) {
    console.log("begin");
    afgelopen = false;
    begin = false;

  }
  if (mouseX > knop_M.x && mouseX < knop_M.x + knop_M.breedte && mouseY > knop_M.y && mouseY < knop_M.y + knop_M.hoogte) {
    console.log("M");
    gekozen_moei = 2;

  }
  if (mouseX > knop_N.x && mouseX < knop_N.x + knop_N.breedte && mouseY > knop_N.y && mouseY < knop_N.y + knop_N.hoogte) {
    console.log("N");
    gekozen_moei = 3;

  }
  if (mouseX > knop_H.x && mouseX < knop_H.x + knop_H.breedte && mouseY > knop_H.y && mouseY < knop_H.y + knop_H.hoogte) {
    console.log("H");
    gekozen_moei = 4;
  }

  if (knop_T && mouseX > knop_T.x && mouseX < knop_T.x + knop_T.breedte && mouseY > knop_T.y && mouseY < knop_T.y + knop_T.hoogte) {
    console.log("Try Again");
    begin = true;
    afgelopen = false;
  }
}

class Knop {
  constructor() {
    this.hoogte = windowHeight / 5.5;
    this.breedte = windowWidth / 5;
    this.x = windowWidth / 2 - this.breedte / 2; 
    this.y = windowHeight / 1.5 - this.hoogte /2 ;
    this.kleur = 'purple'; 
    this.tekst_begin_knop_Kleur = "white";
  }

  teken() {
    push();
    fill(this.kleur); // doet knop zelf
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.tekst_begin_knop_Kleur); // doet texst
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("start game", this.x + this.breedte / 2, this.y + this.hoogte / 2);
    pop();
  }
}

class Knop_Makkelijk extends Knop {
  constructor() {
    super(); 
    this.fill = "green";
    this.x = windowWidth / 2 - windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }

  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill); 
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("EASY", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_normale extends Knop{
  constructor() {
    super(); 
    this.fill = "white";
    this.x = windowWidth / 2 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }
  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("NORMAL", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_hard extends Knop{
  constructor() {
    super();  
    this.fill = "red";
    this.x = windowWidth / 2 + windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }
  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("HARD", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_try extends Knop{
  constructor() {
    super();  
    this.fill = "red";
    this.x = windowWidth / 2 - windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 2 - this.hoogte /2 ;
  }
  teken() {
    push();
    fill("black"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("try again", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}