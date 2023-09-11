var instructieTekst = "uitleg for-loop && push() en pop()";

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
    background('silver');
    translate(0,height/2);
    // for-loop
    for (var x = 0; x < 5 ; x++ ) {
        // wat moet er gebeuren
        translate(50,0);
        tekenIets();
    }


}

function tekenIets() {
    push();
    noStroke();
    fill('deeppink');
    ellipse(0,0,40);
    translate(0,10);
    fill('hotpink');
    ellipse(0,0,30);
    translate(0,10);
    fill('pink');
    ellipse(0,0,20);    
    pop();
}


/*
    for (var nummer = 0; nummer < 8; nummer++) {
        translate(50,0);
        tekenIets();
    }
*/