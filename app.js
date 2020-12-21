const playerX = {name: "AI", boardPiece: "x"};
const playerO = {name: "AI", boardPiece: "o"};
let activePlayer;
let whoMoves = document.createElement("h2");
let gameboard;
let test;

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
      document.body.append(whoMoves);
      whoMoves.innerText = `${activePlayer.name} to move.`;      
      document.body.append(gameWindow);
      gameWindow.addEventListener("click", e =>{
        
        if(e.target.innerText || test){
          return undefined;
        }
        e.target.innerText = activePlayer.boardPiece;        
        
        test = checkStatus(gameboard);
        if(test){
          whoMoves.innerText = `${test}`;
          return undefined;
        }                    
      
        if(activePlayer === playerX){
          activePlayer = playerO;
          whoMoves.innerText = `${activePlayer.name}'s Turn.`;          
        }else if(activePlayer === playerO){
          activePlayer = playerX;
          whoMoves.innerText = `${activePlayer.name}'s Turn.`;
        }        
      });      
    }
});




// Should I use a game object? {gameboard: [], playerX, playerO};


// function getMove(){}

function initializeGameboard(){
  let gameboard = [];
  activePlayer = playerX;
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
  let trios = [
    [gameboard[0], gameboard[1], gameboard[2]],
    [gameboard[3], gameboard[4], gameboard[5]], 
    [gameboard[6], gameboard[7], gameboard[8]],
    [gameboard[0], gameboard[3], gameboard[6]],
    [gameboard[1], gameboard[4], gameboard[7]],
    [gameboard[2], gameboard[5], gameboard[8]],
    [gameboard[0], gameboard[4], gameboard[8]],
    [gameboard[2], gameboard[4], gameboard[6]],
  ];
  let status = "";
  let count = 0;
  trios.forEach(trio => {        
    let box1 = trio[0].innerText;
    let box2 = trio[1].innerText;
    let box3 = trio[2].innerText;
    if(box1 && box2 && box3){
      count++;
      if(box1 === box2 && box2 === box3){
        status = `${box1} wins`;
        return status;
      }
    }
    if(count === 8 && !status){
      status = "Tie game"
      return status;
    }
    return status;    
  });
  return status;
}

// function toggleActivePlayer(){}