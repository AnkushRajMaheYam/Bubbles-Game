var timer = 60;
var score = 0;
var hitrn = 0;



function bublesFun() {
    var bubles = "";
    for (var i = 1; i <= 128; i++) {
        var rn = Math.floor(Math.random() * 10)
        bubles += `<div class="bubles">${rn}</div>`;
    }
    document.querySelector("#gameBottom").innerHTML = bubles;
}
function CounterFun() {
    var timerCle = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(timerCle);
            
            document.querySelector("#gameBottom").innerHTML = '<div id="gameover"><h1>Game Over</h1> <br> <p> &nbsp &nbsp &nbsp &nbsp By <a href="http://www.youtube.com/gamendofficial" target="_blank">Gamend</a></p></div>';

              
            
        }
        }, 1000);
}
function hitvalFun() {

    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;

}
function incScore() {
    score += 9;
    document.querySelector("#scoreVal").textContent = score;
    
}
function decScore() {
    score -= 9;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#gameBottom").addEventListener("click", function (bublesData) {
    var intBublesData = Number(bublesData.target.textContent);
    if (intBublesData === hitrn) {
        incScore();
        bublesFun();
        hitvalFun();
    }
    else{
       decScore();
        
        
        
        
    }

});











bublesFun();
CounterFun();
hitvalFun();

