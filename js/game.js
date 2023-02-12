// funcion para recoger los nombres del sessionStoradge y enviarlos a pag. game
const PlayerName = () => {
    document.getElementById("P1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("P2").innerHTML = sessionStorage.getItem("name2")
}

PlayerName();



// jugadores 
const firstPlayer = "X";
const secondPlayer = "O";
let board = [0,0,0,0,0,0,0,0,0];
//inicia el juego con X
let turn = 'X';     

// funcion para cambiar de turno
const changeTurn = () =>{
    //si el turno esta en X lo cambia a O y al reves
    turn = (turn == 'X') ? 'O' : 'X'; 
}






