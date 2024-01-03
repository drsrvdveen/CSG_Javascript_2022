var instructieTekst = "systeemvariabelen, push(), pop() && translate";

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    textFont("Segoe");
    textSize(20);
    noStroke();
    //noLoop();
}

// BEGINSITUATIE
function draw() {
    background('silver');
    text("vensterGrootte: " + windowWidth + " x " + windowHeight + " | " + "canvasGrootte: " + width + " x " + height,5,15);
    push();
    fill('gold');
    ellipse(width / 4,height / 3,50);
    ellipse(width* 3/4,height / 3,50);
    pop();

    // muis: zet noLoop uit voor muis en verrassende letters
    fill('red');
    ellipse(mouseX,mouseY,10);
}

// BEGINSITUATIE
// function draw() {
//     background('silver');
//     text("vensterGrootte: " + windowWidth + " x " + windowHeight + " | " + "canvasGrootte: " + width + " x " + height,5,15);
//     push();
//     fill('gold');
//     ellipse(width / 4,height / 3,50);
//     ellipse(width* 3/4,height / 3,50);
//     pop();

//     // muis: zet noLoop uit voor muis en verrassende letters
//     fill('red');
//     ellipse(mouseX,mouseY,10);
// }

// EINDSITUATIE
// function draw() {
//     background('silver');
//     text("vensterGrootte: " + windowWidth + " x " + windowHeight + " | " + "canvasGrootte: " + width + " x " + height,5,15);
//     push();
//     fill('gold');
//     ellipse(width / 4,height / 3,50);
//     translate(width / 2,0);
//     // wissel pop() naar deze regel
//     ellipse(width / 4,height / 3,50);
//     pop();

//     // muis: zet noLoop uit voor muis en verrassende letters
//     fill('red');
//     ellipse(mouseX,mouseY,10);
// }