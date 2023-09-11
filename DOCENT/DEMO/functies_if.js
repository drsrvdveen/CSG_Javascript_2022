var instructieTekst = "uitleg functies return";

var invoer = 4;
var uitvoer;

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    background('lightgreen');
    textSize(40); 
}

function draw() {
    uitvoer = tienPlus(invoer);
    text("invoer: "+invoer+" uitvoer: "+uitvoer,50,50);
    if (groterDanTwaalf(uitvoer)) {
        text("groot",50,150);
    }
}

function groterDanTwaalf(i) {
    if (i > 12) {
        // als het waar is
        return true;
    }
    else {
        // als het NIET waar is
        return false;
    }
}

function tienPlus(i) {
    var uit = 10 + i;
    return uit;
}