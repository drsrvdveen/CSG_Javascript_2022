class Ball {
  constructor() {
    this.size = 15;
    this.reset();
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.setSpeed(this.levelSpeed);
  }

  isOutOfBounds() {
    return this.x < 0 || this.x > width;
  }

  setSpeed(speed) {
    this.levelSpeed = speed;
    this.xSpeed = random([-speed, speed]);
    this.ySpeed = random([-speed, speed]);
  }
}


