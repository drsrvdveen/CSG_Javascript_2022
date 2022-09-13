var instructieTekst = "blanco";

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
    //background('silver');

    var uitkomst=10
    for (var a=0; a<5; a++) {
      if (uitkomst>a ) {
        uitkomst-=a;
      }
    }
    text(uitkomst,50,50);
  
  
}