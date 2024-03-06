var btns= document.querySelectorAll('.btn')

let playerX= true

let winner = document.getElementById("winner")
let playerTurn = document.getElementById("player")
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
  function checkCondition(){
    for(let i=0;i<winningCombinations.length;i++){
    let a= winningCombinations[i][0];
    let b= winningCombinations[i][1];
    let c= winningCombinations[i][2];
    if((btns[a].innerHTML=='X' && btns[b].innerHTML=='X' && btns[c].innerHTML=='X') || (btns[a].innerHTML=='O' && btns[b].innerHTML=='O' && btns[c].innerHTML=='O'))
    {
        winner.innerHTML=(`${btns[a].innerHTML} is the winner`)
        for(let j=0;j<btns.length;j++)
        {
            btns[j].disabled = true;
        }
        return true;
    }
    }
    
}


function btnClicked(num){
    if(playerX){
        btns[num].innerHTML='O';
        playerX=false;
        btns[num].disabled = true;
    
    }
    else{
        btns[num].innerHTML='X';
        playerX=true;
        btns[num].disabled = true;
    }
    if(!checkCondition()){
        if(playerX)
        playerTurn.innerHTML=`O's turn`
    else
    playerTurn.innerHTML=`X's turn`
    }
    
}

function reset(){
    for(let j=0;j<btns.length;j++)
        {
            btns[j].disabled = false;
        }
        for(let j=0;j<btns.length;j++)
        {
            btns[j].innerHTML ="";
        }
        winner.innerHTML=""
        playerTurn.innerHTML="O's turn"
        playerX=true
}


