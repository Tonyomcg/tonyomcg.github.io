




// list of different species of shark for hangman game.

var initialD = ['AE86', 'FC3S', 'FD3S', 'Silvia', '180sx', 'SILEIGHTY', 'FUJIWARA', 
"GTR", 'R32', 'R33', 'R34', 'AKINA', 'AKAGI', 'SW20']


// using above array we choose a random word.
var word = initialD[Math.floor(Math.random() * initialD.length)];


// global variables 

var s;
var count = 10;
var answerArray = [];



// creates underscores for every letter of randomly selected word

function startUp() {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  // putting in a string & puts space in between _'s
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

// replaces "_" with the correct letter
function letter() {

  var letter = document.getElementById("letter").value;
  // i think this is where it gets messed up...
  // how do i define this variable using the input in the form box?

  if (letter.length > 0) {
    letter = letter.toUpperCase();
    for (var i = 0; i < word.length; i ++) {
      if (word[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count--;
    document.getElementById("counter").innerHTML = "No of lives: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count = 0) {
    document.getElementById("stat").innerHTML = "Sorry! Try Again!";
  }
}
