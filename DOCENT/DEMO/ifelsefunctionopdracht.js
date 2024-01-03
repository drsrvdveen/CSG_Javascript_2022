var instructieTekst = "oefenopdracht if-else en functies";


var stap = 0;
var diameter = 50;

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    noStroke();
    background('silver');
    frameRate(1);
}

function draw() {
    translate(diameter/8*stap,height/2);
    tekenRing(diameter);
    stap++;
    diameter *= 1.25;
    if (stap == 9) {
        noLoop();
    }
}

function tekenRing(d) {
    var factor = 0.53;
    push();
    noStroke();
    fill('dodgerblue');
    ellipse(0,0,d);
    fill('silver');
    ellipse(0,0,0.75*d);
    fill('gold');
    translate(-factor*d/2,-factor*d/2);
    rect(0,0,factor*d);
    pop();
}