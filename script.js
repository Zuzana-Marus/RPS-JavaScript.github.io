var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var CompPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + CompPoints;
}
setInterval(score, 50);
function convert(word){
    if(word === "paper") return '<i class="fa-regular fa-hand"></i>';
    if(word === "rock") return '<i class="fa-regular fa-hand-back-fist"></i>';
    return '<i class="fa-regular fa-hand-scissors"></i>';
}
function game(UserChoice){
    var box = document.getElementById("challenge");
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var compDiv = document.getElementById("CompObject");
    compDiv.innerHTML = convert(CompChoice);
if(UserChoice === "paper" && CompChoice === "rock" || UserChoice === "rock" && CompChoice === "scissors" || UserChoice === "scissors" && CompChoice === "paper"){
       win(UserChoice);
}
else if(UserChoice === CompChoice){
    draw(UserChoice);

}else{
    lose(UserChoice);
}
}
function continuGame(){
    i = Math.floor(Math.random() * 3);
    CompChoice = choices[i];
    box.style.display = "none";
}
setTimeout(continuGame, 1200);

function win(bn){
    UserPoints++;
    document.getElementById("who").innerHTML = "You WIN!";
    var bn = document.getElementById("bn");
    bn.classList.remove("bn");
    bn.classList.add("green")
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green")
    }, 1200);
}
function draw(bn){
    document.getElementById("who").innerHTML = "Its a DRAW!";
    var bn = document.getElementById("bn");
    bn.classList.remove("bn");
    bn.classList.add("grey")
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("grey")
    }, 1200);
}
function lose(bn){
    CompPoints++;
    document.getElementById("who").innerHTML = "You LOSE!";
    var bn = document.getElementById("bn");
    bn.classList.remove("bn");
    bn.classList.add("red")
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red")
    }, 1200);
}