var begin_knop, knop_H, knop_M, knop_N, knop_T;
var enemies = [];

class Game {
  constructor() {
    this.begin = true;
    this.afgelopen = false;
    this.actief = false;
    this.enemies = enemies;
    this.gekozen_moei = 3 ;
    this.knop_T = null;
    this.intervalAI = null;
    this.intervalEnemies = null;
    this.begin_knop = new Knop();
    this.knop_M = new Knop_Makkelijk();
    this.knop_N = new knop_normale();
    this.knop_H = new knop_hard();
    this.afgelopen_image = null;
    this.begin_image = null;
    this.catmant_image = null;
  }

  preload() {
    this.afgelopen_image = loadImage('JS/pics/you_died.jpg');
    this.begin_image = loadImage('JS/pics/cathouse.jpg');
    this.catmant_image = loadImage('JS/pics/catmant.jpg');   
  }

  nieuw() {
    this.actief = false;
    this.afgelopen = false;
  }

  BeginScherm() {
    push();
    background(this.begin_image);
    pop();

      this.begin_knop.teken();
      this.knop_M.teken();
      this.knop_N.teken();
      this.knop_H.teken(); 
  }

  eindScherm() {
    push();
    background(this.afgelopen_image);
    pop();

    this.knop_T = new knop_try();
    this.knop_T.teken();
  }

  teken() {
    textFont("Monospace");
    textSize(20);
    push();
    fill('white');

    if (this.begin === true && !this.actief) {
      this.BeginScherm();
    } else if (this.afgelopen === true) {
      this.eindScherm();
    }
    else{
      background(this.catmant_image);
    }

    pop();
  }

//alleen voor testen--------
  update() {
    if (keyCode === 81 /* q */) {
      console.log("q");
      this.begin = false;
      this.actief = true;
    }
    if (keyCode === 87 /* w */) {
      console.log("w");
      this.afgelopen = true;
    }
  }
//-----------------------------


  mousePressed() {
    if (this.begin_knop.clicked() && mouseIsPressed) {
      console.log("S");
      this.begin = false;
      this.actief = true;
      p.score = 0;
      p.level = 1;
      p.hp += 10;
    } else if (this.knop_M.clicked() && mouseIsPressed) {
      console.log("M");
      this.gekozen_moei = 1;
    } else if (this.knop_N.clicked() && mouseIsPressed) {
      console.log("N");
      this.gekozen_moei = 2;
    } else if (this.knop_H.clicked() && mouseIsPressed) {
      console.log("H");
      this.gekozen_moei = 3;
    } else if (this.knop_T && this.knop_T.clicked() && mouseIsPressed) {
      console.log("T");
      this.actief = false;
      this.begin = true;
      this.afgelopen = false;
    }
  }

  //---------------------enemies spawn--------------------------------------------------------------------------------------------------------------------------------------------
  Intervals() {
    this.intervalAI = setInterval(() => {
      this.AI_schiet();
    }, 9000 / (this.gekozen_moei / 2));

    this.intervalEnemies = setInterval(() => {
      this.Maak_enemies();
    }, 10000);
  }

  AI_schiet() {
    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].schiet();
    }
  }

  Maak_enemies() {
    console.log(":)");
    for (var i = 0; i < this.gekozen_moei; i++) {
      for (var n = 1; n <= p.level; n++) {
        switch (n) {
          case 1:
            this.enemies.push(new Enemy_C(this.e1_image));
            break;
          case 2:
            this.enemies.push(new Enemy_shotgun(this.e2_image));
            break;
          case 3:
            this.enemies.push(new Enemy_D(this.e3_image));
            break;
          case 4:
            this.enemies.push(new Enemy(this.e4_image));
            break;
          default:
        }
      }
    }
  }
}
//-----------------------------




class Knop {
  constructor() {
    this.hoogte = windowHeight / 5.5;
    this.breedte = windowWidth / 5;
    this.x = windowWidth / 2 - this.breedte / 2; 
    this.y = windowHeight / 1.5 - this.hoogte /2 ;
    this.kleur = 'purple'; 
    this.tekst_begin_knop_Kleur = "white";
  }

  teken() {
    push();
    fill(this.kleur); // doet knop zelf
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.tekst_begin_knop_Kleur); // doet texst
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("start game", this.x + this.breedte / 2, this.y + this.hoogte / 2);
    pop();
  }

  clicked() {
    return (
      mouseX > this.x && mouseX < this.x + this.breedte && mouseY > this.y && mouseY < this.y + this.hoogte
    );
  }
}


class Knop_Makkelijk extends Knop {
  constructor() {
    super(); 
    this.fill = "green";
    this.x = windowWidth / 2 - windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }

  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill); 
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("EASY", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_normale extends Knop{
  constructor() {
    super(); 
    this.fill = "white";
    this.x = windowWidth / 2 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }
  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("NORMAL", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_hard extends Knop{
  constructor() {
    super();  
    this.fill = "red";
    this.x = windowWidth / 2 + windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 3 - this.hoogte /2 ;
  }
  teken() {
    push();
    fill("grey"); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("HARD", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}

class knop_try extends Knop{
  constructor() {
    super();  
    this.fill = "red";
    this.x = windowWidth / 2 - windowWidth / 3 - this.breedte / 2; 
    this.y = windowHeight / 2 - this.hoogte / 2 ;
  }
  teken() {
    push();
    fill(color(0, 0, 0, 100)); 
    rect(this.x, this.y, this.breedte, this.hoogte);
    fill(this.fill);
    textSize(50); 
    textAlign(CENTER, CENTER);
    text("try again", this.x + this.breedte / 2, this.y + this.hoogte / 2)
    pop();
  }
}