document.getElementById("win").innerHTML = sessionStorage.getItem("name1") 
document.getElementById("win").innerHTML = sessionStorage.getItem("name2") 


const canvas = document.querySelector('#confeti');
const jsConfetti = new JSConfetti();

jsConfetti.addConfetti()