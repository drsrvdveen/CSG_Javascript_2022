class Levels {
  constructor() {
  this.level = null;
  this.maxLevel = 1;
  this.actief = null;
  this.levelGehaald = null;
  this.afgelopen = null;
  this.awint = null;
  this.bwint = null;
  this.alfa = 0.5;
  this.aantaldoelpuntena = 0;
  this.aantaldoelpuntenb = 0;
  this.xbal = 0.5*canvas.width;
  this.ybal=850
  this.xgoala = 0.05*canvas.width;
  this.ygoala = 555
  this.xgoalb = 0.95*canvas.width - 300; 
  this.ygoalb = 550
  this.xspelera = 0.25*canvas.width;
  this.yspelera = 735
  this.xspelerb = 0.75*canvas.width - 150; 
  this.yspelerb = 735
  this.snelheid = 50
  this.speed = 50
  this.energie = 50
  this.energy = 50
}

nieuwSpel() {
  this.level = 0;
  this.actief = false;
  this.awint = false;
  this.bwint = false;
  this.afgelopen = false;
  this.aantaldoelpuntena = 0; 
  this.aantaldoelpuntenb = 0;
  this.nieuwLevel();
}

nieuwLevel() {
  this.level++;
  this.levelGehaald = false;
}

update() {
  this.alfa += random(-3,3) / 100;
  if (this.alfa <= 0 || this.alfa >=1) {
      this.alfa = 0.5;
  }
}

weetikveel(){
    this.xbal += this.snelheid
}
geenflauwidee(){
  this.xbal -= this.speed
}
laatstepoging(){
  this.xbal -= this.energie
}
weetikveel(){
  this.xbal += this.snelheid
}
geenflauwidee(){
this.xbal -= this.speed
}
hatsa(){
this.xbal += this.energy
}


rollenbal(){
  if (this.snelheid > 0 ) {
    this.snelheid -= 3;
  }

}
balrolt(){
  if (this.speed > 0 ) {
    this.speed -= 3;
  }
  
}
balaanrollen(){
  if (this.energie > 0 ) {
    this.energie -= 3;
  }
  
}
balaanhetrollen(){
  if (this.energy > 0 ) {
    this.energy -= 3;
  }
  
}

tekenDoel() {
  rect(this.xgoalb,this.ygoalb,300) 
}
tekenBal() {
  ellipse(this.xbal,this.ybal,50)
 }
 tekenSpelera() {
  rect(this.xspelera,this.yspelera,150) 
}

spelerBbeweeg()  {
  if (keyIsDown(LEFT_ARROW) && this.xspelerb >= this.xgoala + 150) {
    this.xspelerb -= 20;
    
  }
  if (keyIsDown(RIGHT_ARROW)&& this.xspelerb <= this.xgoalb ) {
    this.xspelerb += 20;
   
  }
  if (keyIsDown(UP_ARROW) && this.yspelerb == 735) {
    this.yspelerb -= 120;
  }
  if (this.yspelerb < 735) {
    this.yspelerb += 20;
   
  }
}

spelerAbeweeg()  {
  if (keyIsDown(65) && this.xspelera >= this.xgoala + 150) {
    this.xspelera -= 20;
   
  }
  if (keyIsDown(68)&& this.xspelera <= this.xgoalb) {
    this.xspelera += 20;
  }
  if (keyIsDown(87) && this.yspelera == 735) {
    this.yspelera -= 120;

  }
  if (this.yspelera < 735) {
    this.yspelera += 20;
    
   
  }

}
balBeweeg() {
  if (keyIsDown(68) && this.xbal >= this.xspelera && this.ybal == 850 && this.xbal <= this.xspelera + 45 && this.yspelera == 735) {
    this.xbal += 20;
  
    
  }
  if (keyIsDown(LEFT_ARROW) && this.xbal <= this.xspelerb && this.ybal == 850  && this.xbal >= this.xspelerb - 20 && this.yspelerb == 735) {
    this.xbal -= 20;
    
  }
  if (keyIsDown (70) && this.xbal >= this.xspelera && this.ybal == 850 && this.yspelera == 735 && this.xbal <= this.xspelera + 60   ) {
    if (this.snelheid == 0 || this.snelheid == -1){
      this.snelheid = 50;
    }
    this.rollenbal();
   
    if(this.snelheid > 1 ){
      this.weetikveel();
    
  }

}
else {

if (this.snelheid < 49 && this.snelheid > 1) {
  this.weetikveel();
  this.snelheid -= 3
  if(this.xspelerb <= this.xbal && this.xspelerb + 50 >= this.xbal && this.ybal == 850 && this.yspelerb == 735){
    this.ybal = 850
    this.xbal = this.xspelerb
    this.snelheid = 0
   }
  
}

}
if (keyIsDown (76) && this.xbal <= this.xspelerb && this.ybal == 850 && this.yspelerb == 735 && this.xbal >= this.xspelerb - 40   ) {
  if (this.speed == 0 || this.speed == -1){
    this.speed = 50;
  }
  this.balrolt();
  
  if(this.speed > 1 ){
    this.geenflauwidee();
  
}

}
else {

if (this.speed < 49 && this.speed > 1) {
this.geenflauwidee();
this.speed -= 3
if(this.xspelera <= this.xbal && this.xspelera + 50 >= this.xbal && this.ybal == 850 && this.yspelera == 735){
  this.ybal = 850
  this.xbal = this.xspelera
  this.speed = 0
 }
}
}
if (keyIsDown (75) && this.xbal <= this.xspelerb && this.ybal == 850 && this.yspelerb == 735 && this.xbal >= this.xspelerb - 40   ) {
  if (this.energie == 0 || this.energie == -1){
    this.energie = 50;
  }
  this.balaanrollen();
  
  if(this.energie > 1 ){
    this.laatstepoging();
    this.ybal -= 300
}

}
else {

if (this.energie < 49 && this.energie > 1) {
this.ybal += 18.75
this.laatstepoging();
this.energie -= 3
if(this.xspelera <= this.xbal && this.xspelera + 50 >= this.xbal && this.ybal  <= this.yspelera + 150 && this.yspelera <= this.ybal){
  this.ybal = 850
  this.xbal = this.xspelera
  this.energie = 0
 }
}
}
if (keyIsDown (71) && this.xbal >= this.xspelera && this.ybal == 850 && this.yspelera == 735 && this.xbal <= this.xspelera + 60   ) {
  if (this.energy == 0 || this.energy == -1){
    this.energy = 50;
  }
  this.balaanhetrollen();
  if(this.energy > 1 ){
    this.hatsa();
    this.ybal -= 300
  
}

}
else {

if (this.energy < 49 && this.energy > 1) {
  this.ybal += 18.75
this.hatsa();
this.energy -= 3
if(this.xspelerb <= this.xbal && this.xspelerb + 50 >= this.xbal && this.ybal  <= this.yspelerb + 150 && this.yspelerb <= this.ybal){
  this.ybal = 850
  this.xbal = this.xspelerb
  this.energy = 0
 }

}
}
}
doelpunt() {
if (this.xbal <= this.xgoala + 300 && this.ybal >= this.ygoala) {
  this.xbal = 0.5*canvas.width;
  this.aantaldoelpuntena += 1;
  this.xspelera = 0.25*canvas.width;
  this.xspelerb = 0.75*canvas.width - 150;
  this.snelheid = 50
  this.speed = 50
  this.energie = 50
  this.energy = 50
  this.ybal = 850
  juichen.play();
 }
 if (this.xbal >= this.xgoalb && this.ybal >= this.ygoalb) {
  this.aantaldoelpuntenb += 1;
  this.xbal = 0.5*canvas.width;
  this.xspelera = 0.25*canvas.width;
  this.xspelerb = 0.75*canvas.width - 150;
  this.snelheid = 50
  this.speed = 50
  this.energie = 50
  this.energy = 50
  this.ybal = 850
  juichen.play();
  
 }
}


tekenScorebord() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  fill(255);;
  text("\nscoor als eerste 5 doelpunten om het spel te winnen.",marge,marge,canvas.width - 2 * marge,100);  
  text("\nscore = "+ this.aantaldoelpuntenb,100,100);
  text("\nscore = "+ this.aantaldoelpuntena,canvas.width - 100 ,100);  
  pop();
  this.tekenBal();
  // this.tekenSpelera();
  this.spelerBbeweeg();
  this.spelerAbeweeg();
  this.balBeweeg();
  this.doelpunt();
  
}

beginScherm() {
  push();
 background(achtergrond);
  noFill();
  stroke(100,200,255,.7);
  strokeWeight(5);
  textSize(100);
  fill('white');
  text(" voetbalkoning \n \n \n druk op een toets om te \n beginnen",0,0,canvas.width,canvas.height * 2 / 3);
  textSize(32);
  strokeWeight(2);
  fill('white');
  text("versla je tegenstander en word de voetbalkoning.\n  speler 1 loopt met W A S D en doet een hoog schot met G en een laag schot met F\n speler 2 loopt met de pijltjes en doet een hoog schot met K en een laag schot met L.  ",0,canvas.height * 1 / 4,canvas.width,canvas.height * 1 / 3);
 
  pop();
  
}

 

eindScherm() {
  var tekst = 'Je hebt het gehaald.';
  if (this.aantaldoelpuntena == 5) {
    tekst = 'speler 2 wint!';
  }
  if (this.aantaldoelpuntenb == 5) {
    tekst = 'speler 1 wint';
  }
  push();
  fill(0);
  stroke(100, 75, 50, 0.8);
  strokeWeight(3);
  fill('lightblue')
  text(tekst + '\n\nDruk SPATIE voor nieuw spel.', 0, 0, canvas.width, canvas.height);
  pop();
}

teken() {
  background(achtergrond);
  if (!this.actief) {
      if (this.afgelopen) {
          this.eindScherm();
      }
      else {
          this.beginScherm();
      }
  }
  else {
      if (this.levelGehaald) {
          this.levelScherm();
      }
      else {
          this.tekenScorebord();
      }
  }
}
}

/*  **********************************************************
  **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
  ********************************************************** */


function preload() {
achtergrond = loadImage("assets/Voetbalstadions-scaled.jpg");
doellinks = loadImage("assets/doellinks.png");
doelrechts = loadImage("assets/doelrechts.png");
speler1 = loadImage("assets/spites.png");
speler2 = loadImage("assets/teamrood.png");
achtergrondmuziek = loadSound("assets/achtergrondmuziek.mp3");
juichen = loadSound("assets/juichen.mp3");
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.parent('processing');
colorMode(RGB,255,255,255,1);
textFont("Monospace");
textSize(44);
textAlign(CENTER,CENTER);  
frameRate(10);
breedte = speler1.width;
hoogte = speler1.height;
rij = 0
sBr = breedte / 4;
sHo = hoogte / 2;
br = sBr*4;
ho = sBr*5;
spel = new Levels();
spel.nieuwSpel();
xspelerb = 0.75*canvas.width - 150;
yspelerb = 735;
xspelera = 0.25*canvas.width;
yspelera = 735;
kolom = 0;
rij1 = 0
xgoala = 0.05 * canvas.width;
xgoalb = 0.95 * canvas.width - 300;
ygoala = 550
ygoalb = 550
achtergrondmuziek.loop();
}

function draw() {
if (!spel.actief && !spel.levelGehaald) {
  spel.beginScherm();  
  if (keyIsPressed) {
    spel.actief = true;  
  }
} 
else {
  spel.update();
  spel.teken();
  image(doellinks,xgoala, ygoala, 300, 350);
  image(doelrechts, xgoalb, ygoalb, 300, 350);
  image(speler1,spel.xspelerb - 50,spel.yspelerb,br,ho,(frameCount % 4)*sBr,rij*sHo,sBr,sHo);
  
  if (keyIsDown(LEFT_ARROW) && spel.xspelerb >= 0.05*canvas.width + 150) {
    rij = 0;
    kolom ++;
  }
  if (keyIsDown(RIGHT_ARROW)&& spel.xspelerb <= 0.95*canvas.width - 300 ) {
    rij = 1;
    kolom ++;
  }

  image(speler2,spel.xspelera - 50 ,spel.yspelera,br,ho,(frameCount % 4)*sBr,rij1*sHo,sBr,sHo);
  
  if (keyIsDown(65) && spel.xspelera >= 0.05*canvas.width + 150) {
    rij1 = 0;
    kolom ++;
  }
  if (keyIsDown(68)&& spel.xspelera <= 0.95*canvas.width - 300) {
    rij1 = 1;
    kolom ++;
  }
 
  
}


if (spel.aantaldoelpuntena == 5 || spel.aantaldoelpuntenb == 5) {
  if (spel.actief) {
    spel.levelGehaald = true;
  }
  if (spel.level >= spel.maxLevel) {
    spel.afgelopen = true;
    awint = true;
    spel.actief = false;
  }
}

if (spel.levelGehaald && !spel.afgelopen && keyCode == ENTER) {
  spel.nieuwLevel();
}

if (spel.afgelopen && keyCode == 32) {
  spel.nieuwSpel();
  xspelera = 0.25*canvas.width;
    xspelerb = 0.75*canvas.width - 150;
    xbal = 0.5*canvas.width;
}
}