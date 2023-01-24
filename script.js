'use strict';

console.log('Udit Patel');

// document.querySelector('.message').textContent = '🥳Correct Number!';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value=34
// console.log(document.querySelector('.guess').value);

// guessing the number
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore=0

const displayContent= function(message){
    document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number';
    displayContent('🚫 No Number')
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Guess';
    displayContent("🥳 Correct Guess")

    document.querySelector('.number').textContent = secretNumber;
    // displayContent(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    if(score > highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore
        // displayContent(highscore);
    }
  }
  else if(guess !== secretNumber){
    if (score > 1) {
        score--;
        // document.querySelector('.message').textContent = guess > secretNumber ? "Too high📈":"Too Low 📉"

        displayContent(guess > secretNumber ?"Too high📈":"Too Low 📉")
        document.querySelector('.score').textContent = score;

        // displayContent(score)
      } else {
        // document.querySelector('.message').textContent = '💥You Lost the Game';
        displayContent('💥You Lost the Game')
        document.querySelector('.score').textContent = 0;
        // displayContent(0)
      }
  }
 
  
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too High 📈';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too Low 💹';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost the Game';

//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function () {
    score=20
   secretNumber = Math.floor(Math.random() * 20) + 1;
   console.log(secretNumber)
  document.querySelector('.message').textContent = 'Start Guessing 🤔';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent="?"
  document.querySelector('body').style.backgroundColor='black'
});
