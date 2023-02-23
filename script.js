'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContenst = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}
function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}
function styleNumber(styleNum) {
  document.querySelector('.number').style.width = styleNum;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is an input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When players wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);

    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    styleNumber('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = 'rgb(200,0,0)';
      displayNumber(secretNumber);

      styleNumber('30rem');
      displayMessage('💥 You lost the Game!');
      displayScore(0);
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';

  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // When guess is too low
  //   } else {
  //     document.querySelector('body').style.backgroundColor = 'rgb(200,0,0)';

  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.message').textContent = '💥 You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';

  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'rgb(200,0,0)';

  //     document.querySelector('.number').style.width = '30rem';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayNumber('?');
  displayScore(score);

  displayMessage('Start guessing...');
  const guess = document.querySelector('.guess');
  guess.value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  styleNumber('15rem');
});
