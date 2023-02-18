document.getElementById("win").innerHTML = sessionStorage.getItem("name1") 
document.getElementById("win").innerHTML = sessionStorage.getItem("name2") 


const canvas = document.querySelector('#confeti');
const jsConfetti = new JSConfetti();

jsConfetti.addConfetti()

setTimeout(function(){
window.location.href ="../index.html";
}, 7000);