class Kogel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.verplaatsing = 10;
    this.zijwaartsverplaatsing = 5;
    this.kleur = 'hotpink';
  }

  beweeg() {
    this.y -= this.verplaatsing;
  }

  teken() {
    push();
    stroke('pink');
    fill(this.kleur);
    ellipse(this.x, this.y, this.diameter);
    pop();
  }

benGeraakt(man) {
  if (
    this.x > man.x && this.x < man.x + man.width && this.y > man.y && this.y < man.y + man.height
  ) {
    return true;
  }
  return false;
}
}

class Kogel_B extends Kogel {
  constructor(x, y, man) {
    super(x, y, man );
    this.doelX = man.x  + man.width / 2;
    this.doelY = man.y  + man.height / 2;
    this.man = man;
  }

  beweeg() {
    const deltaX =  this.doelX - this.x;
    const deltaY =  this.doelY  - this.y;

    const hoek = Math.atan2(deltaY, deltaX) ;

    this.x += this.verplaatsing * Math.cos(2 * hoek);
    this.y += this.verplaatsing * Math.sin(2 * hoek);

  }
}
class Kogel_C extends Kogel {
  constructor(x, y, man) {
    super(x, y, man);
  }

  beweeg() {
    this.y += this.verplaatsing;
  }
}

class Kogel_R_schuin extends Kogel {
  constructor(x, y, man) {
    super(x, y, man);
  }

  beweeg() {
    this.x += this.zijwaartsverplaatsing;
    this.y += this.verplaatsing;
  }
}

class Kogel_L_schuin extends Kogel {
  constructor(x, y, man) {
    super(x, y, man);
  }

  beweeg() {
    this.x -= this.zijwaartsverplaatsing;
    this.y += this.verplaatsing;
  }
}

class kogel_schotgun extends Kogel {
  constructor(x, y, man) {
    super(x, y, man);
    this.hoek = random(47, 53);
  }

  beweeg() {
    this.x += this.verplaatsing * Math.cos(this.hoek);
    this.y += this.verplaatsing;
  }
}