var player;
var bot;
var ball;
var playerScore = 0;
var botScore = 0;
var gameStarted = false;
var fieldImage;
var nederlandFlag, sanMarinoFlag, zwitserlandFlag, brazilieFlag;
var powerUpActive = false;
var powerUpDuration = 3;
var powerUpStartTime;
var botDifficulty = 0.2;
var gameOver = false;
var backgroundMusic;
var level = 1;
var timer = 90;
var opponent = "San Marino"; 
var ballSpeed;

function preload() {
  fieldImage = loadImage('Afbeeldingen/voetbalveld.jpg');
  nederlandFlag = loadImage('Afbeeldingen/nederland.png');
  sanMarinoFlag = loadImage('Afbeeldingen/sanmarino.png');
  zwitserlandFlag = loadImage('Afbeeldingen/zwitserland.png');
  brazilieFlag = loadImage('Afbeeldingen/brazilie.png');
  backgroundMusic = loadSound('sounds/muziek.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Paddle(true);
  bot = new Paddle(false);
  ball = new Ball();
  textAlign(CENTER, CENTER);
  backgroundMusic.setVolume(0.5);
  backgroundMusic.loop();
  setLevelSettings();
}

function draw() {
  if (gameOver) {
    showEndScreen();
  } else if (gameStarted) {
    image(fieldImage, 0, 0, width, height);

    fill(255);
    textSize(32);
    text(playerScore, width / 4, 50);
    text(botScore, (3 * width) / 4, 50);

  
    fill(255);
    textSize(20);
    textAlign(RIGHT);
    text("Nederland", width / 4 - 60, 30);
    text(opponent, (3 * width) / 4 + 50, 30);

    
    image(nederlandFlag, width / 4 - 210, 10, 40, 40);

    //bron: https://www.w3schools.com/js/js_switch.asp
    var flag;
    switch (opponent) {
      case "San Marino":
        flag = sanMarinoFlag;
        break;
      case "Zwitserland":
        flag = zwitserlandFlag;
        break;
      case "Brazilië":
        flag = brazilieFlag;
        break;
      default:
        flag = nederlandFlag;
    }
    image(flag, (3 * width) / 4 + 80, 10, 40, 40);

    text("Tijd: " + timer, width / 2, 30);

    player.move();
    player.show();
    bot.move();
    bot.show();
//bron: http://learn.digitalharbor.org/courses/creative-programming/lessons/using-timers-in-p5-js/
    if (powerUpActive) {
      var elapsedTime = (millis() - powerUpStartTime) / 1000;
      if (elapsedTime < powerUpDuration) {
        player.height = 120;
      } else {
        powerUpActive = false;
        player.height = 80;
      }
    }

    ball.move();
    ball.show();

    player.checkCollision(ball);
    bot.checkCollision(ball);

    if (ball.isOutOfBounds()) {
      if (ball.x < 0) {
        botScore++;
      } else {
        playerScore++;
        botDifficulty += 0.02;
        botDifficulty = min(botDifficulty, 0.5);
      }

      ball.reset();
    }

    //bron: https://editor.p5js.org/denaplesk2/sketches/S1OAhXA-M
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }

    
    if (timer === 0) {
      checkForWinningGoal();
      showEndScreen();
    }

    
    fill(255, 0, 0);
    rect(width - 30, 10, 20, 20);

    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text("X", width - 20, 20);

  } else {
    
    background(0);
    fill(255);
    textSize(30);  
    text("FoetsieBal", width / 2, height / 4 - 30);

    
    textSize(16);
    text("Dit is een simpel voetbalspel.\nBestuur je racket met de pijltjes op je toetsenbord.\nKies een niveau en daag jezelf uit.\nJe vertegenwoordigt het land Nederland.\nTip: gebruik de toets X op je toetsenbord om je paddle te vergroten.\nDit is jouw hulpfunctie.", width / 2, height / 4 + 50);

    
    textSize(20);
    fill(100, 100, 255);
    rect(width / 2 - 100, height / 2 - 50, 200, 40); 
    fill(255);
    text("Makkelijk", width / 2, height / 2 - 30);

    fill(150, 150, 255);
    rect(width / 2 - 100, height / 2 + 10, 200, 40); 
    fill(255);
    text("Gemiddeld", width / 2, height / 2 + 30);

    fill(200, 200, 255);
    rect(width / 2 - 100, height / 2 + 70, 200, 40); 
    fill(255);
    text("Moeilijk", width / 2, height / 2 + 90);
  }
}

function mousePressed() {
  if (!gameStarted && !gameOver) {
    
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
      if (mouseY > height / 2 - 50 && mouseY < height / 2 - 10) {
        level = 1; 
      } else if (mouseY > height / 2 + 10 && mouseY < height / 2 + 50) {
        level = 2; 
      } else if (mouseY > height / 2 + 70 && mouseY < height / 2 + 110) {
        level = 3; 
      }
      startGame();
    }
  } else if (gameStarted && mouseX > width - 30 && mouseX < width - 10 && mouseY > 10 && mouseY < 30) {
    
    gameStarted = false;
    gameOver = false;
    resetGame();
  }
}

function startGame(difficulty) {
  gameDifficulty = difficulty;
  gameStarted = true;
  resetGame();
}

function resetGame() {
  playerScore = 0;
  botScore = 0;
  botDifficulty = 0.2;
  gameOver = false;
  timer = 90;
  setLevelSettings();
}

//bron: https://www.w3schools.com/js/js_switch.asp
function setLevelSettings() {
  switch (level) {
    case 1:
      opponent = "San Marino";
      ballSpeed = 5;
      botDifficulty = 0.2;
      break;
    case 2:
      opponent = "Zwitserland";
      ballSpeed = 7;
      botDifficulty = 0.4;
      break;
    case 3:
      opponent = "Brazilië";
      ballSpeed = 10;
      botDifficulty = 0.6;
      break;
    default:
      opponent = "Onbekend";
      ballSpeed = 5;
      botDifficulty = 0.2;
      break;
  }
  ball.setSpeed(ballSpeed);
}

//bron: https://www.w3schools.com/js/js_switch.asp
function getOpponentForLevel(level) {
  switch (level) {
    case 1:
      return "San Marino";
    case 2:
      return "Zwitserland";
    case 3:
      return "Brazilië";
    default:
      return "Onbekend";
  }
}

function checkForWinningGoal() {
  if (playerScore > botScore) {
    endGame();
  } else if (botScore > playerScore) {
    endGame();
  } else {
    endGame();
  }
}

function endGame() {
  gameOver = true;
  fill(0);
  rect(0, 0, width, height);
  fill(255);
  textSize(32);

  if (playerScore > botScore) {
    text("Gefeliciteerd, je hebt gewonnen!", width / 2, height / 3);
  } else if (botScore > playerScore) {
    text("Helaas, je hebt verloren.", width / 2, height / 3);
  } else {
    text("Matig! Je hebt gelijkgespeeld.", width / 2, height / 3);
  }

  textSize(16);
  text("Druk op het kruisje rechtsboven om terug te gaan naar het hoofdmenu.", width / 2, height / 2);


  fill(255, 0, 0);
  rect(width - 30, 10, 20, 20);

  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("X", width - 20, 20);
}

function showEndScreen() {
  background(0);
  fill(255);
  textSize(32);

  if (playerScore > botScore) {
    text("Gefeliciteerd, je hebt gewonnen!", width / 2, height / 3);
  } else if (botScore > playerScore) {
    text("Helaas, je hebt verloren.", width / 2, height / 3);
  } else {
    text("Gelijkspel!", width / 2, height / 3);
  }

  textSize(16);
  text("Druk op het kruisje rechtsboven om terug te gaan naar het hoofdmenu.", width / 2, height / 2);

  
  fill(255, 0, 0);
  rect(width - 30, 10, 20, 20);

  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("X", width - 20, 20);
}
