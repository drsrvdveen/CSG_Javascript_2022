var instructieTekst = "problemen met geluid";

function preload() {
    achtergrondmuziek = loadSound("game_muziek_1.mp3");
  }

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    fill('whitesmoke');
}

function draw() {
    background('silver');
    if (key >= 'a' && key <= 'z') {
        achtergrondmuziek.loop();
        noStroke();
        fill('green');
        ellipse(width/2,height/2,350);
      }
}