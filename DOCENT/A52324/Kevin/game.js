var p;
var enemies = [];
var begin = true;
var afgelopen = false;

var level = 1;
var benodigde_punten_lv = 5;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('processing');
  p = new Man();
  frameRate(60); 
  }

function draw() {
  update(); 
  teken();
  if (begin === false && afgelopen === false) {
    background('orange');
    
    p.teken();
    p.beweeg();
    p.toonKogels();

    for (var i = 0; i < enemies.length; i++) {
      enemies[i].teken();
      enemies[i].toonKogels();

      
    }
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

