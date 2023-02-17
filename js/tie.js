const canvas = document.querySelector('#confeti');
const jsConfetti = new JSConfetti();

jsConfetti.addConfetti({
    emojis: ['😠', '😭', '💥'],
 })
setTimeout(function(){
window.location.href ="../index.html";
}, 5000);


