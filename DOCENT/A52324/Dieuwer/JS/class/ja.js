class ja {
  constructor() {
    this.level = null;
    this.maxLevel = 6;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.speler = null;
    this.speler2 = null;
    this.tegenliggers = null;
    this.raak = 0;
    this.back = null;
  }

  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.nieuwLevel();
  }

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
    this.speler = new dief(this.level, dievenauto);
    this.speler2 = new politie(politieauto);
    this.tegenliggers = [];
    for (var v = 0; v <= this.level * 3; v++) {
      this.tegenliggers.push(new tegenliggers(this.level, tegenligger, tegenligger2));
    }
  }

  update() {
    for (var v = 0; v < this.tegenliggers.length; v++) {
      this.tegenliggers[v].beweeg();
      if (this.tegenliggers[v].raakt(this.speler) || this.speler2.raakt(this.speler)) {
        spel.afgelopen = true;
        spel.actief = false;
        this.raak++;
      }

      for (var v = 0; v < this.tegenliggers.length; v++) {
        this.tegenliggers[v].beweeg();
        if (this.tegenliggers[v].raakt(this.speler) || this.tegenliggers[v].raakt(this.speler2) || this.speler2.raakt(this.speler)) {
          spel.afgelopen = true;
          spel.actief = false;
          this.raak++;
        }
        if (this.tegenliggers[v].raakt(this.speler2)) {
          this.levelGehaald = true;
          spel.actief = true;
          spel.afgelopen = false;

        }
      }


    }
    this.speler.beweeg();

    if (this.level >= this.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }

    if (this.speler.x >= canvas.width - 100) {
      this.levelGehaald = true;
    }

    this.speler2.beweeg();

  }



  tekenSpeltoestand() {
    this.speler.teken();
    this.speler2.teken();
    for (var v = 0; v < this.tegenliggers.length; v++) {
      this.tegenliggers[v].teken();
    }
  }



  tekenScorebord() {
    push();
    fill(0, 0, 0, .8);
    noStroke();
    textSize(30);
    var marge = 100;
    image(this.back, 0, 0, 2000, 1000);
    fill(255);
    text(" Level " + this.level, marge, marge, canvas.width - 2 * marge, canvas.height - 2 * marge);
    pop();
  }
 

  

  beginScherm() {
    push();
    noFill();
    stroke(150, 200, 255, .7);
    strokeWeight(5);
    textSize(140);
    text(" Politie en boefje\n(Multiplayer)\n", 0, 0, canvas.width, canvas.height * 2 / 3);
    textSize(32);
    strokeWeight(2);
    fill(0, 0, 0, 0.75);
    text("Nu is het een echt spel. DIEF: Haal de overkant. Ontwijk de politie en zorg ervoor dat je niet crashed. Speel met de pijltjes. POLITIE: Vang de dief, voordat hij de overkant bereikt. Zorg ervoor dat je niet crashed. Speel met WASD.\n\nDruk op een toets om te beginnen.\n", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
    pop();
  }

  levelScherm() {
    push();
    fill(50, 80, 80, .5);
    stroke(150, 200, 255, .7);
    strokeWeight(3);
    text('Gefeliciteerd!\nJe hebt level ' + this.level + ' gehaald, je bent van de politie ontsnapt!\n\nDruk ENTER om naar level ' + (this.level + 1) + ' te gaan.', 0, 0, canvas.width, canvas.height / 2);
    pop();
  }

  eindScherm() {
    var tekst = 'Het spel is afgelopen.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!';
    }
    else {
      tekst += '\nHelaas: je bent af, de politie heeft je te pakken gekregen.';
    }
    push();
    fill(0);
    stroke(100, 75, 50, .8);
    strokeWeight(3);
    text(tekst + '\n\nDruk SPATIE voor nieuw spel.', 0, 0, canvas.width, canvas.height);
    pop();
  }

  teken() {
    background('green');
    if (!this.actief) {
      if (this.afgelopen) {
        this.eindScherm();
      }
      else {
        this.beginScherm();
      }
    }
    else {
      if (this.levelGehaald) {
        this.levelScherm();
      }
      else {

        this.tekenScorebord();
        this.tekenSpeltoestand();
      }
    }
  }
}