var p; 
var e1; 
var e2;
var e3;
var e4;

class Enemy {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(0 , windowHeight / 3);
    this.width = 75;
    this.height = 75;
    this.color = "yellow";
    this.b = 4;
    this.kogels = [];
    this.aantal_punten = null;
    this.enemies = [];
  }


  teken() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
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
        HP--;
        console.log("health", HP)
      }
    }
  }


  benGeraakt(kogel) {
    if (kogel.x > p.x && kogel.x < p.x + p.width && kogel.y > p.y && kogel.y < p.y + p.height) {
      console.log("raak");

      return true;
    }
    return false;
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// het werkt dit spliced niet aanzitten--------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Enemy_C extends Enemy{
  constructor(){
    super()
    this.color = 'green';
  }

  teken(){ 
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }

  schiet() {
    var kogelVoor = new Kogel_C(this.x + this.width / 2, this.y + 0.5 * this.height, e2);
    this.kogels.push(kogelVoor);
  }
}


class Enemy_D extends Enemy {
  constructor() {
    super();
    this.color = 'white';
  }

  teken() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height)
  }

  schiet() {
    var kogelVoor = new Kogel_C(this.x + this.width / 2, this.y + 0.5 * this.height, e3);
    this.kogels.push(kogelVoor);

    var kogelR = new Kogel_R_schuin(this.x + this.width / 2, this.y + 0.5 * this.height, e3);
    console.log(kogelR)
    this.kogels.push(kogelR);
    
    var kogelL = new Kogel_L_schuin(this.x + this.width / 2, this.y + 0.5 * this.height, e3);
    console.log(kogelL)
    this.kogels.push(kogelL);
  }
}

class Enemy_shotgun extends Enemy{
  constructor(){
    super()
    this.color = 'blue'; 
    
  }

  teken(){
    fill(this.color); 
    rect(this.x, this.y, this.width , this.height);
  }

  schiet() {
    for(let n = 0; n < 4; n++ ){
      var kogelschotgun = new kogel_schotgun(this.x + this.width / 2, this.y + 0.5 * this.height, p);
      this.kogels.push(kogelschotgun);
    }  
  }
}


//----------------------------------------------------------------------------------------------------------------------------
// spawn----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------


if (begin === false) {

  console.log("Inside if block");
  function AI_schiet() {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].schiet();
    }
  }

  setInterval(function() {
    AI_schiet();
  }, Math.random() * 9000);

  setInterval(function() {
    maak_enemies();
  }, 7000);

  // voor moeilijkheid AI_schiet basis number * this.moeilijkheid



function maak_enemies(){
  console.log(":)");
    for (var i = 0; i < gekozen_moei / 2 /*hoeveel enemies*/ ; i++) {
      for (var n = 1; n <= level /*welke enemies*/; n++) {
        switch (n) {
          case 1:
            enemies.push(new Enemy_C());
            break;
          case 2:
            enemies.push(new Enemy());
            break;
          case 3:
            enemies.push(new Enemy_D());
            break;
          case 4:
            enemies.push(new Enemy_shotgun());
            break;
          default:
        }
      }
    }
  }
}
