let historialTiradas = [];
let totalGame = 0;

function getNumberDice() {
    return Math.ceil(Math.random() * 6);
}

function throwDice() {
    historialTiradas.push(getNumberDice())
    lastRoll = historialTiradas[historialTiradas.length - 1]
    document.getElementById('throwDice').innerHTML = 'Ha salido un ' + lastRoll + '.';
}

function recordRolls() {
    document.getElementById('tiradas').innerHTML += "Tirada " + historialTiradas.length + ": " + lastRoll + "<br>";
}

function sumTotal() {
    totalGame += lastRoll;
    document.getElementById('total').innerHTML = "Total: " + totalGame;
}

function playGame() {
    if (totalGame < 21 && !gameFinished()) {
        throwDice();
        recordRolls();
        sumTotal();
    }

    if (totalGame > 21) {
        document.getElementById('total').innerHTML = "Total: " + totalGame + "<br> ¡Has perdido!";
    }

    if (totalGame == 21) {
        document.getElementById('total').innerHTML = "Total: " + totalGame + "<br> ¡Has ganado!";
    }
}

function restartGame() {
    historialTiradas = [];
    totalGame = 0;
    document.getElementById('throwDice').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    document.getElementById('tiradas').innerHTML = '';
    document.getElementById('giveUp').innerHTML = '';
}

function giveUp() {
    if (totalGame < 21) {
        document.getElementById('giveUp').innerHTML = '¡Eres un gallina!';
    }

    if (totalGame > 21) {
        document.getElementById('giveUp').innerHTML = "¡Ya has perdido!";
    }

    if (totalGame == 21) {
        document.getElementById('giveUp').innerHTML = "¡Ya has ganado!";
    }
}

function gameFinished() {
    if (totalGame > 21 || totalGame == 21 || document.getElementById('giveUp').innerHTML == '¡Eres un gallina!') {
        return true;
    } else {
        return false;
    }
}