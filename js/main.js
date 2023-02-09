// let button = document.getElementById("boton");

// button.addEventListener("click", () =>{
//     let Player1 = document.getElementById('P1').value;
//     let Player2 = document.getElementById('P2').value;
//     if(Player1 != "" && Player2 != ""){
//         sessionStorage.setItem("nombre1", JSON.stringify(player1));
//         sessionStorage.setItem("nombre2", JSON.stringify(player2));
//         window.location.href="./game.html"
//     }

// })
//Genero un objeto de JavaScript que va a tener una propiedad para cada player

let players = {
    player1 : "",
    player2 : ""
}

//Capturo los input por su className... recordad que los captura en una htmlcollection

let inputs = Array.from(document.getElementsByClassName("namePlayer"));

//Mapeare el array inputs para darle a todos los elementos el evento addeventlistener input
//para controlar cuando vayamos escribiendo en ellos

inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{

            //Según vamos escribiendo en el input, iremos actualizando el objeto players..
            //metiendo los valores en la propiedad correspondiente (player1 si escribo en el input de player1 por ejemplo)

            for(let jugador in players){
                if(elemento.name == jugador){
                    //Ahora es cuando meto el valor en el objeto
                    players[jugador] = elemento.value;
                }
            }
        })
    }
)


//Creo la función cambiaPantalla que guardará en sessionStorage y después cambiará de pantalla

const cambiaPantalla = () => {

    //Primero comprobamos que los nombres de los players NO esten vacios....

    if( (players.player1 === '') || (players.player2 === '') ){

        //Si uno de los 2 está vacio...ejecuto un return y así salgo de la función

        return;
    }

    //Si llego a este punto es porque los nombres si que tenían algún valor..

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    //Después de haber guardado .... cambiamos de página

    setTimeout(()=>{

        window.open("../pages/game.html","_self");
    },500);


}