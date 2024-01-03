function preload() { 
  achtergrondmuziek = loadSound("sounds/muziekje.mp3");
  achtergrondmuziek2 = loadSound("sounds/politieachtervolging.mp3");
  achtergrond = loadImage("afbeeldingen/snelweg.jpg"); 
  politieauto = loadImage("afbeeldingen/politieauto.jpg");
  dievenauto = loadImage("afbeeldingen/dievenauto.jpg");
  tegenligger = loadImage("afbeeldingen/tegenligger.jpg");
  tegenligger2 = loadImage("afbeeldingen/tegenligger2.jpg");
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB,255,255,255,1);
  textFont("Monospace");
  textSize(44);
  textAlign(CENTER,CENTER);  
  frameRate(50);
  spel = new ja();
  spel.nieuwSpel();
  spel.back = achtergrond; 
}

function draw() {
  if (spel.actief && !spel.levelGehaald) {
      spel.update();
  }
  spel.teken();
}

function keyTyped() {
if (!spel.actief && !spel.levelGehaald) {
  spel.actief = true;
  achtergrondmuziek.loop();
  achtergrondmuziek2.loop();
}
if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
  spel.nieuwLevel();
}
if ((spel.afgelopen) && keyCode == 32) {
  achtergrondmuziek.stop();
  achtergrondmuziek2.stop();
  spel.nieuwSpel();
}  
}
