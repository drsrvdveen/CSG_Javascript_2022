//  _      _____ _   _  _____  ____  
// | |    |_   _| \ | |/ ____|/ __ \ 
// | |      | | |  \| | |  __| |  | |
// | |      | | | . ` | | |_ | |  | |
// | |____ _| |_| |\  | |__| | |__| |
// |______|_____|_| \_|\_____|\____/ 
// Writen by: L. Koerts 
// 18-12-23
//


let test;
let quicklist;
var guess;

var input = document.getElementById('guess'); // the input box

var CorrecteLetter = 'CorrectBeep.mp3';
var CorrecteLetterVerkeerdePlek = 'GoodWrongPlace.mp3';
var IncorrecteLetter = 'Normal.mp3';
var type = 'type.mp3';
var Win = 'Win.mp3';
var Loss = 'Helaas.mp3'
var over = false;

function Sound(file) {
  var Beep = new Audio('./assets/' + file);
  Beep.load();
  Beep.play();
}

var changeClass = function (cng, old, newClass) {
  cng.className = cng.className.replace(old, newClass);
}

function preload() {
  quicklist = loadStrings('JS/word5.txt');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {

  document.getElementById('guess').maxLength = 5;
  document.getElementById('guess').focus();
  document.getElementById('guess').visible = false;

  // PAK RANDOM WOORD VOOR SPEL
  var rand = quicklist[floor(random(quicklist.length))].toUpperCase();

  var heeftdezelfdeletters = (/([a-zA-Z]).*?\1/).test(rand);
  var beurt = 1;
  var huidig = "row" + beurt;
  var g = 0;

  var getAllIndexes = function (arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
      if (arr[i] === val)
        indexes.push(i);
    return indexes;
  }

  document.getElementById("row1").firstElementChild.innerHTML = rand.substr(0, 1);

  //VUL BLOKJES AAN MET TOETSEN
  document.addEventListener('keydown', function (event) {
    Sound(type);
    var key = event.key.toUpperCase()
    huidig = "row" + beurt;
    childDivs = document.getElementById(huidig).getElementsByTagName('div');
    console.log("1" + beurt)
    if (g >= 0 && g < 5 && event.keyCode != 8 && event.key != "Enter") {
      childDivs[g].innerHTML = key;
      g = g + 1;
    } else if (g >= 5 && g < 5 && event.keyCode != 8) {
      childDivs[g].innerHTML = key;
    } else if (event.keyCode == 8 && g > 0) {
      childDivs[g - 1].innerHTML = ' ';
      g = g - 1;
    } else if (event.key == "Enter") {
      g = 0;
    }
  });
  input.onkeypress = function (event) {
    if (event.key == "Enter" && over !== true) {
      guess = input.value.toUpperCase();
      var childDivs = document.getElementById(huidig).getElementsByTagName('div');
      var c = 0; // juiste hoeveelheid

      console.log(quicklist.includes(input.value))
      //onjuiste hoeveelheid letters
      if (quicklist.includes(input.value) == false || guess.length != 5) {
        if (guess.length != 5) {
          document.getElementById('smallMsg').innerHTML = "Woord moet 5 letters zijn!";
          if (beurt === 5) {
            end("Correcte woord: " + rand);
            Sound(Loss);
          }
          beurt++;
          document.getElementById(huidig).firstElementChild.innerHTML = rand[0];
          return; // naar beneden
        } else {
          document.getElementById('smallMsg').innerHTML = "Woord moet bestaan!";
          if (beurt === 5) {
            end("Correcte woord: " + rand);
            Sound(Loss);
          }
          beurt++;
          document.getElementById(huidig).firstElementChild.innerHTML = rand[0];
          return; // naar beneden
        }
      }

      // Correctie check
      for (var z = 0; z < guess.length; z++) {
        setTimeout(function (index) {
          childDivs[index % childDivs.length].innerHTML = guess[index];
          if (guess[index % childDivs.length] == rand[index % childDivs.length]) {
            changeClass(childDivs[index % childDivs.length], 'default', 'correct');
            Sound(CorrecteLetter);
            c++;
          }
          if (c === 5) {
            end("Gewonnen");
            Sound(Win);
          }
          if (beurt === 6 && over == false && c !== 5) {
            end("Verloren, correcte woord: " + rand);
            Sound(Loss);
          }

        }, 200 * z, z);
      }

      input.value = ''; //leeg input

      // check verkeerde plek
      for (var z = 0; z < guess.length; z++) {
        setTimeout(function (index) {
          if (rand.indexOf(guess[index % childDivs.length]) != -1) {
            if (heeftdezelfdeletters === false && childDivs[rand.indexOf(guess[index % childDivs.length])].className != "square correct") {
              Sound(CorrecteLetterVerkeerdePlek);
              changeClass(childDivs[index % childDivs.length], 'default', 'wrongplace');
            }
            else if (heeftdezelfdeletters === true) {
              var ind = getAllIndexes(rand, guess[index % childDivs.length]);
              if (ind.length > 1) {
                for (var j = 0; j < ind.length; j++) {
                  if (childDivs[ind[j]].className != "square correct" && childDivs[index % childDivs.length].className != "square wrongplace") {
                    changeClass(childDivs[index % childDivs.length], 'default', 'wrongplace');
                  }
                }
              }
              else if (childDivs[rand.indexOf(guess[index % childDivs.length])].className != "square correct") {
                changeClass(childDivs[index % childDivs.length], 'default', 'wrongplace');
                Sound(CorrecteLetterVerkeerdePlek);
              }
            }
          } else {
            Sound(IncorrecteLetter);
          }
        }, 200 * z, z);
      }
      beurt++;
    } else if (event.key == "Enter" && over == true) {
      console.log(over + 'again')
      playagain();
    }
  }
}

var end = function (smallmsg) {
  over = true;
  document.getElementById('smallMsg').innerHTML = smallmsg;
  document.getElementById('guess').readOnly = true;
  g = 0;
}

var playagain = function () {
  location.reload();
};
