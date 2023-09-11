class Boot {
    constructor(y,kleur,schaal,lengte,snelheid) {
        // hier komen alle eigenschappen van het object
        // beginnend met this. om aan te duiden dat ze van hem zelf zijn
        this.x = -1*lengte;
        this.y = y - 1;
        this.kleur = kleur;
        this.lengte = lengte;
        this.breedte = 1;
        this.schaal = schaal;
        this.snelheid = snelheid;
    }

    vaar() {
        if (frameCount % this.snelheid == 0) {
            this.x++;
        }
        if (this.x * this.schaal >= canvas.width) {
            this.x = -1*this.lengte;
        }
    }

    teken() {
        push();
        fill(this.kleur);
        rect(this.x*this.schaal,this.y*this.schaal,this.lengte*this.schaal,this.breedte*this.schaal);
        pop();
    }
}

class Raster {
    constructor(grootte) {
        // hier komen alle eigenschappen van het object
        // beginnend met this. om aan te duiden dat ze van hem zelf zijn
        this.hokjesGrootte = grootte;
        this.aantalKolommen = canvas.width / this.hokjesGrootte;
        this.aantalRijen = canvas.height / this.hokjesGrootte;
    }

    // vervolgens kun je functies koppelen aan het object
    // het object kan daarna dingen "doen" met deze methodes
    teken() {
        push();
        noFill();
        stroke(200);
        for (var rij = 0; rij < this.aantalRijen; rij++) {
            for (var kolom = 0; kolom < this.aantalKolommen; kolom++) {
                rect(kolom*this.hokjesGrootte,rij*this.hokjesGrootte,this.hokjesGrootte);
            }
        }
        pop();
    }
}

var schaal = 50;
var botenLijst = [];

function setup() {
// initialisatie      
    canvas = createCanvas(700,400);
    canvas.parent('processing');
    frameRate(20);
    textFont("Monospace");
    textSize(20);
    textAlign(CENTER,CENTER);
    fill('black');
    r1 = new Raster(schaal); // we maken een OBJECT r1 op basis van de KLASSE raster
    // b1 = new Boot(4,'orange',schaal,3,4);
    // b2 = new Boot(5,'whitesmoke',schaal,2,2);
    // b3 = new Boot(7,'dodgerblue',schaal,4,8);
    for (var b = 1; b <= canvas.height / schaal; b++) {
        botenLijst.push(new Boot(b,'orange',schaal,floor(random(2,8)),floor(random(1,8))));
    }
}

function draw() {
    background('darkblue');
    r1.teken(); // het object r1 wordt gevraagd zichzelf te tekenen
    // b1.vaar();
    // b1.teken();
    // b2.vaar();
    // b2.teken();
    // b3.vaar();
    // b3.teken();
    for (var b = 0; b < canvas.height / schaal; b++) {
        botenLijst[b].vaar();
        botenLijst[b].teken();
    }
}