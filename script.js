const column1 = ['strawberry', 'lemon', 'pear', 'seven', 'strawberry', 'lemon', 'pear', 'melon', 'strawberry', 'lemon', 'bell', 'grapes', 'strawberry', 'cherries', 'lemon', 'crown', 'pear', 'bell', 'lemon', 'crown', 'pear', 'orange', 'plum', 'star']
const column2 = ['orange', 'plum', 'cherries', 'melon', 'orange', 'plum', 'cherries', 'seven', 'orange', 'plum', 'cherries', 'grapes', 'plum', 'orange', 'bell', 'crown', 'strawberry', 'orange', 'plum', 'cherries', 'pear', 'lemon', 'cherries', 'star']
const column3 = ['cherries', 'crown', 'lemon', 'cherries', 'strawberry', 'lemon', 'cherries', 'pear', 'lemon', 'star', 'bell', 'pear', 'lemon', 'seven', 'bell', 'pear', 'cherries', 'melon', 'plum', 'pear', 'cherries', 'grapes', 'orange', 'lemon']

let score;
let totalScore = 100;

var items = Array('cherry', 'lemon', 'orange', 'pear', 'plum', 'bell', 'strawberry', 'grape', 'melon', 'seven', 'star');

let result1 = column1[Math.floor(Math.random()*column1.length)];
let result2 = column2[Math.floor(Math.random()*column2.length)];
let result3 = column3[Math.floor(Math.random()*column3.length)];

function tripleScore() {
    if (result1 === 'cherry') {
        score = 10;
    } else if (result1 === 'lemon') {
        score = 10;
    } else if (result1 === 'orange') {
        score = 10;
    } else if (result1 === 'pear') {
        score = 10;
    } else if (result1 === 'plum') {
        score = 10;
    } else if (result1 === 'bell') {
        score = 25;
    } else if (result1 === 'strawberry') {
        score = 50;
    } else if (result1 === 'grape') {
        score = 50;
    } else if (result1 === 'melon') {
        score = 75;
    } else if (result1 === 'seven') {
        score = 75;
    } else if (result1 === 'star') {
        score = 100;
    }
}

function doubleScore() {
    if (result1 === 'cherry') {
        score = 5;
    } else if (result1 === 'lemon') {
        score = 5;
    } else if (result1 === 'orange') {
        score = 5;
    } else if (result1 === 'pear') {
        score = 5;
    } else if (result1 === 'plum') {
        score = 5;
    } else if (result1 === 'bell') {
        score = 5;
    } else if (result1 === 'strawberry') {
        score = 5;
    } else if (result1 === 'grape') {
        score = 10;
    } else if (result1 === 'melon') {
        score = 10;
    } else if (result1 === 'seven') {
        score = 10;
    } else if (result1 === 'star') {
        score = 20;
    }
}

function generateResult() {
    result1 = items[Math.floor(Math.random()*items.length)];
    result2 = items[Math.floor(Math.random()*items.length)];
    result3 = items[Math.floor(Math.random()*items.length)];
}

function displayResult() {
    document.getElementById('result1').innerHTML = result1;
    document.getElementById('result2').innerHTML = result2;
    document.getElementById('result3').innerHTML = result3;
    document.getElementById('score').innerHTML = `you scored ${score} points`;
    document.getElementById('totalScore').innerHTML = `your total score is ${totalScore} points`;
}

function rollMachine() {
    generateResult();
    console.log(`result = ${result1} - ${result2} - ${result3}`);
    if (result1 === result2 === result3) {
        tripleScore();
        console.log(`triple score!`);
    } else if (result1 === result2) {
        doubleScore();
        console.log(`double score!`);
    } else if (result1 === 'cherry') {
        score = 2;
        console.log(`single score!`);
    } else {
        score = 0;
        console.log(`no score`);
    }
    displayResult();
    console.log(`displaying result`);
    canGamble();
    console.log(`check for gamble`);
}



function scoreValidator() {
    if (score > 0) {
        takePoints();
    } else if (totalScore > 0) {
        totalScore -= 1;
        console.log(`subtracted bet`);
        console.log(`rolling machine...`);
        rollMachine();
    } else {
        alert("No rolls left.");
    }
}


function gamble1() {
    if (Math.random() < 0.5) {
        score *= 2;
        document.getElementById('score').innerHTML = `you scored ${score} points`;
        document.getElementById('gamble').innerHTML = `you doubled your points`;
    } else {
        score = 0;
        document.getElementById('score').innerHTML = `you scored ${score} points`;
        document.getElementById('gamble').innerHTML = `you lost your points`;
    }
}

function gamble2() {
    if (Math.random() > 0.5) {
        score *= 2;
        document.getElementById('score').innerHTML = `you scored ${score} points`;
        document.getElementById('gamble').innerHTML = `you doubled your points`;
    } else {
        score = 0;
        document.getElementById('score').innerHTML = `you scored ${score} points`;
        document.getElementById('gamble').innerHTML = `you lost your points`;
    }
}

function canGamble() {
    if (score >0) {
        document.getElementById('gamble').innerHTML = `you can gamble`;
    } else {
        document.getElementById('gamble').innerHTML = `no gambling`;
    }
}

function takePoints() {
    totalScore = totalScore + score;
    console.log(`added score to total score`);
    console.log(`total score = $(totalScore)`);
    score = 0;
    document.getElementById('score').innerHTML = `you scored ${score} points`;
    document.getElementById('totalScore').innerHTML = `your total score is ${totalScore} points`;
}

/*
function
check if score > 0 - then subtract 1
scoring
display
*/

