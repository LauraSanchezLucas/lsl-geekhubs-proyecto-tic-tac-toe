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
    turn = (turn == 'X') ? 'O': 'X'; 
        if(turn == 'X'){
            // turn = 'O'
            document.getElementById('first','first-player').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name1")} GOOD LUCK!!!`
            document.getElementById('time').innerHTML = `X ${sessionStorage.getItem("name1")}`
            document.getElementById('second').innerHTML = ""         
        }else if(turn== 'O'){
            // turn = 'X'
            document.getElementById('second', 'second-player').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name2")} GOOD LUCK!!!`
            document.getElementById('time').innerHTML = `O ${sessionStorage.getItem("name2")}`
            document.getElementById('first').innerHTML = ""
        }
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
    if(counter<8){
        markCell(position) 
        checkWinner()
        changeTurn()
        counter++
    }else if(counter=9){
        markCell(position) 
        checkWinner()
        changeTurn()
        setTimeout(function(){
            window.location.href ="../pages/tie.html";
        }, 1000);
    }
}
// funcion para validar ganador
let letter = ""
const checkWinner = () =>{
    let character = ["X","O"]
    for(a=0; a<character.length; a++){
        letter = character[a]

        if(board[0] == letter && board[1] == letter && board[2]== letter){showWinner(letter)}
        if(board[3] == letter && board[4] == letter && board[5]== letter){showWinner(letter)}
        if(board[6] == letter && board[7] == letter && board[8]== letter){showWinner(letter)}
        if(board[0] == letter && board[3] == letter && board[6]== letter){showWinner(letter)}
        if(board[1] == letter && board[4] == letter && board[7]== letter){showWinner(letter)}
        if(board[2] == letter && board[5] == letter && board[8]== letter){showWinner(letter)}
        if(board[0] == letter && board[4] == letter && board[8]== letter){showWinner(letter)}
        if(board[2] == letter && board[4] == letter && board[6]== letter){showWinner(letter)}
    }
}

// mostrar ganador

const showWinner = (letter) =>{
    if(letter == 'X'){
        sessionStorage.setItem('winplayer',letter)
        window.location.href ="../pages/winner.html"
    }else if(letter == 'O'){
        sessionStorage.setItem('winplayer',letter)
        window.location.href ="../pages/winner.html"
    }else{}
}










