class dief {
    constructor(l,d) {
        this.x = 230;
        this.y = random(100,canvas.height - 100);
        this.d = 90;
        this.v = 3 + l;
        this.breedte = 60;
        this.hoogte = 48;
        this.kleur = 'red';
        this.sprite2 = d;
    }
  
    beweeg() {
      if(keyIsDown(DOWN_ARROW)) {
          this.y += this.v;
      }
      if(keyIsDown(UP_ARROW)) {
          this.y -= this.v;
      }
      if(keyIsDown(LEFT_ARROW)) {
          this.x -= this.v;
      }
      if(keyIsDown(RIGHT_ARROW)) {
          this.x += this.v;
      }       
      this.x += this.v;

      this.y = constrain(this.y,150,height - 145);

    }


  
    teken() {
        push();
        noStroke();
        fill(this.kleur);
        image(this.sprite2,this.x,this.y,this.d,this.breedte,this.hoogte);
        pop();
    }
  }
  