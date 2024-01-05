class Enemy {
  constructor() {

    this.width = 75;
    this.height = 75; 
    this.x = random(windowWidth - this.width);
    this.y = random(0, windowHeight / 3);
    this.color = "yellow";
    this.b = 4;
    this.kogels = [];
    this.aantal_punten = null;
    this.enemies = [];
    this.Enemy_image = null;
    this.imageLoaded = false;
    this.preload();
  }

  preload() {
    this.Enemy_image = loadImage('JS/pics/enemy1.jpg', () => {
      this.imageLoaded = true;
    }
    );
  }

  teken() {
    if (this.imageLoaded) {
      image(this.Enemy_image, this.x, this.y, this.width, this.height);
    }
  }


  schiet() {
    var kogelB = new Kogel_B(this.x + this.width / 2, this.y + 0.5 * this.height, p);
    this.kogels.push(kogelB);
  }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// het werkt dit spliced niet aanzitten--------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  toonKogels() {
    for (let n = this.kogels.length - 1; n >= 0; n--) {
      const kogel = this.kogels[n];
      kogel.teken(); 
      kogel.beweeg(); 
  
      if (this.benGeraakt(kogel)) {
        console.log("raak en weg");
        this.kogels.splice(n, 1);
        p.hp-- ;
        console.log('rrrrrrrrrrrrrr')
          if (p.hp <= 0) {
             enemies.splice(0, enemies.length);
            game.actief = false;
            game.afgelopen = true;
        }
      }
    }
  }


benGeraakt(kogel) {
  if (kogel.x > p.x && kogel.x < p.x + p.width && kogel.y > p.y && kogel.y < p.y + p.height) {
    console.log("raak")
      return true;
    }
    return false;
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// het werkt dit spliced niet aanzitten--------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Enemy_C extends Enemy {
  constructor() {
    super();
    this.color = 'green';
    this.imageLoaded = false;
    this.preload();
  }

  preload() {
    this.Enemy_image = loadImage('JS/pics/enemy2.jpg', () => {
      this.imageLoaded = true;
    });
  }

  teken() {
    if (this.imageLoaded) {
      image(this.Enemy_image, this.x, this.y, this.width, this.height);
    }
  }



  schiet() {
    var kogelVoor = new Kogel_C(this.x + this.width / 2, this.y + 0.5 * this.height);
    this.kogels.push(kogelVoor);
  }
}



  class Enemy_D extends Enemy {
    constructor() {
      super();
      this.color = 'white';
      this.imageLoaded = false;
      this.preload();
    }
  
    preload() {
      this.Enemy_image = loadImage('JS/pics/enemy3.jpg', () => {
        this.imageLoaded = true;
      });
    }


    teken() {
      if (this.imageLoaded) {
        image(this.Enemy_image, this.x, this.y, this.width, this.height);
      }
    }

  schiet() {
    var kogelVoor = new Kogel_C(this.x + this.width / 2, this.y + 0.5 * this.height);
    this.kogels.push(kogelVoor);

    var kogelR = new Kogel_R_schuin(this.x + this.width / 2, this.y + 0.5 * this.height);
    console.log(kogelR)
    this.kogels.push(kogelR);
    
    var kogelL = new Kogel_L_schuin(this.x + this.width / 2, this.y + 0.5 * this.height);
    console.log(kogelL)
    this.kogels.push(kogelL);
  }
}

class Enemy_shotgun extends Enemy {
  constructor() {
    super();
    this.color = 'blue';
    this.imageLoaded = false;
    this.preload();
  }

  preload() {
    this.Enemy_image = loadImage('JS/pics/enemy4.jpg', () => {
      this.imageLoaded = true;
    });
  }

  teken() {
    if (this.imageLoaded) {
      image(this.Enemy_image, this.x, this.y, this.width, this.height);
    }
  }

  schiet() {
    for(let n = 0; n < 4; n++ ){
      var kogelschotgun = new kogel_schotgun(this.x + this.width / 2, this.y + 0.5 * this.height, p);
      this.kogels.push(kogelschotgun);
    }  
  }
}