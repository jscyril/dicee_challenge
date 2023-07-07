function random(){
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}

var dice1 = random();
console.log(dice1);
var dice2 = random();
console.log(dice2);
var player1 = document.getElementsByTagName("img")[0];
var player2 = document.getElementsByTagName("img")[1];
var result = document.querySelector("h1");
if(dice1 == 1){
    player1.setAttribute("src","./images/dice1.png");
}
else if(dice1 == 2){
    player1.setAttribute("src","./images/dice2.png");
}
else if(dice1 == 3){
    player1.setAttribute("src","./images/dice3.png");
}
else if(dice1 == 4){
    player1.setAttribute("src","./images/dice4.png");
}
else if(dice1 == 5){
    player1.setAttribute("src","./images/dice5.png");
}
else {
    player1.setAttribute("src","./images/dice6.png");
}

if(dice2 == 1){
    player2.setAttribute("src","./images/dice1.png");
}
else if(dice2 == 2){
    player2.setAttribute("src","./images/dice2.png");
}
else if(dice2 == 3){
    player2.setAttribute("src","./images/dice3.png");
}
else if(dice2 == 4){
    player2.setAttribute("src","./images/dice4.png");
}
else if(dice2 == 5){
    player2.setAttribute("src","./images/dice5.png");
}
else {
    player2.setAttribute("src","./images/dice6.png");
}

if(dice1 > dice2){
    result.innerHTML= "🚩 Player 1 Wins";
}
else if(dice1 == dice2){
    result.innerHTML= "Draw";
}
else{
    result.innerHTML= "Player 2 Wins 🚩";
}