const playerX = {name: "AI", boardPiece: "x"};
const playerO = {name: "AI", boardPiece: "o"};

const gameWindow = document.createElement("div");
const startMenu = document.createElement("div");

const playerSelectionX = document.createElement("button");
playerSelectionX.innerText = "select X";
const playerSelectionO = document.createElement("button");
playerSelectionO.innerText = "select O";
const startBtn = document.createElement("button");
startBtn.innerText = "Start";
startMenu.append(playerSelectionX, playerSelectionO, startBtn);
document.body.append(startMenu);
startMenu.addEventListener("click", e => {
  if(e.target.innerText === "select X"){
    playerX.name = prompt("Enter your name.");
    playerSelectionX.innerText = `${playerX.name} playing X`;
  }
  if (e.target.innerText === "select O"){
    playerO.name = prompt("Enter your name, O");
    playerSelectionO.innerText = `${playerO.name} playing O`;
  }
  if(e.target.innerText === "Start"  && 
    (playerX.name != "AI" || playerO.name != "AI")){
      startMenu.remove();
      document.body.append(gameWindow);
    }
});


// const gameObj = {gameboard: [], x: {name: "", boardPiece: "x"}, o: {name: "", boardPiece: "o"}};

// function getMove(){}

// function renderGame(){}

// function checkStatus(){}

// function toggleActivePlayer(){}