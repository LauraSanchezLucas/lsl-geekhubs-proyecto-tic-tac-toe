// funcion para recoger los nombres del sessionStoradge y enviarlos a pag. game
const PlayerName = () => {
    document.getElementById("P1").innerHTML = sessionStorage.getItem("name1")
    document.getElementById("P2").innerHTML = sessionStorage.getItem("name2")
}
PlayerName();
let board = [0,0,0,0,0,0,0,0,0];
//inicia el juego con X
let turn = 'X';     
let counter = 0;
// funcion para cambiar de turno
const changeTurn = () =>{
    //si el turno esta en X lo cambia a O y al reves
        turn = (turn == 'X') ? 'O' : 'X';
};

//  funcion para marcar la celda seleccionada
const markCell = (id) =>{     //esta funcion debe recibir el id donde clickeo
   if(board[id] === 0){    //si la celda esta vacia realizaremos lo siguiente
        board[id]= turn              //almacenamos el turno sea la X o O
        document.getElementById(id).innerHTML = turn //insertamos el turno en la celda
        
    }
}
//llamamos a la funcion de marcar celda

const PressClick = (position) =>{
    if(counter<6){
        markCell(position) 
        checkWinner()
        changeTurn()
        counter++
    }
}

