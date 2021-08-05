'use strict';

 let secnumber = Math.trunc((Math.random()*20)+1);
 let score = 20;

let highscore = 0;
let wrongNumber = function() {
 if(score > 1) {
     score--;
     document.querySelector('.score').textContent = score;
    }
 else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
 }
}

let x = function() {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if(!guess) {
   document.querySelector('.message').textContent = 'No number!';
  }
  //Correct Number
   else if (guess === secnumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secnumber;

    if (score > highscore) {
       highscore = score;
       document.querySelector('.highscore').textContent = highscore;
    }
   }
   //Wrong Number
   else if (guess > secnumber) {
    document.querySelector('.message').textContent = 'Too High!';
    wrongNumber();
   }
   else if (guess < secnumber) {
    document.querySelector('.message').textContent = 'Too Less!';
    wrongNumber();
   }
}
document.querySelector('.check').addEventListener('click', x);

const y = function() {
  secnumber = Math.trunc((Math.random()*20)+1);
  score = 20;
 document.querySelector('.score').textContent = score;
 document.querySelector('.number').textContent = '?';
 document.querySelector('body').style.backgroundColor = '#333';
 document.querySelector('.number').style.width = '15rem';
 document.querySelector('.message').textContent = 'Start guessing...';
 document.querySelector('.guess').value ='';
}
document.querySelector('.again').addEventListener('click', y);