var instructieTekst = "arrays en objecteigenschappen";

var hoogteLijst = new Array(312,78,192,425); // new Array('Jan','Piet');

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    fill('gold');
    noStroke();
    frameRate(1);
}

function draw() {
    background('silver');
    for (var i = 0;i < hoogteLijst.length;i++) {
        rect(0,0,90,hoogteLijst[i]);
        translate(120,0);
    }
    hoogteLijst.shift();
    hoogteLijst.push(random(10,440));
}



/*
    voeg aan eind toe:
    hoogteLijst.shift();
    hoogteLijst.push(random(10,440));
*/