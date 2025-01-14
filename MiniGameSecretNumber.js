function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function binarySearchGame(secretNumber) {
    let min = 1;
    let max = 100;
    let guess;
    let attempts = 0;
    
    console.log(`Компьютер 1 загадал число: ${secretNumber}`);

    while (true) {
        attempts++;
        guess = Math.floor((min + max) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log("Компьютер 1: Угадал!");
            break;
        } else if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            min = guess + 1;
        } else {
            console.log("Компьютер 1: Меньше.");
            max = guess - 1;
        }
    }

    console.log(`Количество попыток: ${attempts}`);
}

function playGame() {
    const secretNumber = generateSecretNumber();
    binarySearchGame(secretNumber);
}

playGame();