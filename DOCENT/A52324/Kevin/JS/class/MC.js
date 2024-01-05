
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
    this.level = 1;
    this.schietCooldown = false;
    this.hp = 0;
    this.benodigde_punten_lv = 5;
    this.image = null;
    this.imageLoaded = false;
    this.preload();
  }

  preload() {
    this.image = loadImage('JS/pics/MC.jpg', () => {
      this.imageLoaded = true;
    });
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

    if (this.imageLoaded) {
      image(this.image, this.x, this.y, this.width, this.height);
    }

    this.tekenScoreBord();
    pop();
  }

  
//===============================================================================================

schiet() {
  if (keyIsPressed && keyCode == 32 && !this.schietCooldown) {
    this.kogels.push(new Kogel(this.x + this.width / 2, this.y + 0.5 * this.height));
    this.schietCooldown = true;
    setTimeout(() => {
      this.schietCooldown = false;
    }, 200);
  }
}


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
          if (this.score >= this.benodigde_punten_lv) {
            this.level++;
            this.benodigde_punten_lv *= 2;
            console.log("Level:", this.level, "bebodigd:", this.benodigde_punten_lv);
          }
          // ------------------------------------------------------
        }
      }
    }
  }

  //=============================================================================================
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

  tekenScoreBord() {
    push();
    fill(255, 255, 255, 0.5);
    rect(0, 0, windowWidth / 9, windowHeight / 10);
    fill('black');
    textSize(30);
    text("level " + this.level, 10, 30); 
    text("score " + this.score * 100, 10, 60); 
    text("hp " + this.hp, 10, 90);  
    pop();
  }
}