class Dice {
    number = Math.floor(Math.random() * 6 ) + 1;
    diceImage = '';
    getImage = function () {
        this.diceImage = 'assets/dice' +
            this.number + '.png';
    }
}

var round
var maxDice = 5;
var player1 = [];
var player2 = [];
var sumPlayer1 = 0;
var sumPlayer2 = 0;

for (var i = 0; i < maxDice; i++) {
    let dice1 = new Dice();
    dice1.getImage();
    let dice2 = new Dice();
    dice2.getImage();
    sumPlayer1 += dice1.number;
    sumPlayer2 += dice2.number;
    player1.push(dice1);
    player2.push(dice2);
}

const tablePlayer1 = document.getElementById('player1');
const tablePlayer2 = document.getElementById('player2');

for (var i = 0; i < maxDice; i++) {
    const imgPlayer1 = document.createElement('img');
    imgPlayer1.src = player1[i].diceImage;

    const imgPlayer2 = document.createElement('img');
    imgPlayer2.src = player2[i].diceImage;


    tablePlayer1.append(imgPlayer1);
    tablePlayer2.append(imgPlayer2);
}


if(sumPlayer1>sumPlayer2){
    document.querySelector('h1').innerHTML ='USER 1 WINS!'
} else if(sumPlayer1<sumPlayer2){
    document.querySelector('h1').innerHTML ='USER 2 WINS!'
} else{
    document.querySelector('h1').innerHTML ='DRAW!'
}























/*const firstRandomNum =
Math.floor(Math.random() * 6 ) + 1;

const firstDiceImage = 'assets/dice' +
firstRandomNum + '.png';

document.querySelectorAll('img')[0]
.setAttribute('src',firstDiceImage);

const secondRandomNum =
Math.floor(Math.random() * 6 ) + 1;

const secondDiceImage = 'assets/dice' +
secondRandomNum + '.png';

document.querySelectorAll('img')[1]
.setAttribute('src',secondDiceImage);

if(firstRandomNum>secondRandomNum){
    document.querySelector('h1').innerHTML ='USER 1 WINS!'
} else if(firstRandomNum<secondRandomNum){
    document.querySelector('h1').innerHTML ='USER 2 WINS!'
} else{
    document.querySelector('h1').innerHTML ='DRAW!'
}*/
