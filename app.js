const playerX = {name: "AI", boardPiece: "x"};
const playerO = {name: "AI", boardPiece: "o"};
let gameboard;

const gameWindow = document.createElement("div");
gameWindow.classList.add("gameboard");
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
      gameboard = initializeGameboard();      
      gameboard.forEach(cell => {
        gameWindow.append(cell);        
      });      
      document.body.append(gameWindow);      
    }
});




// Do I need a game object? {gameboard: [], playerX, playerO};


function getMove(){}

function initializeGameboard(){
  let gameboard = [];
  for(let i = 0; i < 9; i++){
    let temp = document.createElement("div");
    temp.setAttribute("id", `${i}`);
    temp.classList.add("cell");
    gameboard.push(temp);
  }
  return gameboard;
}    

// function renderGame(){}

function checkStatus(gameboard){

}

// function toggleActivePlayer(){}