var instructieTekst = "uitleg functies";

var invoer;

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    fill('whitesmoke');    
}

function draw() {
    background('silver');
    invoer = mouseX - width / 2;
    tekenIets(invoer);
    fill(0);
    // text("invoer = "+invoer+" uitvoer = "+berekenIets(invoer),25,25);
    text("invoer = "+invoer+" uitvoer = ",25,25);
    textSize(25);
}




function tekenIets(invoer) {
    push();
    translate(width/2,height/2);
    stroke('lightgreen');
    strokeWeight(5);
    fill('green');
    ellipse(0,0,invoer*2);
    pop();
}

function berekenIets(invoer) {
    var uitvoer = invoer*invoer;
    return uitvoer;
}