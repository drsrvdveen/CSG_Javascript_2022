class politie {
    constructor(p) {
        this.x = 100;
        this.y = random(100,canvas.height - 100);
        this.d = 90;
        this.v = 4;
        this.breedte = 65;
        this.hoogte = 28.2;
        this.kleur = 'green';
        this.sprite = p;
    }
  
    beweeg() {
      if(keyIsDown(83)) {
          this.y += this.v;
      }
      if(keyIsDown(87)) {
          this.y -= this.v;
      }
      if(keyIsDown(65)) {
          this.x -= this.v;
      }
      if(keyIsDown(68)) {
          this.x += this.v;
      }       
      this.x += this.v;
      this.y = constrain(this.y,150,height - 145);
    }

    raakt(i) {
        if (dist(this.x,this.y,i.x,i.y) <= (this.d + i.d) / 2) {
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
        image(this.sprite,this.x,this.y,this.d,this.breedte,this.hoogte);
        pop();
    }
  }