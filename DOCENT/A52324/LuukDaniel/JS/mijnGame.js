let box5 = { x: 2000, y: null, speed: null, direction: null };
class Levels {
  constructor() {
  this.level = null;
  this.maxLevel = 2;
  this.actief = null;
  this.levelGehaald = null;
  this.afgelopen = null;
  this.gewonnen = null;
  this.alfa = 0.5;
  this.alfa = 0.5; 
  this.score = 0;
}

nieuwSpel() {
  this.level = 0;
  this.actief = false;
  this.gewonnen = false;
  this.afgelopen = false; 
  this.nieuwLevel();
  
}

nieuwLevel() {
  if (spel.level>=spel.maxLevel) {
    spel.afgelopen = true;
    spel.gewonnen = true;
    spel.actief = false;
  }  
  this.level++;
  this.levelGehaald = false;
  if (this.level === 2) {
    box5 = { x: 1200, y: 772, speed: 1, direction: -1 };
    for (let i = 0; i < 6; i++) {
      let x = random(200, 1500);
      rijstPositions.push(x);
    }
   
 
  }
   else {
    box5 = { x: 2000, y: 772, speed: 1, direction: -1 };
   }
}

update() {
  this.alfa += random(-3,3) / 100;
  if (this.alfa <= 0 || this.alfa >=1) {
      this.alfa = 0.5;
  }
}


 tekenAnimatie() {
  push();
  noStroke();
  fill(120,130,150,this.alfa);

  pop();
}

tekenScorebord() {
  push();
  textSize(30);

  text(" Dit is Level "+this.level+" \n\n Breng alle rijst naar de sushi bar zonder de monsters te raken.",canvas.width / 2,300);   
  let timerText = "Timer: " + int(millis() / 1000) + "s";
  textSize(44);
  text(timerText, 120, 100);
  text("Aantal Rijst: " + this.score, 150, 50);
  pop();
  
}

beginScherm() {
  push();
  background(startscherm);
 
  pop();
}

levelScherm() {
  push();
  text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald en alle rijst naar de Sushi Bar gebracht!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
  pop();
}   

eindScherm() {
  var tekst = 'Je hebt het gehaald.';
  if (this.gewonnen) {
    tekst = 'Gefeliciteerd! Je krijgt een promotie van de sushi boer';
  }
  push();
  fill(0);
  stroke(100,75,50,.8);
  strokeWeight(3);
  text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
  pop();
}    

doodScherm(){
  var tekst = 'Je hebt het niet gehaald. Je bent ontslagen bij de sushi boer';
  push();
  fill('white');
  rect(0, 0, canvas.width, canvas.height);
  fill('red');

  text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
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
          this.tekenAnimatie();
      }
  }
}

tekenDood(){
  if(speler.geraakt){
    this.doodScherm();
  }
}
}

/*  **********************************************************
  **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
  ********************************************************** */
 
  class Ninja{
  constructor() {
this.animatie = [];
this.animatie0 = [];     
this.animatie1 = [];
this.animatie2 = [];
this.aantalBeeldjes = 8;
this.nummer = 0;
this.nummer2 = 0;
this.x = 0;
this.y = 725
this.achtergrond;
this.spelerlengte = 150;
this.spelerbreedte = 150;
this.ySpeed = 0; 
this.gravity = 1; 
this.jumping = false; 
this.geraakt = false;
this.raakTijd = null;
this.animatie0 = true
this.k = 6;
}

bewegingNinja(){
  if(!this.geraakt){
   if(spel.actief){

   
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 5;
    this.nummer = frameCount % this.aantalBeeldjes;
    image(this.animatie1[this.nummer], this.x, this.y, this.spelerlengte, this.spelerbreedte);
  
  } else if (keyIsDown(RIGHT_ARROW)) {
    this.x += 5;
     this.nummer = frameCount % this.aantalBeeldjes;
    image(this.animatie[this.nummer], this.x, this.y, this.spelerlengte, this.spelerbreedte);
  }

  else {
    this.nummer = floor(0.2 * frameCount) % this.aantalBeeldjes;
    image(this.animatie0[this.nummer], this.x, this.y, this.spelerlengte, this.spelerbreedte);
  }
}
  if (!spel.actief){
    this.nummer = floor(0.2 * frameCount) % this.aantalBeeldjes;
    image(this.animatie0[this.nummer], this.x, this.y, this.spelerlengte, this.spelerbreedte);
  }

}
}
 beweeg() {

  if (keyIsDown(UP_ARROW) && !this.jumping) {
    this.jump();
  }
   
  this.ySpeed += this.gravity;
  this.y += this.ySpeed;

   if (this.y > 725) {
    this.y = 725;
    this.ySpeed = 0;
    this.jumping = false;
  }


  
  if (
    (
      speler.x < box1.x  &&
      speler.x + speler.spelerlengte > box1.x &&
      speler.y < box1.y + 75 &&
      speler.y + speler.spelerbreedte > box1.y
    ) || (
      speler.x < box2.x  &&
      speler.x + speler.spelerlengte > box2.x &&
      speler.y < box2.y + 75 &&
      speler.y + speler.spelerbreedte > box2.y
    ) || (
      speler.x < box3.x  &&
      speler.x + speler.spelerlengte > box3.x &&
      speler.y < box3.y + 75 &&
      speler.y + speler.spelerbreedte > box3.y
    ) || (
      speler.x < box4.x  &&
      speler.x + speler.spelerlengte > box4.x &&
      speler.y < box4.y + 75 &&
      speler.y + speler.spelerbreedte > box4.y
    )
    || (
      speler.x < box5.x  &&
      speler.x + speler.spelerlengte > box5.x &&
      speler.y < box4.y + 75 &&
      speler.y + speler.spelerbreedte > box5.y
    )
    
    && !this.geraakt
  ) 
  {
    
    if (speler.y + speler.spelerbreedte < box1.y || speler.y + speler.spelerbreedte < box2.y || speler.y + speler.spelerbreedte < box3.y || speler.y + speler.spelerbreedte < box4.y || speler.y + speler.spelerbreedte < box5.y) {
      this.geraakt = false;
    } else {
      this.geraakt = true;
      this.raakTijd = frameCount;
    }
  }
  
  


  if (this.geraakt){
    this.nummer2 = floor(0.3 * (frameCount - this.raakTijd));
    if (this.nummer2 > 7) {
      this.nummer2 = 7;
    }
    image(this.animatie2[this.nummer2], this.x, this.y, this.spelerlengte, this.spelerbreedte);
  }
 
  this.x = constrain(this.x, 0, 1716);
  this.y = constrain(this.y, 0, 725);

  if(spel.score <= this.k && speler.x >= 1650 && spel.actief){
  spel.levelGehaald = true;  
  speler.x = constrain(1650, 1716);
  this.k += 6;
  }
}

jump() {
  if (!this.jumping && !this.geraakt) {
    this.ySpeed = -22; 
    this.jumping = true;
  }
}
}


var animatie = [];
var animatie0 = [];
var animatie1 = [];
var animatie2 = [];

function preload() {
for (var b = 0;b<8;b++) {
  nieuw_beeldje = loadImage("Samurai02/02-Run/2D_SM02_Run(" + b + ").png");
  animatie.push(nieuw_beeldje);
}
for (var b = 0;b<8;b++) {
  nieuw_beeldje = loadImage("Samurai02/01-Idle/02-Blinking/2D_SM02_IdleBlink(" + b + ").png");
  animatie0.push(nieuw_beeldje);
}
for (var b = 0;b<8;b++) {
  nieuw_beeldje = loadImage("Samurai02/02-RunL/2D_SM02_RunL(" + b + ").png");
  animatie1.push(nieuw_beeldje);
}
for (var b = 0;b<8;b++) {
  nieuw_beeldje = loadImage("Samurai02/06-Die/2D_SM02_Die(" + b + ").png");
  animatie2.push(nieuw_beeldje);
}

monster = loadImage("assets/monster.png");
achtergrond = loadImage("assets/achtergrond.jpg");
achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
finish = loadImage("assets/finish.png");
rijst = loadImage("assets/kom rijst.png");
dood = loadImage("Samurai02/06-Die/2D_SM02_Die(7).png");
customFont = loadFont('lettertype3.ttf');
startscherm = loadImage("assets/SushiSamurai.jpg");

}

let rijstPositions = [];

function setup() {
canvas = createCanvas(1900,980);
canvas.parent('processing');
colorMode(RGB,255,255,255,1);
textFont("Monospace");
textSize(44);
textAlign(CENTER,CENTER);  
frameRate(50);
textFont(customFont);
spel = new Levels();
spel.nieuwSpel();
speler = new Ninja();
speler.animatie = animatie;
speler.animatie0 = animatie0;
speler.animatie1 = animatie1;
speler.animatie2 = animatie2;
achtergrondmuziek.loop();

let numRijst = 6;
let startX = 200;
let endX = 1500;

for (let i = 0; i < numRijst; i++) {
  let x = random(startX, endX);
  rijstPositions.push(x);

}
}

let box1 = { x: 700, y: 772, speed: 2, direction: 1 };
let box2 = { x: 500, y: 772, speed: 4, direction: -1 };
let box3 = { x: 800, y: 772, speed: 6, direction: 1 };
let box4 = { x: 1000, y: 772, speed: 3, direction: -1 };

function draw() {
background(achtergrond);
spel.update();
spel.teken();
speler.bewegingNinja();
spel.tekenDood();
image(finish, 1635, 654, 250, 250)
for (let i = 0; i < rijstPositions.length; i++) {
  let rijstX = rijstPositions[i];
  let rijstY = 809;
  let rijstSize = 50;
 
  if (
    speler.x < rijstX + rijstSize &&
    speler.x + speler.spelerlengte > rijstX &&
    speler.y < rijstY + rijstSize &&
    speler.y + speler.spelerbreedte > rijstY
  ) {
    rijstPositions.splice(i, 1);
    spel.score++;
  } else {
    image(rijst, rijstX, rijstY, rijstSize, rijstSize);
  }
}

moveBox(box1);
moveBox(box2);
moveBox(box3);
moveBox(box4);
 

drawBox(box1);
drawBox(box2);
drawBox(box3);
drawBox(box4);

moveBox(box5);
drawBox(box5);

speler.beweeg();
}




function moveBox(box) {
box.x += box.speed * box.direction;

  if (box.x <= 190 || box.x >= 1600) {
  box.direction *= -1;
  }
}

function drawBox(box) {
image(monster, box.x, box.y, 75, 75);
}

if (spel.level>=spel.maxLevel) {
  spel.afgelopen = true;
  spel.gewonnen = true;
  spel.actief = false;
}  

function keyTyped() {
if (!spel.actief && !spel.levelGehaald) {
  spel.actief = true;
}
if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
  spel.nieuwLevel();
  speler.x = 20;
}
if ((spel.afgelopen) && keyCode == 32) {
  spel.nieuwSpel();
  rijstPositions = [];
  for (let i = 0; i < 6; i++) {
    let x = random(200, 1500);
    rijstPositions.push(x);
  }
  this.score = 0;
}
if (speler.geraakt == true && keyCode == 32) {
  spel.nieuwSpel();
  speler.geraakt = false;
  speler.x = 0;
  rijstPositions = [];
  for (let i = 0; i < 6; i++) {
    let x = random(200, 1500);
    rijstPositions.push(x);
  }
  spel.score = 0;
}
}



