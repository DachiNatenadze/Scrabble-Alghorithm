const Letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
  10,
];

function algh() {
  let player1 = prompt("Player 1 :  ").toUpperCase();
  let player2 = prompt("Player 2 :  ").toUpperCase();
  let Boths = {};
  for (let i = 0; i < Letters.length; i++) {
    let pointValue = Points[i];
    let letterValue = Letters[i];
    Boths[letterValue] = pointValue;
  }
  let player1Points = 0;
  let player2Points = 0;
  for (let letter of player1.toUpperCase()) {
    player1Points += Boths[letter];
  }

  for (let letter of player2.toUpperCase()) {
    player2Points += Boths[letter];
  }
  if (player1Points > player2Points) {
    console.log(`Player1 has won, points ${player1Points}`);
  }
  if (player1Points < player2Points) {
    console.log(`Player2 has won, points ${player2Points}`);
  }
  if (player1Points === player2Points) {
    console.log(`Tie`);
  }
}

algh();
