// funtion to save players names
const startGame = () => {
    //declare both variables
    let player1 = document.getElementById("P1").value;
    let player2 = document.getElementById("P2").value;
    // condition to make sure names are not empty and not same.
    if(player1 !="" && player2 !="" && player1 != player2){
        //save names in sessionStoradge under name1 and name2
        sessionStorage.setItem('name1', player1);
        sessionStorage.setItem('name2', player2);
        // open pag.game
        window.location.href ="../pages/game.html";
        //incorrect information ----popup
    }else{
        document.getElementById('open-popup').style.visibility="visible";
        document.getElementById('close-popup').addEventListener
        ("click", notice); 
        // The first parameter is the type of the event
    }
}
// funtion to close pop-up
const notice =()=> {
  document.getElementById('open-popup').style.visibility="hidden";
}
