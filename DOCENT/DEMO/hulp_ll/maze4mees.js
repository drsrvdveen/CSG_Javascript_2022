let instructieTekst = "Maze voor Mees";


/*  **********************************************************
    **                 BEGIN klasse Speler                    **
    ********************************************************** */


    class Speler {
        constructor(g) {
            this.x = 0;
            this.y = 0;
            this.l = g;
            this.positie = 0;
        this.schaal = 0.75
        //   this.x = g * (1 - this.schaal)/2;
        //   this.y = g * (1 - this.schaal)/2;
        //   this.l = g * this.schaal;

          this.kleur = 'orange';
        }

        beweeg(patroon,Nr,Nk) {
          var huidigePositie = this.positie;
          var gewenstePositie = null;
          if (keyCode == LEFT_ARROW) {
            gewenstePositie = huidigePositie - 1;
            if (patroon[gewenstePositie] != 0 && gewenstePositie >= 0) {
              this.x -= this.l;
              this.positie = gewenstePositie;
            }
          }
          if (keyCode == RIGHT_ARROW) {
            gewenstePositie = huidigePositie + 1;
            if (patroon[gewenstePositie] != 0) {
              this.x += this.l;
              this.positie = gewenstePositie;
            }
          }
          if (keyCode == UP_ARROW) {
            gewenstePositie = huidigePositie - Nk;
            if (patroon[gewenstePositie] != 0) {
              this.y -= this.l;
              this.positie = gewenstePositie;
            }
          }
          if (keyCode == DOWN_ARROW) {
            gewenstePositie = huidigePositie + Nk;
            if (patroon[gewenstePositie] != 0) {
              this.y += this.l;
              this.positie = gewenstePositie;
            }
          }

          this.x = constrain(this.x,0,canvas.width);
          this.y = constrain(this.y,0,canvas.height - this.l);

          if (patroon[this.positie] == 2) {
            // banaan
            // oplossen binnen de if van de move omdat je de richting wilt weten
            // en dan met een while: zolang je geen muur tegenkomt
          }

          keyCode = null;
        }     
      
        aangeraakt(x,y) {
          if (dist(x,y,this.x + this.l/2,this.y + this.l/2) < this.l / 3) {
            return true;
          }
          else {
            return false;
          }
        }
      
        teken() {
            push();
            noStroke();
            fill(this.kleur);
            ellipse(this.x + this.l / 2,this.y + this.l / 2,this.l * this.schaal);
            pop();
        }
      
      }
      /*  **********************************************************
          **      EINDE klasse Speler         BEGIN klasse Cel      **
          ********************************************************** */
      
      
      class Cel {
        constructor(x,y,l) {
          this.x = x;
          this.y = y;
          this.l = l;
          this.kleur = 0;
        }
    
        teken() {
          push();
          fill(this.kleur);
          //noStroke();
          strokeWeight(2);
          rect(this.x,this.y,this.l,this.l);
          pop();
        }
      }
      
      /*  **********************************************************
          **      EINDE klasse Cel        BEGIN klasse Racer      **
          ********************************************************** */
      
      
      class Glijba_na_an {
        constructor(speler,patroon,grootte) {
          this.Nrij = null;
          this.Nkolom = null;
          this.patroon = patroon;
          this.parcours = this.maakParcours(patroon,grootte);
          this.speler = speler;
          this.actief = false;
          this.afgelopen = false;
        }
      
        maakParcours(patroon,grootte) {
          var rooster = [];
          this.Nrij = canvas.height / grootte;
          this.Nkolom = canvas.width / grootte;
          for (var rij = 0; rij < this.Nrij; rij++) {
            for (var kolom = 0; kolom < this.Nkolom; kolom++) {
              rooster.push(new Cel(kolom*grootte,rij*grootte,grootte));
            }
          }
          for (var c = 0; c < rooster.length; c++) {
            if (patroon[c] == 1) {
              rooster[c].kleur = 255;
            }
            if (patroon[c] == 2) {
                rooster[c].kleur = 'yellow';
              }
          }
          return rooster;
        }

        update() {
            this.speler.beweeg(this.patroon,this.Nrij,this.Nkolom);
        }
      
        beginScherm() {
          push();
          fill(0);
          text("Dit is een simpel Race-spel. Bestuur je Speler met het touchscreen.\n\nBegin het spel door het scherm aan te raken.",0,0,canvas.width,canvas.height)
          pop();
        }
      
        eindScherm() {
          push();
          fill('yellow');
          stroke('red');
          strokeWeight(10);
          rect(canvas.width/7,canvas.height/3,canvas.width*5/7,canvas.height/3);
          fill(0);
          noStroke();
          if (spel.speler.x == canvas.width) {
            text("GEFELICITEERD!",0,0,canvas.width,canvas.height);
          }
          else {
            text("HELAAS: je bent AF.",0,0,canvas.width,canvas.height);
          }
          pop();
        }
      
        teken() {
          background(200);
          textSize(40);
          fill('white');
          if (!this.actief) {
            this.beginScherm();
          }
          else {
            for (var r = 0; r < this.parcours.length; r++) {
              this.parcours[r].teken();
            }
            this.speler.teken();
            if (this.afgelopen) {
              this.eindScherm();
            }
          }
        }
      }
      
      /*  **********************************************************
          **      EINDE klasse Racer     BEGIN hoofdprogramma     **
          ********************************************************** */
      
      
      var rooster = [];
      var patroon = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,
                     1,1,0,1,2,1,0,0,0,0,1,1,1,0,
                     1,1,1,1,0,1,0,1,1,1,1,0,1,0,
                     0,0,0,0,0,1,0,1,1,0,0,1,1,0,
                     0,1,1,1,0,1,0,1,1,0,0,1,0,0,
                     0,1,0,1,1,1,0,1,1,1,0,1,0,0,
                     0,1,0,0,0,0,0,0,0,1,0,1,1,1,
                     0,1,1,1,1,1,2,1,1,1,0,1,1,0];
      
      var grootte = 50;
      
      function setup() {
        // initialisatie      
        canvas = createCanvas(700,400);
        canvas.parent('processing');
        frameRate(2);
        textFont("Monospace");
        textSize(20);
        textAlign(CENTER,CENTER);
        fill('black');
        speler = new Speler(grootte);
        spel = new Glijba_na_an(speler,patroon,grootte);
        spel.teken();
      }

      function draw() {
        spel.update();
        spel.teken();
      }
      
      function keyTyped() {
        if (!spel.actief) {
          spel.actief = true;
          spel.teken();
        }
        if (spel.afgelopen) {
          setup();
        }
        return false;
      }
      
      /*  **********************************************************
          **               EINDE hoofdprogramma                   **
          ********************************************************** */