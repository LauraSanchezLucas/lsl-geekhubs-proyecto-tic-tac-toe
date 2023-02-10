// voy a crear mi funcion para llamar a el onclick de mi html y que me guarde los nombres

const startGame = () => {
    // declaro mis dos variables =para recoger lo que se introduce en los inputs  se pone .getElementbyId y el .value es para recoger
    // lo que se escriba dentro del input los value
    let player1 = document.getElementById("P1").value;
    let player2 = document.getElementById("P2").value;
    // plateo una condicion para descartar que los inputs se queden vacios
    if(player1 !="" && player2 !=""){
        // guardo los value en session storage para ser recogidos en cualquier momento
        sessionStorage.setItem('name1', player1);
        sessionStorage.setItem('name2', player2);
        // declaro que se me abra la siguiente pag. una vez que le doy al play
        window.location.href ="../pages/game.html";
        // en caso que no se introduzca correcto me saldra un alert o no te dejara continuar con el programa
    }else{
        alert('introduce un nombre')
    }
}