function setup() {
  canvas = createCanvas(675,475);
  canvas.parent('processing');
  frameRate(5);
  textSize(400);
  noStroke();
}

var klikLijst = [];
// var opgave = ['P','B','G','P','R'];
var opgave = ['P'];
var beurtComputer = true;

let task_done = false;
let last_done = 0;
let i = 0;

const delay = 1000; //ms

function draw() {
  if (beurtComputer) {
    if(!task_done) {
      background('silver');
      text(opgave[i],50,350);
      task_done = true;
      i++;
      last_done = millis();
    }
    else {
      if(millis() - last_done > delay) {
        task_done = false;
      }
    }
    if (i == opgave.length + 1) {
      beurtComputer = false;
    }
  }
  else {
    // teken rode knop
    if (mouseX > 25 && mouseX < 225 && mouseY > 25 && mouseY < 225) {
      fill('indianred');
      if (mouseIsPressed) {
        klikLijst.push('R');
        i = 0;
        beurtComputer = true;
      }
    }
    else {
      fill('red');
    }
    rect(25,25,200);
    // teken groene knop
    if (mouseX > 250 && mouseX < 450 && mouseY > 25 && mouseY < 225) {
      fill('darkgreen');
      if (mouseIsPressed) {
        klikLijst.push('G');
        i = 0;
        beurtComputer = true;
      }
    }
    else {
      fill('green');
    }
    rect(250,25,200);
    // teken blauwe knop
    if (mouseX > 25 && mouseX < 225 && mouseY > 250 && mouseY < 450) {
      fill('blue');
      if (mouseIsPressed) {
        klikLijst.push('B');
        i = 0;
        beurtComputer = true;
      }
    }
    else {
      fill('dodgerblue');
    }
    rect(25,250,200);
    // teken paarse knop
    if (mouseX > 250 && mouseX < 450 && mouseY > 250 && mouseY < 450) {
      fill('purple');
      if (mouseIsPressed) {
        klikLijst.push('P');
        i = 0;
        beurtComputer = true;
      }
    }
    else {
      fill('violet');
    }
    rect(250,250,200);
  }
}