class Spook {
    constructor(sv,sg,p,N) {
        this.speelVeld =sv;
        this.speelVeldPositie = p;
        this.stapGrootte = sg;
        this.N = N;
        this.x = p % N;
        this.y = (p - this.x) / this.N;
        this.kleur = 'red';
    }

    beweeg() {
        // https://gameinternals.com/understanding-pac-man-ghost-behavior
        // geef als argument this.speler mee && blokkeer nog steeds zwarte blokken
        }

    teken() {
        push();
        noStroke();
        fill(this.kleur);
        ellipse((this.x + 0.5)*this.stapGrootte,(this.y + 0.5)*this.stapGrootte, this.stapGrootte*0.9);
        pop();
    }
}