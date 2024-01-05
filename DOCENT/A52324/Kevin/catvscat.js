var p;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('processing');
  p = new Man();
  game = new Game();
  game.Maak_enemies(); 
  game.Intervals();
  game.preload();
  frameRate(60);
}


function draw() {
  game.teken();
  game.update();
  if (game.begin === true || game.afgelopen === true) {
   game.mousePressed(); 
  }
  

  if (game.actief) {
    p.teken();
    p.beweeg();
    p.toonKogels();
    p.schiet();

    for (var i = 0; i < enemies.length; i++) {
      enemies[i].teken();
      enemies[i].toonKogels();
    }
  }
}
