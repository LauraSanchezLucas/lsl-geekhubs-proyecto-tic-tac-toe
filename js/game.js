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
            document.getElementById('first').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name1")} GOOD LUCK!!!`
            document.getElementById('second').innerHTML = ""         
        }else if(turn== 'O'){
            document.getElementById('second').innerHTML = `YOU´RE TIME...${sessionStorage.getItem("name2")} GOOD LUCK!!!`
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
        console.log("Estoy contando hasta 8")
        markCell(position) 
        checkWinner()
        changeTurn()
        counter++
        console.log(counter)
    }else if(counter=9){
        console.log('empieza counter 9')
        console.log(counter)

        markCell(position) 
        checkWinner()
        changeTurn()
        console.log('checkwinner hecho')
        setTimeout(function(){
            window.location.href ="../pages/tie.html";
            }, 1000);
    }
}


// funcion para validar ganador
let letra = ""
const checkWinner = () =>{
    let letras = ["X","O"]
    for(a=0; a<letras.length; a++){
        letra = letras[a]

        if(board[0] == letra && board[1] == letra && board[2]== letra){MostrarGanador(letra)}
        if(board[3] == letra && board[4] == letra && board[5]== letra){MostrarGanador(letra)}
        if(board[6] == letra && board[7] == letra && board[8]== letra){MostrarGanador(letra)}
        if(board[0] == letra && board[3] == letra && board[6]== letra){MostrarGanador(letra)}
        if(board[1] == letra && board[4] == letra && board[7]== letra){MostrarGanador(letra)}
        if(board[2] == letra && board[5] == letra && board[8]== letra){MostrarGanador(letra)}
        if(board[0] == letra && board[4] == letra && board[8]== letra){MostrarGanador(letra)}
        if(board[2] == letra && board[4] == letra && board[6]== letra){MostrarGanador(letra)}
    }
}

// mostrar ganador

const MostrarGanador = (letra) =>{
    if(letra == 'X'){
        window.location.href ="../pages/winner.html"
    }else if(letra == 'O'){
        window.location.href ="../pages/winner.html"
    }else{}
    }


//     //variables
// let tiempoEspera= 15;
// let segundos= tiempoEspera;
// let tiempoDiv= document.querySelector("#tiempo");
// let descuento;
// ​
// //funciones
// const resetTiempo=()=>{
//   segundos= tiempoEspera;
//   if(descuento){
//     clearInterval(descuento);
//   }
//   tiempoDiv.innerHTML=(`<p>${segundos}</p>`);
//   descuento= setInterval(cadaSegundo, 1000);
// };
// ​
// const cadaSegundo=()=>{
//   segundos--;
//   tiempoDiv.innerHTML=(`<p>${segundos}</p>`);
//   if(segundos==0){
//     prompt("tiempo agotado");
//   }
// };
// ​
// resetTiempo();










