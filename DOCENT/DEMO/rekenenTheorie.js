var instructieTekst = "voorbeeld: rekensom met loop";

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    textSize(40);
    noLoop();
}

function draw() {
  background('#EEEEEE');
  //functie_1();
  functie_2();
}

function functie_1() {
  var uitkomst = 0;
  for (var n = 0; n < 5; n++) {
    uitkomst = uitkomst + n*n;
    if (uitkomst > 10) {
      uitkomst = uitkomst -10;
    }
    text("n = " + n + " uitkomst = "+uitkomst, 50, (n+1)*50);
  }
}




function functie_2() {
  var uitkomst = 20;
  for (var n = 1; n <= 6; n++) {
    uitkomst = uitkomst / 2 + n;
    uitkomst = round(uitkomst);
    text("n = " + n + " uitkomst = "+uitkomst, 50, (n+1)*50);
  }
}