var instructieTekst = "eindopdracht";
// In de code staan vragen gemarkeerd.
// Beantwoord deze vragen op een antwoordblad (of in Word).

var doelX; // x-positie van het doel
var doelY; // y-positie van het doel
var doelD; // diameter van he doel

var laserX; // x-positie van het kanon
var laserY; // y-positie van het kanon

var geschoten = false; // houdt bij of er net geschoten is

var wachtTijd; // variabele die bepaalt hoe snel het doel van plek wisselt
var score; // hoe vaak je raak geschoten hebt

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    background('silver');
    frameRate = 50;
    wachtTijd = 5 * frameRate;
    score = 0;
    doelD = 50;
    // [vraag 1] zie regel 26: Welke waarden kan doelX aannemen?
    doelX = beweegDoel(doelD);
    doelY = round(10 + doelD / 2);
}

function draw() {
    background('silver');
    // [vraag 2] zie regel 34: Onderzoek wanneer beweegDoel wordt uitgevoerd.
    // Ofwel: wanneer geeft de formule tussen de haakjes van de if true als antwoord?
    if (frameCount % wachtTijd == 0) {
        doelX = beweegDoel(doelD);
    }
    // [vraag 3] zie regel 39: Beschrijf met een Nederlandse zin
    // welke voorwaarde er tussen de haakjes van de if staat.
    if (mouseIsPressed && !geschoten) {
        laserX = mouseX;
        laserY = height - 50;
        geschoten = true;
    }
    if (laserY < 0) {
        laserY = height - 50;
        geschoten = false;        
    }
    if (laserY <= doelY - doelD / 2 && laserX > doelX - doelD / 2 && laserX < doelX + doelD / 2) {
        score++;
        doelD -= 5;
        wachtTijd *= 0.5;
        // [vraag 4] zie regel 54: Verklaar dat de programmeur in deze
        // regel (opnieuw) de functie beweegDoel aanroept.
        doelX = beweegDoel(doelD);
    }
    if (geschoten) {
        laserY = beweeglaser(laserY);
        // [vraag 5] zie de functies die aangeroepen wordt in regel 60, 62 en 63:
        // Bij de tekenfuncties worden push() en pop() gebruikt. Beschrijf hun werking.
        tekenlaser(laserX,laserY);
    }
    tekenDoel(doelX,doelY,doelD);
    tekenKanon(mouseX);

    text("score: "+score,5,10);
    // [vraag 6] zie regel 68: Verklaar waarom de programmeur
    // het spel stopt bij een score van 10.
    if (score == 10) {
        background('gold');
        textSize(40);
        // [vraag 7] zie regel 72: Zoek uit wat de betekenis van \n is.
        text("GEFELICITEERD! \n\nJe tijd was "+ frameCount / frameRate +" s\nDruk op F5",40,height / 2);
        // [vraag 7a] zie regel 75: Wat betekent noLoop;
        // [vraag 7b] Onderzoek wat er gebeurt als noLoop niet wordt gebruikt.
        noLoop();
    }
    /*  We willen iemand die weinig schoten gebruikt extra belonen.
        [vraag 8a] Maak een nieuwe variabele aan zorg dat hierin het aantal schoten wordt bijgehouden.
        [vraag 8b] Zorg dat op het eindscherm als eindscore de gebruikte tijd minus het aantal schoten wordt weergegeven.

        [vraag 9] Tijd over? Bedenk zelf een leuke extra aanpassing op dit spelletje. Suggesties:
        a) je hebt maximaal 15 schoten.
        b) Je mag alleen schieten als je muis zich ter hoogte van het kanon bevindt)
        c) Het doel en de achtergrond krijgen na elk raak schot een andere kleur
        d) Het doel is geen saaie cirkel, maar een wat meer vormgegeven cirkel / poppetje
        e) Gebruik een herhaling en de random-functie om de achtergrond spannender te maken.
    */
}

function beweegDoel(diameter) {
    x = round(random(10 + diameter / 2,width - diameter / 2 - 10));
    return x;
}

function tekenDoel(x,y,diameter) {
    push();
    noStroke();
    fill('indianred');
    ellipse(x,y,diameter);
    pop();
}

function tekenKanon(x) {
    var breedte = 10;
    push();
    fill('dodgerblue');
    rect(x - breedte / 2, height - 50, breedte, 40);
    pop();
}

function beweeglaser(y) {
    return y - 25;
}

function tekenlaser(x,y) {
    push();
    noStroke();
    fill('darkred');
    rect(x - 1,y,2,height - 50 - y);
    pop();
}