'use strict';

let roll = document.querySelector('.roll');
let rolled = document.querySelector('.rolled');
let Score2 = document.querySelector('.p2c');
let Score1 = document.querySelector('.p1c');
let commonHold = document.querySelector('.hold');
let points001 = document.querySelector('.p1p');
let points002 = document.querySelector('.p2p');
let player001 = document.querySelector('.p1');
let player002 = document.querySelector('.p2');
let gameReset = document.querySelector('.newGame');
let actP = document.querySelector('.player1--active');
let actP2 = document.querySelector('.player2--active');
let activePlayer = 0;
let scores = [0, 0];

roll.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  rolled.textContent = diceNumber;
  console.log('PLayer ' + activePlayer);
  if (diceNumber !== 1) {
    if (activePlayer === 0) {
      actP.classList.toggle('switch1');
      actP2.classList.toggle('switch2');
      Score1.textContent = Number(Score1.textContent) + diceNumber;
    } else {
      actP.classList.toggle('switch2');
      actP2.classList.toggle('switch1');
      Score2.textContent = Number(Score2.textContent) + diceNumber;
    }
  } else {
    if (activePlayer === 0) {
      Score1.textContent = 0;
      actP.classList.toggle('switch2');
      actP2.classList.toggle('switch1');
    } else {
      Score2.textContent = 0;
      actP.classList.toggle('switch1');
      actP2.classList.toggle('switch2');
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

commonHold.addEventListener('click', function () {
  console.log(Score2.textContent);
  document.querySelector('.winner').textContent = `The Winner is..`;
  if (activePlayer === 0) {
    points001.textContent = Score1.textContent;
    actP.classList.toggle('switch2');
    actP2.classList.toggle('switch1');
    scores[0] = scores[0] + Number(points001.textContent);
    if (scores[0] < 100) {
      points001.textContent = scores[0];
    } else {
      document.querySelector('.winner').textContent = `Player 1 Won this game`;
      rolled.textContent = '?';
      Score1.textContent = '0';
      Score2.textContent = '0';
      points002.textContent = '0';
      points001.textContent = '0';
    }
    console.log(' Total Score p1 ' + scores[0]);
  } else {
    points002.textContent = Score2.textContent;
    scores[1] = scores[1] + Number(points002.textContent);
    actP2.classList.toggle('switch1');
    if (scores[1] < 100) points002.textContent = scores[1];
    else {
      document.querySelector('.winner').textContent = `Player 2 Won this game`;
      rolled.textContent = '?';
      Score1.textContent = '0';
      Score2.textContent = '0';
      points002.textContent = '0';
      points001.textContent = '0';
    }
    console.log(' Total Score p2' + scores[1]);
  }
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log('PLayer ' + activePlayer);

  rolled.textContent = '?';
  Score1.textContent = '0';
  Score2.textContent = '0';
});

function changeClr(color) {
  player001.style.backgroundColor = color;
}

gameReset.addEventListener('click', function () {
  rolled.textContent = '?';
  Score1.textContent = '0';
  Score2.textContent = '0';
  points002.textContent = '0';
  points001.textContent = '0';
});
