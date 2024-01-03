var enemies;
var score;
var HP = 5;
var afgelopen = false;

class Man {
  constructor() {
    this.score = 0; 
    this.x = windowWidth / 2;
    this.y = windowHeight / 1.2;
    this.width = 100;
    this.height = 100;
    this.color = "red";
    this.b = 10;
    this.kogels = [];
    this.enemies = [];
  }



  beweeg() {
    if (keyIsPressed) {
      if (key === 'ArrowLeft') {
        this.x -= this.b;
      }
      if (key === 'ArrowRight') {
        this.x += this.b;
      }
    }
    this.x = constrain(this.x, 0, windowWidth - this.width);
  }

  teken() {
    push();
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  schiet() {
    if (keyCode == 32) {
      this.kogels.push(new Kogel(this.x + this.width / 2, this.y + 0.5 * this.height));
    }
  }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// het werkt dit spliced niet aanzitten--------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  toonKogels() {
    for (let n = this.kogels.length - 1; n >= 0; n--) {
      const kogel = this.kogels[n];
      kogel.teken(); 
      kogel.beweeg(); 
  
      for (let i = 0; i < enemies.length; i++) {
        if (this.benGeraakt(kogel, enemies[i])) {
          console.log("raak en weg");
          this.kogels.splice(n, 1);
          enemies.splice(i, 1);

          // ------------------------------------------------------level berekekeningen
          if (this.score >= benodigde_punten_lv) {
            level++;
            benodigde_punten_lv * 2;
            console.log("Level:", level, "bebodigd:", benodigde_punten_lv);
          }
          // ------------------------------------------------------
        }
      }
    }
  }

  benGeraakt(kogel, enemy) {
    if (
      kogel.x > enemy.x && kogel.x < enemy.x + enemy.width && kogel.y > enemy.y && kogel.y < enemy.y + enemy.height
    ) {
      this.score++;
      console.log("da score cheker", this.score);
      return true;
    }
    return false;
  }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// het werkt dit spliced niet aanzitten--------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (HP <= 0) {
  afgelopen = true;
}

function keyPressed() {
  p.schiet();
}
