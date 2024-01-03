class tegenliggers {
    constructor(l,t,a) {
        this.x = canvas.width - 100;
        this.y = random(100,canvas.height - 100);
        this.d = 70;
        this.v = 3 + random (3*l);
        this.breedte = 50;
        this.hoogte = 60;
        this.kleur = 'blue';
        if (random(100) > 50) {
            this.sprite3 = t;
        }
        else {
            this.sprite3 = a;
        }

        
    }
  
    beweeg() {
      this.x -= this.v;
      this.y = constrain(this.y,150,height - 145);
    }
  
    raakt(s) {
        if (dist(this.x,this.y,s.x,s.y) <= (this.d + s.d) / 2) {
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
        image(this.sprite3,this.x,this.y,this.d,this.breedte,this.hoogte);
        pop();
    }
  }