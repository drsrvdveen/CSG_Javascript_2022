class Paddle {
  constructor(isPlayer) {
    this.width = 10;
    this.height = 80;
    this.isPlayer = isPlayer;
    this.y = height / 2 - this.height / 2;
    this.x = isPlayer ? 10 : width - 20;
    this.speed = isPlayer ? 8 : 5; 
    this.powerUpActive = false;
    this.powerUpDuration = 2000; 
    this.powerUpStartTime = 0;
  }

  move() {
    if (this.isPlayer) {
      if (keyIsDown(UP_ARROW) && this.y > 0) {
        this.y -= this.speed;
      }
      if (keyIsDown(DOWN_ARROW) && this.y < height - this.height) {
        this.y += this.speed;
      }
    } else {
      //bron: https://cratecode.com/info/p5js-easing-functions
      const targetY = ball.y - this.height / 2;
      this.y = lerp(this.y, targetY, botDifficulty);

      
      let adjustedBotSpeed = map(ballSpeed, 5, 10, 0.2, 0.6);

      
      if (level === 2) {
        adjustedBotSpeed *= 0.8; 
      } else if (level === 3) {
        adjustedBotSpeed *= 0.6; 
      }

      this.speed = adjustedBotSpeed;
    }

   
    if (keyIsDown(88) && this.isPlayer) { 
      this.activatePowerUp();
    }
    this.updatePowerUp();
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
//bron: https://stackoverflow.com/questions/33635069/how-to-check-collision-with-player-and-ball
  checkCollision(ball) {
    if (
      ball.x + ball.size / 2 > this.x &&
      ball.x - ball.size / 2 < this.x + this.width &&
      ball.y + ball.size / 2 > this.y &&
      ball.y - ball.size / 2 < this.y + this.height
    ) {
      ball.xSpeed *= -1.1; 
    }
  }
  

  activatePowerUp() {
    this.powerUpActive = true;
    this.powerUpStartTime = millis(); 
    this.height = 120; 
  }
//bron: https://discussions.unity.com/t/c-trying-to-make-a-powerup-timer/211512
  updatePowerUp() {
    if (this.powerUpActive) {
      const elapsedTime = millis() - this.powerUpStartTime;
      if (elapsedTime > this.powerUpDuration) {
        this.powerUpActive = false;
        this.height = 80; 
      }
    }
  }
}
