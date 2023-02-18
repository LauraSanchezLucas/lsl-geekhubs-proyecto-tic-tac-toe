let winplayer = sessionStorage.getItem("winplayer");
if(winplayer == "X"){
    document.getElementById("win").innerHTML = sessionStorage.getItem("name1")
}else if(winplayer == "O"){
    document.getElementById("win").innerHTML = sessionStorage.getItem("name2")
}
const canvas = document.querySelector('#confeti');
const jsConfetti = new JSConfetti();

jsConfetti.addConfetti()

setTimeout(function(){
window.location.href ="../index.html";
}, 7000);

