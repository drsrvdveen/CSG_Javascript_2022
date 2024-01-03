function preload() {
    gorgor = loadImage("afbeeldings/gorgor.png");
    jungle = loadImage("afbeeldings/boomacher.jpg");
    ufooo1 = loadImage("afbeeldings/ufo1.png");
    ufooo2 = loadImage("afbeeldings/ufo2.png");
    ufooo3 = loadImage("afbeeldings/ufo3.png");


}

function setup() {
    noCursor();
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('processing');
    gorilla1= new Gorilla(gorgor);
    ufo11= new Ufo1();
    ufo21= new Ufo2();
    ufo31= new Ufo3();
    frameRate(60);
    spel= new Levels(jungle);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    spel.teken()
}
