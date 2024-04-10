class Happer {
    constructor(sv,sg,p,N) {
        this.speelVeld =sv;
        this.speelVeldPositie = p;
        this.stapGrootte = sg;
        this.N = N;
        this.x = p % N;
        this.y = (p - this.x) / this.N;
        this.kleur = 'gold';
    }

    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
            if (this.x != 0 && this.speelVeld[this.speelVeldPositie - 1] != 1) {
                this.x--;
                this.speelVeldPositie--;
            }
          }
          if (keyIsDown(RIGHT_ARROW)) {
            if ((this.x + 1) % this.N != 0 && this.speelVeld[this.speelVeldPositie + 1] != 1) {
                this.x++;
                this.speelVeldPositie++;
            }
          }
          if (keyIsDown(UP_ARROW)) {
            if (this.y != 0 && this.speelVeld[this.speelVeldPositie - this.N] != 1) {
                this.y--;
                this.speelVeldPositie-=this.N;
            }
          }
          if (keyIsDown(DOWN_ARROW)) {
            if (this.y != this.N && this.speelVeld[this.speelVeldPositie + this.N] != 1) {
                this.y++;
                this.speelVeldPositie+=this.N;
            }
          }
        }

    teken() {
        push();
        noStroke();
        fill(this.kleur);
        ellipse((this.x + 0.5)*this.stapGrootte,(this.y + 0.5)*this.stapGrootte, this.stapGrootte*0.9);
        pop();
    }
}