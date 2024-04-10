class Pacman {
    constructor(g) {
        this.N = 9;
        this.speelVeld =[1,1,1,1,1,1,1,1,1,
                         1,0,0,0,0,0,0,0,1,
                         1,1,1,1,0,0,0,0,1,
                         1,0,0,0,0,0,0,0,1,
                         1,0,0,0,1,1,0,0,1,
                         1,0,0,0,0,1,0,0,1,
                         1,0,0,0,0,1,0,0,1,
                         1,0,0,0,0,0,0,0,1,
                         1,1,1,1,1,1,1,1,1];
        this.celGrootte = g / this.N;
        this.speler = new Happer(this.speelVeld,this.celGrootte,23,this.N);
        this.spook = new Spook(this.speelVeld,this.celGrootte,34,this.N);
    }

    update() {
        this.speler.beweeg();
        this.spook.beweeg();
    }

    tekenVeld() {
        background(100);
        var celTeller = 0;
            for (var kolom = 0; kolom < this.N;kolom++) {
            for (var rij = 0; rij < this.N;rij++) {
                if (this.speelVeld[celTeller] == 1) {
                    fill(0);
                }
                else {
                    fill(255);
                }
                rect(this.celGrootte*rij,this.celGrootte*kolom,this.celGrootte,this.celGrootte);
                celTeller++;
            }
        }
    }

    teken() {
        this.tekenVeld();
        this.speler.teken();
        this.spook.teken();
    }
}