 
    
    function preload() {
 
  
      achtergrond = loadImage("assets/achtergrond.jpg");
      achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
      schot = loadSound("sounds/schot.ogg");
  }

    function setup() {
      canvas = createCanvas(1900,980);
      canvas.parent('processing');
      colorMode(RGB,255,255,255,1);
      textFont("Monospace");
      textSize(44);
      textAlign(CENTER,CENTER);  
 
      achtergrondmuziek.play();

    }
    
    function draw() {
      schot.play();
      if (schot.isPlaying()) {
        background('green');
      }
    }
  
  
    