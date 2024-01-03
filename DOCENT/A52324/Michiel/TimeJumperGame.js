var flessen = new Array();
var benGeraaktGeraakt = false;
var muurGeraaktGeraakt = false;
var VijandGeraakt = false;

class Pers {
    constructor(x) {
      this.x = 0;
      this.y = 0;
      this.stap = 5;
      this.personage = x;
      this.personage_width = 75;
      this.personage_height = 100;
      this.flessen = [];
      this.flessen.length = null;
      this.vijanden = [];
   }
  
   beweeg() {
      if (keyIsDown(LEFT_ARROW)){
        console.log('Links');
        this.x -= 20*this.stap;
      }
      if (keyIsDown(RIGHT_ARROW)) {
         console.log('Rechts');
         this.x += 20*this.stap;
      }    
      if (keyIsDown(UP_ARROW)) {
        console.log('boven');
        this.y -= 20*this.stap;
      }
      if (keyIsDown(DOWN_ARROW)) {
         console.log('beneden');
        this.y += 20*this.stap;
      }
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,0,canvas.height - this.stap);
      // this.x = constrain(this.x,0,canvas.width);
      // this.y = constrain(this.y,0,canvas.height);
      // this.x = constrain(this.x,-20,canvas.width);
      // this.y = constrain(this.y,-90,canvas.height);
   }  

   paktfles() {
    for (var b = 0; b < 10 ; b++) {
      if (this.flessen.x == this.x && this.flessen.y == this.y) {
        return true;
      }
    }
  }
  gepakt() {
    for (var c = 0; c < this.vijanden.length ; c++) {
      if (this.vijanden.x == this.x && this.flessen.y == this.y) {
          return true;
      }
    }
  }  

   toon() {
     image(this.personage, this.x, this.y, this.personage_width,this.personage_height);
   }
}

class Fles {
   constructor(s) {
      this.x = floor(random(100, 1000));
      this.y =  floor(random(100, 1000));
      this.fles_width = 75;
      this.fles_height = 10;
      this.sprite = s;
   }
    toon() {
      image(this.sprite, this.x - this.fles_width, this.y - this.fles_height, 75,100);
    }

//  benGeraakt(Persoon) {
  
//      if (Persoon.x + Persoon.personage_width >= this.x && p.x + 2*Persoon.personage_width < this.x + this.width  &&  Persoon.y + Persoon.personage_height > this.y && Persoon.y + Persoon.personage_height < this.y + this.heigth) {
//       // Persoon.x + Persoon.personage_width >= this.x && p.x + 2*Persoon.personage_width < this.x + this.width  &&  Persoon.y + Persoon.personage_height > this.y && Persoon.y + Persoon.personage_height < this.y + this.heigth
//       console.log("deez nuts");
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
}

class Vijand {
  constructor(s) {
    this.x =floor (random(10, 2000));
    this.y = floor(random(10, 1000));
    this.vijand_width = 50;
    this.vijand_heigth = 50;
    this.sprite = s;
    this.stap = 5;
  }
  toon() {
    image(this.sprite, this.x - this.vijand_width, this.y - this.vijand_heigth , this.vijand_width, this.vijand_heigth);
  }

  beweeg() {
    this.x += floor(random(-19, 20));
    this.y -= floor(random(-19, 20));
 
    this.x = constrain(this.x,0,canvas.width);
    this.y = constrain(this.y,0,canvas.height);
    this.x = constrain(this.x,-20,canvas.width);
    this.y = constrain(this.y,-90,canvas.height);
 } 


  // VijandGeraakt(Persoon) {
  //   if (Persoon.x + Persoon.personage_width >= this.x && Persoon.x + 2*Persoon.personage_width < this.x + this.vijand_width && Persoon.y + Persoon.personage_height > this.y - Persoon.personage_width && Persoon.x + Persoon.personage_height < this.y + this.vijand_heigth) {
  //     console.log("deez bals");
  //     this.VijandGeraakt = true;
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
 }


// class Einddoel {
//   constructor() {
//   this.x = 550;
//   this.y = 550;
//   this.width = 150;
//   this.heigth = 150;
//   this.kleur = 'orange';
//   }
//       teken() {
//         fill('orange');
//         rect(this.x,this.y,this.width,this.heigth);
//         // push();
//         // noStroke();
//         // textFont("Courier");
//         // textAlign(CENTER,CENTER);
//         // textSize(20);
//         // background('steelblue');
//         // fill('white');
//         // text("skdjhvjkrbdgvksjhgsd")
// }
//   muurGeraakt(p) {
//   if (p.x + p.personage_width >= this.x && p.x + 2*p.personage_width < this.x + this.width  &&  p.y + p.personage_height > this.y && p.y + p.personage_height < this.y + this.heigth) {
//     this.kleur = 'red';
//     return true;
//    }
//   else {
//     this.kleur = 'green';
//     return false;    
//   }
//   }
// }
class Game {
  constructor() {
    this.flessen = null;
    this.vijanden = null;
    this.Nflessen = 40;
    this.Nvijanden = 20;
    this.level = 1;
    this.score = 0;
    // this.personage = null;
    this.actief = false;
    this.afgelopen = false;
    this.gewonnen = false;
  }

  nieuw() {
    this.flessen = [];
    this.maakFlessen();
    this.vijanden = [];
    this.maakVijanden();
    this.personage = new Pers(marie);
     this.personage.beweeg();
     this.personage.toon();
   
   //this.flessen = new Fles(fles);
    // this.muur = new Einddoel();
    this.tegenstander = new Vijand(vijand);
    this.gewonnen = false;
    this.verloren = false;
    this.afgelopen = false;
  }

  maakFlessen() {
    for (var b = 0; b < this.flessen.length; b++) {
       if(!this.flessen[b]) {
        console.log('fles');
        continue;
     }
     this.flessen.push(new Fles(fles));
     }
    
  }

  maakVijanden() {
    for (var c = 0; c < 20 ; c++) { 
      this.vijanden.push(new Vijand(vijand));
      }
  }
  nieuwLevel() {
    this.personage.paktfles = 0;
    this.level++;
    this.Nvijanden*2;
    this.platforms = [];
    this.vijanden.push(new Vijand(vijand));
    for (var c = 0; c < 20 ; c++) { 
      this.vijanden.push(new Vijand(vijand));
      }
    }
    // if (this.level>this.maxLevel) {
    //     this.afgelopen = true;
    //     this.gewonnen = true;
    //     this.actief = false;
    // }
    // else {
    //     this.levelGehaald = false;
    // }
  

  update() {
    if (this.personage.gepakt()) {
      this.afgelopen = true;
    }
    for (var b = 0;b < 10;b++) {
      if(this.flessen.length.x == this.x && this.flessen.length.y == this.y) {
          this.score++;
      }
      }
    }
      // if (this.speler.paktfles = true) {
      //   this.score++;
    // if (personagepaktfles) {
    //   this.afgelopen = true;
    // } 
    // if (this.personage.x == canvas.width);
    //   this.gewonnen = true;
    //   spel.nieuwLevel;
    // }
   
  beginScherm() {
    push();
    fill("red");
    stroke(100,75,50,.8);
    strokeWeight(5);
    textSize(100);
    text(" Super Mario Heeft Dorst",0,0,canvas.width,canvas.height / 2);
    textSize(32);
    strokeWeight(2);
    fill("orange");
    text("\n\n\n\nGebruik de pijltjestoetsen om te bewegen\nen pak de sprite flessen om je dorst te lessen.\nMaar pas op: je moet de vijanden ontwijken. Wordt je geraakt, dan ben je af.\n\nDruk op een toets om te beginnen.\n",0,0,canvas.width,canvas.height * 2 / 3);
    pop();
  }
  
  eindScherm() {
    var tekst = 'Helaas. Je bent gepakt door de vijand.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!\nJe hebt dit level verslagen';
    }
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst+'\n\nKlik op ENTER om een nieuw spel te beginnen.',0,0,canvas.width,canvas.height);
    pop();
  }    

  tekenScorebord() {
    push();
    fill(175);
    noStroke();
    textSize(16);
    var marge = 10;
    var hoogte = 50;
    var breedte = 100
    rect(canvas.width - marge - breedte,marge,breedte,hoogte);
    fill(25);
    text("Level "+this.level+"\nscore = "+this.personage.score,canvas.width - marge - breedte,marge / 3,breedte,hoogte);   
    pop();
  }
  
  teken() {
    if (!this.actief) {
      this.beginScherm();
    }
    else {
      if (this.afgelopen) {
        this.eindScherm();
      }
      else {
        for (var b = 0;b < this.Nflessen;b++) {
          if (!this.flessen[b]) {
            continue;
          }
          this.flessen[b].toon();
        }
        for (var c = 0; c< this.Nvijanden;c++) {
          this.vijanden[c].toon();
        }
        this.personage.toon();
      }
      this.tekenScorebord();
    }
  }
}

function preload() {
   marie = loadImage("personage.png");
   fles = loadImage("sprite.png");
   vijand = loadImage("Vijand.png");
 }  

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   canvas.parent('processing');
   background('steelblue');
   frameRate(50);
   personage = new Pers(marie);
    personage.beweeg();
    personage.toon();
   flessen = new Fles(fles);
   tegenstander = new Vijand(vijand);
  spel = new Game();
  spel.nieuw();
  spel.teken(); 
  //  for (var b = 0; b < 10 ; b++) {
  //   spel.flessen.push(new Fles(fles));
  //  }
  //   for (var c = 0; c < 20 ; c++) { 
  //   spel.vijanden.push(new Vijand(vijand));
  //   }
   
}

function draw() {
  background('steelblue');
  // if (muur.muurGeraakt(personage) == true) {
  //   background ('yellow');
  // }
  // else {
  //   background('steelblue');
  // }
  // a.tekenfles();
  // a.tekenvijanden();
  //  personage.beweeg();
  //  personage.toon();
  //  muur.teken();
  if (frameCount % 5 == 0) {
    for (var v = 0; v < spel.Nvijanden;v++) {
      spel.vijanden[v].beweeg();
    }
  }
  spel.update();
  spel.teken();
}  

function keyTyped() {
  if (!spel.actief) {
    spel.actief = true;
    spel.teken();
  }
  else {
    if (spel.afgelopen && keyCode == ENTER) {
      spel.nieuw();
      spel.teken();
    }
  }

}

function keyReleased() {
  if (spel.actief && (keyCode == RIGHT_ARROW || keyCode == UP_ARROW || keyCode == DOWN_ARROW || keyCode == LEFT_ARROW)) {
    spel.personage.beweeg();
  }
  return false;
}
  // tekenfles(Persoon) {
  //   for (var b = 0; b < this.flessen.length ; b++) {
  //     if (this.flessen[b].x == Persoon.x && this.flessen[b].y == Persoon.y) {

  //     }
  //   }
  //   if (flessen.benGeraakt = true) {
  //     console.log('fels')  
  //     // background('yellow');
  //   }
  //   // else {

  //   // }
  // }
  // tekenvijanden() {
  //   for (var c = 0; c < this.vijanden.length ; c++) {
  //     this.vijanden[c].toon();
  //     this.vijanden[c].beweeg();
  //   }
  // }