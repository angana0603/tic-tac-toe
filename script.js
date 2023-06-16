const loginForm = document.getElementById('loginForm');
const gameContainer = document.getElementById('game-container');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const playersDisplay = document.getElementById('players');

let currentPlayer = 'X';
let gameEnd = false;
let cells = Array.from(document.getElementsByClassName('cell'));

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const player1 = player1Input.value;
  const player2 = player2Input.value;

  if (player1 && player2) {
    gameContainer.style.display = 'block';
    loginForm.style.display = 'none';
    playersDisplay.innerText = `${player1} (X) vs ${player2} (O)`;
  }
});

const handleClick = (index) => {
  if (!gameEnd && cells[index].innerText === '') {
    cells[index].innerText = currentPlayer;
    cells[index].style.backgroundColor = currentPlayer === 'X' ? 'lightblue' : 'lightcoral';
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const checkWin = () => {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].innerText !== '' &&
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText
    ) {
      gameEnd = true;
      cells[a].style.backgroundColor = 'lightgreen';
      cells[b].style.backgroundColor = 'lightgreen';
      cells[c].style.backgroundColor = 'lightgreen';
      setTimeout(() => {
        alert(`${cells[a].innerText} wins!`);
      }, 100);
      break;
    }
  }
  if (!cells.some(cell => cell.innerText === '')) {
    gameEnd = true;
    setTimeout(() => {
      alert("It's a tie!");
    }, 100);
  }
};

const resetBoard = () => {
  currentPlayer = 'X';
  gameEnd = false;
  cells.forEach(cell => {
    cell.innerText = '';
    cell.style.backgroundColor = 'lightgray';
  });
};


const goToLoginPage = () => {
    window.location.href = "index.html";
  };