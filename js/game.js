// collect names from sessionStoradge and paint into P1 and P2
// const PlayerName = () => {
//     document.getElementById("P1").innerHTML = sessionStorage.getItem("name1")
//     document.getElementById("P2").innerHTML = sessionStorage.getItem("name2")
// }
// PlayerName();
document.getElementById("P1").innerHTML = sessionStorage.getItem("name1");
document.getElementById("P2").innerHTML = sessionStorage.getItem("name2");
//Function to change turn
let turn = 'X';     
let counter = 0;
const changeTurn = () =>{
    turn = (turn == 'X') ? 'O': 'X'; 
    if(turn == 'X'){
        document.getElementById('first').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name1")} GOOD LUCK!!!`;
        document.getElementById('second').innerHTML = "";
        document.getElementById('time').innerHTML = `X ${sessionStorage.getItem("name1")}`;      
    }else if(turn== 'O'){
        document.getElementById('second').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name2")} GOOD LUCK!!!`;
        document.getElementById('first').innerHTML = "";
        document.getElementById('time').innerHTML = `O ${sessionStorage.getItem("name2")}`;
    }
};
// function of all game
const PressClick = (position) =>{
    if(counter<8){
        markCell(position);
        checkWinner();
        changeTurn();
        counter++
    }else if(counter=9){
        markCell(position); 
        checkWinner();
        changeTurn();
        setTimeout(function(){
            window.location.href ="../pages/tie.html";
        }, 1000);
    }
};
// Declare my board
let board = ["","","","","","","","",""];
// Function to mark cells
const markCell = (id) =>{     //esta funcion debe recibir el id donde clickeo
    if(board[id] === ""){    //si la celda esta vacia realizaremos lo siguiente
        board[id]= turn              //almacenamos el turno sea la X o O
        document.getElementById(id).innerHTML = turn //insertamos el turno en la celda 
    }
};
// Function for winning combinations
let letter = ""
const checkWinner = () =>{
    let character = ["X","O"]
    for(i=0; i<character.length; i++){
        letter = character[i]
        if(board[0] == letter && board[1] == letter && board[2]== letter){showWinner(letter)}
        if(board[3] == letter && board[4] == letter && board[5]== letter){showWinner(letter)}
        if(board[6] == letter && board[7] == letter && board[8]== letter){showWinner(letter)}
        if(board[0] == letter && board[3] == letter && board[6]== letter){showWinner(letter)}
        if(board[1] == letter && board[4] == letter && board[7]== letter){showWinner(letter)}
        if(board[2] == letter && board[5] == letter && board[8]== letter){showWinner(letter)}
        if(board[0] == letter && board[4] == letter && board[8]== letter){showWinner(letter)}
        if(board[2] == letter && board[4] == letter && board[6]== letter){showWinner(letter)}
    }
};
// function show Winner
const showWinner = (letter) =>{
    if(letter == 'X'){
        sessionStorage.setItem('winplayer',letter);
        window.location.href ="../pages/winner.html";
    }else if(letter == 'O'){
        sessionStorage.setItem('winplayer',letter);
        window.location.href ="../pages/winner.html";
    }else{}
};